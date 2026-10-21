/* ============================================================
 * 送礼最大收益规划工具（纯前端、无后端）
 *
 * 数据来源：Hugo 构建时注入
 *   #planner-ui    = 三语界面文案（en/zh-hans/de）
 *   #npc-data      = site.Data.npc 精简版（name/birthday/gifts）
 *   #universal-data = site.Data.universal_gifts（通用礼物 + 点数表）
 *
 * 逻辑：
 *   1. 用户输入/选择一个物品；
 *   2. 在全体村民中判断该物品属于哪一档
 *      （Love +80 / Like +45 / Neutral +20 / Dislike -20 / Hate -40）；
 *   3. 排序展示每位村民收益，标出最佳目标；
 *   4. 目标村民生日当天收益 ×8。
 * ============================================================ */
(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const ui = JSON.parse($("planner-ui").textContent || "{}");
  const npcData = JSON.parse($("npc-data").textContent || "{}");
  const universal = JSON.parse($("universal-data").textContent || "{}");
  const points = (universal && universal.points) || { love: 80, like: 45, neutral: 20, dislike: -20, hate: -40 };
  const tiers = ui.tiers || {};
  const seasons = ui.seasons || {};

  const norm = (s) => (s || "").toLowerCase().trim();

  /** 物品在 universal 中属于哪一档（返回档位 key 或 null） */
  function universalTier(item) {
    if (!universal) return null;
    for (const tier of ["loves", "likes", "neutrals", "dislikes", "hates"]) {
      const list = (universal[tier] && universal[tier].items) || [];
      if (list.some((i) => norm(i.name) === norm(item))) return tier;
    }
    return null;
  }

  /** 物品对某村民的档位 key（love/like/neutral/dislike/hate/unknown） */
  function classify(npc, item) {
    const g = norm(item);
    const gv = npc.gifts || {};
    const inList = (arr) => (arr || []).some((i) => norm(i.name) === g);
    const uniTier = universalTier(item);

    const check = (tierArr, univFlag, univTier) => {
      if (inList(tierArr)) return true;
      if (univTier && gv[univFlag]) return true;
      return false;
    };

    if (check(gv.loved && gv.loved.items, "universal_loves", uniTier === "loves")) return "love";
    if (check(gv.liked && gv.liked.items, "universal_likes", uniTier === "likes")) return "like";
    if (check(gv.neutral && gv.neutral.items, "universal_neutrals", uniTier === "neutrals")) return "neutral";
    if (check(gv.dislike && gv.dislike.items, "universal_dislikes", uniTier === "dislikes")) return "dislike";
    if (check(gv.hate && gv.hate.items, "universal_hates", uniTier === "hates")) return "hate";
    return "unknown";
  }

  function buildItemOptions() {
    const union = new Set();
    if (universal) {
      for (const tier of ["loves", "likes", "neutrals", "dislikes", "hates"]) {
        ((universal[tier] && universal[tier].items) || []).forEach((i) => union.add(i.name));
      }
    }
    Object.values(npcData).forEach((npc) => {
      const g = npc.gifts || {};
      ["loved", "liked", "neutral", "dislike", "hate"].forEach((k) =>
        ((g[k] && g[k].items) || []).forEach((i) => union.add(i.name))
      );
    });
    return Array.from(union).sort();
  }

  function bdayLabel(birthday) {
    if (!birthday || !birthday.season) return "";
    const s = seasons[birthday.season] || birthday.season;
    return `${ui.bday || "Birthday"}: ${s} ${birthday.day}`;
  }

  function render(item) {
    const out = $("planner-results");
    const rows = [];
    Object.entries(npcData).forEach(([slug, npc]) => {
      const tier = classify(npc, item);
      const pts = points[tier];
      rows.push({ slug, npc, tier, pts });
    });
    rows.sort((a, b) => {
      const ka = a.tier === "unknown" ? -9999 : a.pts;
      const kb = b.tier === "unknown" ? -9999 : b.pts;
      return kb - ka;
    });

    let html = `<h3>${ui.resultsTitle || "Gift points"} — “${item}”</h3>`;
    if (rows.length === 0) {
      html += `<p class="badge-unknown">${ui.none || "No villager data configured."}</p>`;
    } else {
      html += `<ul class="result-list">`;
      rows.forEach((r) => {
        const cls = r.tier === "unknown" ? "badge-unknown" : "pts " + r.tier;
        const val = r.tier === "unknown" ? "?" : (r.pts > 0 ? "+" : "") + r.pts;
        const tierName = tiers[r.tier] || r.tier;
        const bday = bdayLabel(r.npc.birthday);
        html += `<li class="result-item">
            <div>
              <strong>${r.npc.name}</strong>
              ${bday ? `<span class="badge-bday">${bday} · ${ui.bday8 || "Gift ×8"}</span>` : ""}
            </div>
            <span class="pts-badge ${cls}">${tierName} · ${val} ${ui.pts || "pts"}</span>
          </li>`;
      });
      html += `</ul>`;
      const best = rows.find((r) => r.tier === "love");
      if (best) {
        const bday = best.npc.birthday ? ` ${bdayLabel(best.npc.birthday)}` : "";
        html += `<p class="best-target">🎯 ${ui.best || "Best target"}: <strong>${best.npc.name}</strong>${bday}. ${ui.bestText || ""}</p>`;
      }
    }
    out.innerHTML = html;
  }

  function init() {
    const datalist = $("planner-item-options");
    const opts = buildItemOptions();
    datalist.innerHTML = opts.map((n) => `<option value="${n.replace(/"/g, "&quot;")}">`).join("");

    const input = $("planner-item");
    const add = $("planner-add");
    if (!input || !add) return;
    add.addEventListener("click", () => {
      const it = (input.value || "").trim();
      if (it) render(it);
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && input.value.trim()) render(input.value.trim());
    });
  }

  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
})();
