#!/usr/bin/env bash
# 全站构建：生成内容 → 图标库自动从 data-src 复制 → Hugo 静态构建
set -e
cd "$(dirname "$0")"

echo "[1/3] 生成程序化内容..."
python3 scripts/build_site.py

echo "[2/3] 复制像素图标库（data-src/package/images → static/images）..."
rm -rf static/images
cp -r data-src/package/images static/images

echo "[2.5/3] 复制勾选追踪数据文件..."
cp data-src/package/data/fish.json data/fish.json
cp data-src/package/data/artifacts.json data/artifacts.json
cp data-src/package/data/minerals.json data/minerals.json

echo "[3/3] Hugo 静态构建..."
hugo --minify

echo "✅ 构建完成，产物在 public/"
