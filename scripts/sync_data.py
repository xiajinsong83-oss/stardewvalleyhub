#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
流水线一：每日数据同步（增量、旧数据锁定）—— 占位实现
计划书指定源 github.com/StardewValley/Data 接入前须核实；已核实备选源：
  1) npm: stardew-valley-data（本工程当前使用）
  2) https://awesome.ecosyste.ms/projects/github.com/nitwhiz/stardew-valley-json-exporter
  3) https://junimosphere.app/data
本脚本目标（接入真实上游后实现）：
  1. 拉取上游最新结构化数据；
  2. 与本地 data/ 比对，仅增量追加新增条目，旧数据 100% 保留不修改；
  3. 无新增则静默退出（不触发构建）；有新增则输出变更清单并退出码 0，
     由 data-sync.yml 提交推送、触发 build-deploy。
"""
import argparse, json, sys

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--pull", action="store_true", help="拉取上游数据（占位）")
    ap.add_argument("--data-dir", default="data/", help="本地数据目录")
    args = ap.parse_args()

    print("[sync] 占位实现：接入上游源后执行增量比对。")
    print("[sync] 当前数据由 scripts/build_site.py 从 npm stardew-valley-data 包生成。")
    # TODO(阶段二): 实现上游拉取 + 增量比对 + 变更清单输出
    return 0

if __name__ == "__main__":
    sys.exit(main())
