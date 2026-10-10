#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Stardew Valley Hub — Updates 栏目抓取器
========================================
从官方博客 stardewvalley.net 的 RSS feed 抓取游戏更新新闻（最新 → 最老），
生成 content/en/updates/ 下的 Hugo 页面。只引用官方发布的标题、日期与链接，
正文为简短原创摘要（截断官方摘要并注明来源），不复制长文，合规引用。

规则：
  1. 抓取目标 30 条（--limit 可调），从最新时间往最老时间；
  2. 不足目标条数时有多少抓多少（feed 抓尽为止）；
  3. 每轮运行清理 updates 栏目下非本次抓取生成的旧页面，保持最新→最老一致。

用法:
  python3 scripts/fetch_updates.py [--limit 30] [--dry-run]
"""
import argparse
import datetime
import html as htmllib
import os
import re
import sys
import unicodedata
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UPDATES_DIR = os.path.join(ROOT, "content", "en", "updates")
FEED_URL = "https://www.stardewvalley.net/feed/"
BASE_URL = "https://www.stardewvalley.net"
UA = {"User-Agent": "Mozilla/5.0 (compatible; StardewValleyHubBot/1.0; fan guide)"}


def slugify(name):
    s = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode()
    s = s.replace("'", "").replace("’", "").replace(".", "")
    s = re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")
    return s or "item"


def fetch(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.read().decode("utf-8", errors="ignore")


def parse_items(xml):
    items = []
    for it in re.findall(r"<item>(.*?)</item>", xml, re.S):
        def grab(tag):
            m = re.search(r"<%s>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?</%s>" % (tag, tag), it, re.S)
            return m.group(1).strip() if m else ""
        title = grab("title")
        link = grab("link")
        pub = grab("pubDate")
        desc = re.sub(r"<[^>]+>", " ", grab("description"))
        desc = re.sub(r"\s+", " ", desc).strip()
        if not title:
            continue
        # pubDate: "Thu, 09 Jul 2026 19:12:34 +0000"
        try:
            dt = datetime.datetime.strptime(pub[:25], "%a, %d %b %Y %H:%M:%S")
            iso = dt.date().isoformat()
            pretty = dt.strftime("%B %d, %Y")
        except ValueError:
            iso = datetime.date.today().isoformat()
            pretty = ""
        items.append({"title": htmllib.unescape(title), "link": link, "iso": iso,
                      "pretty": pretty, "desc": htmllib.unescape(desc)})
    return items


def gen_md(it):
    title = it["title"]
    slug = slugify(title)
    desc = (title + " — Official Stardew Valley news from stardewvalley.net (" + it["iso"] + ").").strip()
    if len(desc) > 155:
        desc = desc[:152].rstrip() + "…"
    # 原创摘要：截断官方 RSS 摘要的前两句（<=160 字符），注明来源链接
    summary = it["desc"]
    if not summary:
        summary = "Official announcement from the Stardew Valley development blog."
    summary = re.sub(r"\s+", " ", summary).strip()
    if len(summary) > 160:
        summary = summary[:157].rstrip() + "…"
    body = [
        "---",
        'title: "%s"' % title,
        'description: "%s"' % desc,
        "date: %s" % it["iso"],
        "draft: false",
        "type: updates",
        'link: "%s"' % it["link"],
        "---",
        "# %s" % title,
        "",
        "**Published:** %s" % it["pretty"],
        "",
        "%s" % summary,
        "",
        "Source: [Official Stardew Valley blog](%s)" % (it["link"] or BASE_URL),
        "",
    ]
    return slug, "\n".join(body) + "\n"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=30)
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    # 1. 翻页抓取 RSS（每页 10 条），最新 → 最老
    all_items = []
    page = 1
    while len(all_items) < args.limit:
        url = FEED_URL if page == 1 else FEED_URL + "?paged=%d" % page
        try:
            xml = fetch(url)
        except Exception as e:
            print("Fetch failed on page %d: %s" % (page, e), file=sys.stderr)
            break
        items = parse_items(xml)
        if not items:
            break
        all_items.extend(items)
        if len(items) < 10:
            break  # 最后一页
        page += 1
        if page > 20:  # 安全上限
            break

    all_items = all_items[:args.limit]
    print("Fetched %d updates (newest → oldest)." % len(all_items))

    # 2. 生成页面
    written = []
    for it in all_items:
        slug, md = gen_md(it)
        out = os.path.join(UPDATES_DIR, slug + ".md")
        if args.dry_run:
            print("[dry-run] would write:", os.path.relpath(out, ROOT))
        else:
            os.makedirs(UPDATES_DIR, exist_ok=True)
            with open(out, "w", encoding="utf-8") as f:
                f.write(md)
            print("Wrote:", os.path.relpath(out, ROOT))
        written.append(slug)

    if args.dry_run:
        return

    # 3. 清理旧页面（保留 _index.md 与本次生成的）
    for fn in os.listdir(UPDATES_DIR):
        if fn.endswith(".md") and fn != "_index.md" and fn[:-3] not in written:
            os.remove(os.path.join(UPDATES_DIR, fn))
            print("Removed old:", fn)

    print("Done: %d updates, index preserved." % len(written))


if __name__ == "__main__":
    main()
