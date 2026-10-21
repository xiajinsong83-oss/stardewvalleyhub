/* site-search.js — 全站搜索：读取 /search-index.json，按输入过滤并分组渲染 */
(function () {
  "use strict";
  var input = document.getElementById("siteSearchInput");
  if (!input) return;
  var meta = document.getElementById("searchMeta");
  var box = document.getElementById("searchResults");

  var INDEX_URL = "/search-index.json";
  var typeOrder = ["villager", "crop", "fish", "recipe", "item", "tool", "weapon", "monster", "museum", "achievement", "bundle"];
  var typeLabels = {
    villager: "NPC", crop: "Crops", fish: "Fish", recipe: "Recipes",
    tool: "Tools", weapon: "Weapons", monster: "Monsters/Bosses",
    museum: "Museum", achievement: "Achievements", bundle: "Bundles"
  };

  var state = { index: [], q: "" };

  function init() {
    var q = new URLSearchParams(window.location.search).get("q") || "";
    input.value = q;
    state.q = q.trim().toLowerCase();
    input.addEventListener("input", function () {
      state.q = input.value.trim().toLowerCase();
      render();
    });
    fetch(INDEX_URL)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        state.index = data;
        render();
      })
      .catch(function () {
        if (meta) meta.textContent = "Search index failed to load.";
      });
  }

  function match(entry, q) {
    var hay = (entry.name + " " + (entry.typeLabel || "") + " " + (entry.desc || "")).toLowerCase();
    return hay.indexOf(q) !== -1;
  }

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function highlight(name, q) {
    if (!q) return esc(name);
    var i = name.toLowerCase().indexOf(q);
    if (i === -1) return esc(name);
    return esc(name.slice(0, i)) + "<mark>" + esc(name.slice(i, i + q.length)) + "</mark>" + esc(name.slice(i + q.length));
  }

  function render() {
    if (!state.index.length) return;
    var q = state.q;
    if (!q) {
      if (meta) meta.textContent = "";
      box.innerHTML = "<p class=\"search-empty\">Type to search across the whole hub…</p>";
      return;
    }
    var hits = state.index.filter(function (e) { return match(e, q); });
    hits.sort(function (a, b) { return a.name.localeCompare(b.name); });
    if (meta) meta.textContent = hits.length + " results for \"" + esc(input.value) + "\"";

    if (!hits.length) {
      box.innerHTML = "<p class=\"search-empty\">No matches for \"" + esc(input.value) + "\". Try an English item name (e.g. Amethyst, Blueberry).</p>";
      return;
    }
    // 分组
    var groups = {};
    hits.forEach(function (e) {
      var t = typeLabels[e.type] || e.type;
      (groups[t] = groups[t] || []).push(e);
    });
    var html = "";
    typeOrder.forEach(function (t) {
      var label = typeLabels[t];
      var list = groups[label];
      if (!list || !list.length) return;
      html += "<section class=\"search-group\"><h3>" + esc(label) + " <span class=\"sg-count\">" + list.length + "</span></h3><ul class=\"search-list\">";
      list.forEach(function (e) {
        html += "<li><a class=\"search-item\" href=\"" + esc(e.url) + "\"><span class=\"si-name\">" + highlight(e.name, q) + "</span><span class=\"si-desc\">" + esc(e.desc || "") + "</span></a></li>";
      });
      html += "</ul></section>";
    });
    box.innerHTML = html;
  }

  init();
})();
