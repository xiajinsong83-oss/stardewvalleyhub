#!/usr/bin/env bash
# verify-live-sitemap.sh — 线上 sitemap 一键验证（根索引 + 3 个语言子 sitemap）
# 用法: bash verify-live-sitemap.sh https://www.stardewvalleyhub.wiki
# 输出: 每个文件的 字节数 / NUL 检查 / 闭合检查 / 整体 PASS|FAIL

set -u

BASE="${1:-https://www.stardewvalleyhub.wiki}"
BASE="${BASE%/}"

URLS=(
  "$BASE/sitemap.xml"
  "$BASE/en/sitemap.xml"
  "$BASE/zh-hans/sitemap.xml"
  "$BASE/de/sitemap.xml"
)

echo "===== 线上 sitemap 验证: $BASE ====="
echo ""

ALL_PASS=1

for url in "${URLS[@]}"; do
  TMP=$(mktemp)
  HTTP=$(curl -sL -m 30 -o "$TMP" -w '%{http_code}' "$url")
  SIZE=$(wc -c < "$TMP" | tr -d ' ')
  NAME="${url#"$BASE"/}"

  if [ "$HTTP" != "200" ]; then
    echo "FAIL  $NAME  HTTP=$HTTP  (期望 200)"
    ALL_PASS=0
    rm -f "$TMP"
    continue
  fi

  # 空文件检查（HTTP 200 但响应为空 = 抓取截断 / 缓存异常）
  if [ "$SIZE" = "0" ]; then
    echo "FAIL  $NAME  HTTP=200 但响应为 0 字节（抓取异常，请重试或清缓存后重跑）"
    ALL_PASS=0
    rm -f "$TMP"
    continue
  fi

  # NUL 检查
  if LC_ALL=C grep -q $'\x00' "$TMP"; then
    NUL="FAIL 含NUL"
    ALL_PASS=0
  else
    NUL="PASS 无NUL"
  fi

  # 闭合检查（顶层索引必须闭合 </sitemapindex>；语言子 sitemap 必须闭合 </urlset>）
  TAIL=$(tail -c 64 "$TMP")
  if [ "$NAME" = "sitemap.xml" ]; then
    if echo "$TAIL" | grep -q '</sitemapindex>'; then
      CLOSE="PASS 顶层索引闭合</sitemapindex>"
    else
      CLOSE="FAIL 顶层索引未闭合</sitemapindex>"
      ALL_PASS=0
    fi
  else
    if echo "$TAIL" | grep -q '</urlset>'; then
      CLOSE="PASS 页面sitemap闭合</urlset>"
    else
      CLOSE="FAIL 页面sitemap未闭合</urlset>"
      ALL_PASS=0
    fi
  fi

  echo "$NAME  [HTTP=$HTTP] [$SIZE 字节] [$NUL] [$CLOSE]"
  rm -f "$TMP"
done

echo ""
if [ "$ALL_PASS" = "1" ]; then
  echo "===== 全部 PASS：线上 sitemap 已修复 ====="
else
  echo "===== 存在 FAIL：请先清除 Cloudflare 全站缓存后重跑本脚本 ====="
  echo "      Dashboard → Caching → Configuration → Purge Everything"
  exit 1
fi
