/* artisan-profit.js — 工艺品加工利润计算器（1.6 版公式） */
(function () {
  "use strict";
  var cropSel = document.getElementById("apCrop");
  var artisanBox = document.getElementById("apArtisan");
  if (!cropSel) return;
  var infoBox = document.getElementById("apCropInfo");
  var tableWrap = document.getElementById("apTableWrap");
  var note = document.getElementById("apNote");

  // 1.6 公式（Stardew Valley Wiki / StardewPriceDB 交叉验证）
  var RECIPES = {
    wine:    { name: "Wine",        equip: "Keg",            days: 6.25, calc: function (b) { return b * 3; } },
    juice:   { name: "Juice",       equip: "Keg",            days: 3.75, calc: function (b) { return Math.floor(b * 2.25); } },
    jelly:   { name: "Jelly",       equip: "Preserves Jar",  days: 2.5,  calc: function (b) { return b * 2 + 50; } },
    pickles: { name: "Pickles",     equip: "Preserves Jar",  days: 2.5,  calc: function (b) { return b * 2 + 50; } },
    dried:   { name: "Dried Fruit", equip: "Dehydrator",     days: 1,    calc: function (b) { return Math.floor((b * 7.5 + 25) / 5); }, need: 5 },
    paleale: { name: "Pale Ale",    equip: "Keg",            days: 1.41, calc: function () { return 300; } },
    beer:    { name: "Beer",        equip: "Keg",            days: 1.09, calc: function () { return 200; } }
  };
  var UI = window.__apUI || {
    direct: "Sell directly", process: "Processed", gain: "Gain vs direct", gainDay: "Gain / day",
    needs: "needs", time: "Time", machine: "Machine", units: "Sell / unit",
    honeyNote: "Honey needs a nearby flower — price depends on the flower.",
    quality: "Quality does not affect artisan goods.",
    artisanApplied: "Artisan profession +40% applied."
  };

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function fmt(n) {
    return Math.round(n * 10) / 10;
  }

  function render() {
    var name = cropSel.value;
    if (!name) return;
    var crop = null;
    // 从 DOM option 找数据——直接读取注入的 JSON（由模板提供）
    if (window.__apCrops && window.__apCrops[name]) crop = window.__apCrops[name];
    if (!crop) { tableWrap.innerHTML = ""; return; }

    var artisan = artisanBox.checked;
    var mult = artisan ? 1.4 : 1;
    var base = crop.cropSellPrice || 0;
    var uses = crop.artisanUses || {};

    infoBox.innerHTML = "<p><strong>" + esc(name) + "</strong> — base sell " + base + "g · grow " +
      crop.growDays + "d" + (crop.regrowDays ? " · regrows every " + crop.regrowDays + "d" : "") +
      " · seed " + (crop.seedBuyPrices && crop.seedBuyPrices.length ? crop.seedBuyPrices[0].price : "?") + "g</p>";

    var rows = [];
    rows.push({ label: UI.direct, equip: "—", price: base, gain: 0, days: 0, perDay: 0, kind: "base" });
    if (uses.wine)   rows.push(mkRow(RECIPES.wine, base, mult));
    if (uses.juice)  rows.push(mkRow(RECIPES.juice, base, mult));
    if (uses.jelly)  rows.push(mkRow(RECIPES.jelly, base, mult));
    if (uses.pickles)rows.push(mkRow(RECIPES.pickles, base, mult));
    if (uses.driedFruit) rows.push(mkRow(RECIPES.dried, base, mult));
    if (crop.name === "Hops") rows.push(mkRow(RECIPES.paleale, base, mult));
    if (crop.name === "Wheat") rows.push(mkRow(RECIPES.beer, base, mult));

    // 按日均增值降序（基准除外）
    var sorted = rows.slice(1).sort(function (a, b) { return b.perDay - a.perDay; });
    rows = [rows[0]].concat(sorted);

    var html = "<table class=\"ap-table\"><thead><tr><th>" + UI.process + "</th><th>" + UI.machine + "</th><th>" + UI.units + "</th><th>" + UI.gain + "</th><th>" + UI.time + "</th><th>" + UI.gainDay + "</th></tr></thead><tbody>";
    rows.forEach(function (r) {
      var cls = r.kind === "base" ? " class=\"ap-base\"" : "";
      html += "<tr" + cls + "><td>" + esc(r.label) + (r.need ? " <span class=\"ap-need\">(" + r.need + " " + UI.needs + ")</span>" : "") + "</td>" +
        "<td>" + esc(r.equip) + "</td><td>" + fmt(r.price) + "g</td>" +
        "<td>" + (r.gain > 0 ? "+" : "") + fmt(r.gain) + "g</td>" +
        "<td>" + fmt(r.days) + "d</td><td><strong>" + fmt(r.perDay) + "g</strong></td></tr>";
    });
    html += "</tbody></table>";
    tableWrap.innerHTML = html;

    var honeyNote = uses.honey ? "<p class=\"fish-meta\">— " + UI.honeyNote + "</p>" : "";
    note.innerHTML = honeyNote + "<p class=\"fish-version\">" + UI.quality + (artisan ? " " + UI.artisanApplied : "") + " Formulas verified against Stardew Valley Wiki 1.6.</p>";
  }

  function mkRow(rec, base, mult) {
    var price = rec.calc(base) * mult;
    var gain = price - base;
    var perDay = rec.days > 0 ? gain / rec.days : gain;
    return {
      label: rec.name, equip: rec.equip, price: price, gain: gain,
      days: rec.days, perDay: perDay, need: rec.need || 1
    };
  }

  cropSel.addEventListener("change", render);
  artisanBox.addEventListener("change", render);
  render();
})();
