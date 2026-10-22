#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把 recipes/achievements 的小像素图标转 base64 data URI 映射 JSON，
模板据此内嵌图片，消除 81+ 个慢图片请求（根治 Cloudflare 冷缓存导致页面超时）。"""
import json, os, base64, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def build(src_dir, out_name):
    out = {}
    if not os.path.isdir(src_dir):
        print(f"跳过（目录不存在）: {src_dir}")
        return 0
    for fn in sorted(os.listdir(src_dir)):
        p = os.path.join(src_dir, fn)
        if not os.path.isfile(p) or not fn.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            continue
        with open(p, 'rb') as f:
            raw = f.read()
        ext = os.path.splitext(fn)[1].lstrip('.').lower()
        mime = 'jpeg' if ext == 'jpg' else ext
        out[fn] = f"data:image/{mime};base64,{base64.b64encode(raw).decode('ascii')}"
    with open(os.path.join(ROOT, 'data', out_name), 'w', encoding='utf-8') as f:
        json.dump(out, f, ensure_ascii=False)
    print(f"{out_name}: {len(out)} 张图 → {os.path.getsize(os.path.join(ROOT, 'data', out_name))//1024}KB")
    return len(out)

if __name__ == '__main__':
    n1 = build(os.path.join(ROOT, 'static', 'images', 'cooking'), 'cooking-icons.json')
    n2 = build(os.path.join(ROOT, 'static', 'images', 'achievements'), 'achievements-icons.json')
    print(f"完成：cooking {n1} 张，achievements {n2} 张")
