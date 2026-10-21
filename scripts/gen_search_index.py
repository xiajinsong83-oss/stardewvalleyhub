#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
gen_search_index.py — 生成 static/search-index.json（全站搜索索引）
从 data-src/package/data/ 聚合各栏目实体，供 /search/ 页面 JS 过滤。
用法：python3 scripts/gen_search_index.py
"""
import json, os, re, unicodedata

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_SRC = os.path.join(ROOT, "data-src", "package", "data")
OUT = os.path.join(ROOT, "static", "search-index.json")

def slugify(name):
    s = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode()
    s = s.replace("'", "").replace("’", "")
    s = re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")
    return s or "item"

def load(name):
    with open(os.path.join(DATA_SRC, name), encoding="utf-8") as f:
        return json.load(f)

def trunc(s, n=110):
    s = (s or "").strip()
    return s if len(s) <= n else s[: n - 1].rstrip() + "…"

def main():
    idx = []

    for v in load("villagers.json"):
        idx.append({
            "name": v["name"], "type": "villager", "typeLabel": "NPC",
            "url": f"/npc/{slugify(v['name'])}-loved-gifts/",
            "desc": trunc(v.get("description", "")),
        })

    for c in load("crops.json"):
        seasons = "/".join(s.title() for s in c.get("seasons", []))
        idx.append({
            "name": c["name"], "type": "crop", "typeLabel": "Crop",
            "url": f"/crops/{slugify(c['name'])}/",
            "desc": trunc(f"{seasons} · grow {c.get('growDays','?')}d · sell {c.get('cropSellPrice','?')}g · {c.get('description','')}"),
        })

    for f in load("fish.json"):
        loc = f.get("locations", [])
        idx.append({
            "name": f["name"], "type": "fish", "typeLabel": "Fish",
            "url": f"/fish/{slugify(f['name'])}/",
            "desc": trunc(f"{' / '.join(loc[:2]) or 'Various'} · sell {f.get('sellPrice','?')}g"),
        })

    for r in load("cooking.json"):
        ing = ", ".join(i.get("name", "") for i in r.get("ingredients", [])[:4])
        idx.append({
            "name": r["name"], "type": "recipe", "typeLabel": "Recipe",
            "url": f"/recipes/{slugify(r['name'])}/",
            "desc": trunc(f"{ing} · sell {r.get('sellPrice','?')}g"),
        })

    for a in load("artifacts.json"):
        idx.append({
            "name": a["name"], "type": "museum", "typeLabel": "Artifact",
            "url": f"/museum/{slugify(a['name'])}/",
            "desc": trunc(f"Artifact · {', '.join(a.get('locations',[])[:2]) or 'Various'} · sell {a.get('sellPrice','?')}g"),
        })
    for m in load("minerals.json"):
        if m.get("kind") != "mineral":
            continue  # geode/ore/bar/resource/node 无独立页
        idx.append({
            "name": m["name"], "type": "museum", "typeLabel": "Mineral",
            "url": f"/museum/{slugify(m['name'])}/",
            "desc": trunc(f"{m.get('kind','Mineral')} · {', '.join(m.get('locations',[])[:2]) or 'Various'} · sell {m.get('sellPrice','?')}g"),
        })

    for t in load("tools.json"):
        idx.append({
            "name": t["name"], "type": "tool", "typeLabel": "Tool",
            "url": f"/tools/{slugify(t['name'])}/",
            "desc": trunc(t.get("description", "")),
        })

    for w in load("weapons.json"):
        idx.append({
            "name": w["name"], "type": "weapon", "typeLabel": "Weapon",
            "url": f"/weapons/{slugify(w['name'])}/",
            "desc": trunc(f"Damage {w.get('damage','?')} · speed {w.get('speed','?')} · sell {w.get('sellPrice','?')}g"),
        })

    for mo in load("monsters.json"):
        url = f"/boss/{slugify(mo['name'])}/" if mo.get("dangerous") else f"/monsters/{slugify(mo['name'])}/"
        idx.append({
            "name": mo["name"], "type": "monster", "typeLabel": "Monster",
            "url": url,
            "desc": trunc(f"HP {mo.get('hp','?')} · damage {mo.get('damage','?')} · XP {mo.get('xp','?')}"),
        })

    for ac in load("achievements.json"):
        idx.append({
            "name": ac["name"], "type": "achievement", "typeLabel": "Achievement",
            "url": f"/achievements/{slugify(ac['name'])}/",
            "desc": trunc(f"{ac.get('description','')} · reward: {ac.get('reward','')}"),
        })

    for b in load("bundles.json"):
        if b.get("type") != "items":
            continue
        idx.append({
            "name": b["name"], "type": "bundle", "typeLabel": "Bundle",
            "url": "/bundles/",
            "desc": trunc(f"{b.get('room','')} · {b.get('season','')}".strip(" ·")),
        })

    # 排序：按名称
    idx.sort(key=lambda x: x["name"].lower())
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(idx, f, ensure_ascii=False, indent=1)
    print(f"OK: {len(idx)} 条索引 → static/search-index.json")
    from collections import Counter
    print("类型分布:", dict(Counter(x["type"] for x in idx)))

if __name__ == "__main__":
    main()
