#!/usr/bin/env bash
# check-local-sitemap.sh — 本地 Hugo 构建产物 sitemap 校验
# 用法: bash check-local-sitemap.sh <public/sitemap.xml 路径>
# 检查: NUL 空字节 / 正确闭合标签 / 合理大小
# 用途: 部署前验证，检测到污染即退出码 1，可接入 CI 中止部署

set -u

FILE="${1:-public/sitemap.xml}"

if [ ! -f "$FILE" ]; then
  echo "FAIL  文件不存在: $FILE"
  echo "      请先在 Hugo 项目根目录执行: hugo --gc 生成构建产物"
  exit 1
fi

SIZE=$(wc -c < "$FILE" | tr -d ' ')
echo "INFO  文件: $FILE ($SIZE 字节)"

# 1. NUL 字节检查（损坏文件的典型特征）
if LC_ALL=C grep -q $'\x00' "$FILE"; then
  echo "FAIL  检测到 NUL 空字节（\\x00）——文件被污染，禁止部署"
  echo "      执行: python3 -c \"d=open('$FILE','rb').read(); print('第一个NUL位置:', d.find(b'\\x00'))\""
  exit 1
fi
echo "PASS  无 NUL 空字节"

# 2. 闭合检查（顶层索引必须闭合 </sitemapindex>）
if tail -c 64 "$FILE" | grep -q '</sitemapindex>'; then
  echo "PASS  顶层索引正确闭合 </sitemapindex>"
elif tail -c 64 "$FILE" | grep -q '</urlset>'; then
  echo "PASS  页面 sitemap 正确闭合 </urlset>"
else
  echo "FAIL  文件未以 </sitemapindex> 或 </urlset> 结尾，XML 结构不完整"
  echo "      最后 64 字节: $(tail -c 64 "$FILE" | tr -d '\n' | head -c 120)"
  exit 1
fi

# 3. 大小合理性（顶层索引通常 < 2KB；页面级 sitemap 几十~几百 KB 属正常）
if head -c 400 "$FILE" | grep -q '<sitemapindex'; then
  if [ "$SIZE" -gt 2000 ]; then
    echo "WARN  顶层 sitemapindex 仅应几百字节，当前 $SIZE 字节——建议检查"
  else
    echo "PASS  顶层 sitemapindex 大小合理"
  fi
fi

echo "===== 校验通过，可以部署 ====="
