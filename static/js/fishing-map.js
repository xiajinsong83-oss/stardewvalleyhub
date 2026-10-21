/* fishing-map.js — 钓鱼地图：水域归一化 + 季节/天气筛选 + 按水域分组渲染 */
(function () {
  "use strict";
  var fish = window.__fishData || [];
  if (!fish.length) return;

  var waterSel = document.getElementById("fmWater");
  var seasonBtns = document.querySelectorAll("#fmSeason .fm-chip");
  var weatherBtns = document.querySelectorAll("#fmWeather .fm-chip");
  var meta = document.getElementById("fmMeta");
  var box = document.getElementById("fmResults");

  var state = { water: "", season: "", weather: "" };

  // 水域关键词归一化（按优先级匹配）
  var WATER_RULES = [
    { key: "ocean", label: "Ocean", match: /ocean|night market|submarine/i },
    { key: "river", label: "River", match: /\briver\b/i },
    { key: "mountain-lake", label: "Mountain Lake", match: /mountain lake/i },
    { key: "forest-pond", label: "Forest Pond", match: /forest pond/i },
    { key: "secret-woods", label: "Secret Woods", match: /secret woods/i },
    { key: "sewers", label: "Sewers", match: /sewers|mutant bug/i },
    { key: "mines", label: "Mines", match: /mines/i },
    { key: "desert", label: "Desert", match: /desert/i },
    { key: "ginger-island", label: "Ginger Island", match: /ginger island/i },
    { key: "forest", label: "Forest", match: /\bforest\b|witch/i },
    { key: "crab-pot", label: "Crab Pot", match: /crab pot|freshwater/i }
  ];

  function watersOf(locStr) {
    var out = [];
    WATER_RULES.forEach(function (r) {
      if (r.match.test(locStr || "")) out.push(r.key);
    });
    return out;
  }

  function seasonPass(f, s) {
    if (!s) return true;
    return (f.seasons || []).indexOf(s) !== -1;
  }
  function weatherPass(f, w) {
    if (!w) return true;
    return (f.weather || "") === w || (f.weather || "") === "both" || (f.weather || "") === "";
  }

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function stars(n) {
    n = n || 0;
    var full = Math.min(5, Math.max(1, Math.round(n / 20)));
    var s = "";
    for (var i = 0; i < 5; i++) s += i < full ? "★" : "☆";
    return s;
  }

  function render() {
    var hits = fish.filter(function (f) {
      var ws = watersOf(f.location);
      if (state.water && ws.indexOf(state.water) === -1) return false;
      if (!seasonPass(f, state.season)) return false;
      if (!weatherPass(f, state.weather)) return false;
      return true;
    });

    meta.textContent = hits.length + " / " + fish.length + " fish";
    if (!hits.length) { box.innerHTML = "<p class=\"search-empty\">No fish match these filters.</p>"; return; }

    // 按水域分组
    var groups = {};
    hits.forEach(function (f) {
      var ws = watersOf(f.location);
      var used = ws.length ? ws : ["other"];
      used.forEach(function (w) {
        (groups[w] = groups[w] || []).push(f);
      });
    });

    var html = "";
    var order = ["ocean", "river", "mountain-lake", "forest-pond", "secret-woods", "mines", "sewers", "desert", "ginger-island", "forest", "crab-pot", "other"];
    order.forEach(function (w) {
      var list = groups[w] || [];
      if (!list.length) return;
      var label = (WATER_RULES.filter(function (r) { return r.key === w; })[0] || { label: "Other" }).label;
      list.sort(function (a, b) { return (b.difficulty || 0) - (a.difficulty || 0); });
      html += "<section class=\"fm-group\"><h3>" + esc(label) + " <span class=\"sg-count\">" + list.length + "</span></h3><ul class=\"fm-list\">";
      list.forEach(function (f) {
        html += "<li class=\"fm-item\">" +
          "<div class=\"fm-item-head\"><strong>" + esc(f.name) + "</strong>" +
          "<span class=\"fm-diff\" title=\"Difficulty " + f.difficulty + "\">" + stars(f.difficulty) + " <em>" + (f.difficulty || 0) + "</em></span></div>" +
          "<div class=\"fm-item-meta\">" +
          "<span>" + esc(f.time || "All day") + "</span>" +
          "<span>" + (f.seasons || []).map(function (s) { return s[0].toUpperCase() + s.slice(1); }).join(" / ") + "</span>" +
          "<span>" + (f.weather ? (f.weather === "both" ? "Any weather" : f.weather[0].toUpperCase() + f.weather.slice(1)) : "Any") + "</span>" +
          "<span><strong>" + f.sellPrice + "g</strong></span>" +
          "</div></li>";
      });
      html += "</ul></section>";
    });
    box.innerHTML = html;
  }

  // 水域下拉构建
  var allWaters = {};
  fish.forEach(function (f) {
    watersOf(f.location).forEach(function (w) { allWaters[w] = true; });
  });
  Object.keys(allWaters).sort().forEach(function (w) {
    var label = (WATER_RULES.filter(function (r) { return r.key === w; })[0] || { label: w }).label;
    var opt = document.createElement("option");
    opt.value = w; opt.textContent = label;
    waterSel.appendChild(opt);
  });

  waterSel.addEventListener("change", function () { state.water = this.value; render(); });
  seasonBtns.forEach(function (b) {
    b.addEventListener("click", function () {
      seasonBtns.forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active"); state.season = b.dataset.v; render();
    });
  });
  weatherBtns.forEach(function (b) {
    b.addEventListener("click", function () {
      weatherBtns.forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active"); state.weather = b.dataset.v; render();
    });
  });

  render();
})();
