# Stardew Valley Hub — 站点工程与部署说明

非官方、全自动、数据驱动的 Stardew Valley 英文攻略站（Hugo 静态架构）。
本工程依据《Stardew Valley 全自动零维护 SEO 静态攻略站-最终落地建站计划书》搭建。

## 目录结构（对齐计划书第六/七章）
```
├── hugo.toml                    # 站点配置：9 套语言（en 默认 + zh-hans/zh-hant/de/ja/ko/fr/pt/ru）
├── data/stardew.json            # 核心统计数据（自动生成）
├── content/en/                  # 英文全站（阶段一完整上线）
│   ├── _index.md                # 首页
│   ├── npc/                     # 34 个 NPC 礼物页（/npc/xxx-loved-gifts/）
│   ├── crops/                   # 47 个作物页（/crops/xxx/）
│   ├── fish/                    # 77 个鱼类页（/fish/xxx/）
│   ├── bundles/                 # 52 个社区中心收集包页（/bundles/xxx/）
│   ├── faq/                     # 12 个 FAQ 页（/faq/xxx/）
│   ├── updates/                 # 更新资讯栏目（/updates/，对标 portalaser.com/updates/）
│   └── privacy/terms/dmca/about/contact.md   # 法律与合规页面（含 DMCA 完整流程）
├── content/{zh-hans,zh-hant,de,ja,ko,fr,pt,ru}/   # 8 种附加语言首页（阶段二 AI 流水线接入）
├── layouts/                     # Hugo 模板
│   ├── _default/                # baseof / list / single（面包屑、FAQ Schema、内链卡片）
│   ├── npc|crops|fish|bundles|faq/  # section 单页模板（对齐计划书文件命名）
│   ├── updates/                 # 更新栏目列表/单页
│   └── partials/                # head(ads/cookie控制) header lang-switch footer ad-inarticle ad-sidebar cookie-consent faq single-core breadcrumb
├── static/
│   ├── ads.txt                  # AdSense 授权文件（pub-3866829862674413）
│   ├── css/style.css            # 极简样式（表格移动端横滚、卡片、响应式）
│   └── js/cookie-consent.js     # GDPR 弹窗：同意前不加载广告 JS
├── scripts/
│   ├── build_site.py            # 全站内容生成器（数据→content md）
│   └── sync_data.py             # 数据同步脚本（占位，接入时实现增量比对）
└── .github/workflows/           # 双流水线：data-sync.yml（每日）+ build-deploy.yml（构建部署+Cloudflare 刷新）
```

## 已实现（阶段一）
- 英文全站 257 页：首页、34 NPC、47 作物、77 鱼、52 收集包、10 BOSS、12 FAQ、2 更新资讯、5 法律页、1 玩家反馈页
- 真实开源数据：npm `stardew-valley-data` v1.1.1（机器可读、无版权文本）；BOSS 栏目数据来自 monsters.json / monster-loot.json / weapons.json / monster-slayer-goals.json（HP、伤害、掉落、武器建议均由数据可复算推导并标注估算）
- 新增栏目（本轮）：
  - `/boss/`：BOSS & 精英怪攻略（Prismatic Slime、Tiger Slime、Big Slime + 7 种危险矿井强化怪），含数据表/掉落表/武器命中估算/FAQ
  - `/feedback/`：玩家反馈页（官方论坛、Discord、Reddit、Steam 社区、官方联系页等公开渠道链接 + 反馈指南，静态站不采集用户数据）
- SEO：每页独立 Title/Description、FAQPage + BreadcrumbList JSON-LD、面包屑、hreflang、每语言独立 sitemap、robots.txt
- 合规：Cookie 同意弹窗（未同意不加载 AdSense）、广告随机二选一（通栏/侧边，基于页面哈希）、ads.txt、DMCA/Privacy/Terms/About/Contact
- 多语言框架：9 套语言配置 + 语言切换器 + 各语言 sitemap
- 界面：v2 农场主题（森林绿/奶油/金黄配色、卡片 hover、像素风标题、表格移动端横滚、响应式），面向年轻玩家群体

## 阶段二（AI 差异化内容流水线，已交付框架）
- `scripts/ai_pipeline.py`：OpenAI 兼容 LLM 流水线，实现计划书第九章全部环节——
  差异化 Prompt、事实校验（与 data/*.json 数值比对，冲突即丢弃）、相似度过滤（difflib > 0.62 丢弃）、
  字数浮动（±15%）、断点续跑（跳过已有）、质量抽样报告（reports/ai-report-*.json）、连续失败保护。
- 运行方式：
  ```bash
  export LLM_API_KEY=...            # OpenAI 兼容
  export LLM_BASE_URL=... LLM_MODEL=...
  python3 scripts/ai_pipeline.py --langs zh-hans zh-hant de ja ko fr pt ru
  python3 scripts/ai_pipeline.py --langs de --limit 3     # 小批试跑
  python3 scripts/ai_pipeline.py --langs zh-hans --dry-run  # 无 key 计划模式
  ```
- `.github/workflows/ai-content.yml`：手动/每周自动触发，生成后提交 content/ 自动触发 build-deploy。
- 生成完成后：`python3 scripts/build_site.py data/ .` 保持统计与 sitemap 一致，Hugo 自动构建部署。

## 本地构建
```bash
# 1) 获取数据（已核实的开源源，替换计划书待核实源）
#    npm pack stardew-valley-data 并解压，或 cd 到包含 data/*.json 的目录
python3 scripts/build_site.py <data_dir> .
hugo --minify        # 输出 public/
```

## 部署步骤（对齐计划书第十五章）
1. 推送本工程到 GitHub 私有仓库 main 分支；
2. GitHub Pages 选择 "GitHub Actions" 部署源（build-deploy.yml 自动构建部署）；
3. Cloudflare 接入域名 stardewvalleyhub.wiki：A/AAAA 指向 GitHub Pages（或 CNAME），开启 HTTPS、缓存规则（ads.txt 绕过缓存）、关闭 github.io 收录；
4. 在仓库 Secrets 配置 `CLOUDFLARE_API_TOKEN`、`CLOUDFLARE_ZONE_ID`（可选，用于构建后清 CDN 缓存）；
5. AdSense 后台创建 In-Article 与 Vertical Sidebar 广告单元，替换 `hugo.toml` 中 `adsenseInArticleSlot` / `adsenseSidebarSlot`；
6. 提交 Google/Bing 收录（sitemap: https://stardewvalleyhub.wiki/sitemap.xml）。

## 待接入（阶段二剩余）
- 配置 LLM_API_KEY 后运行 ai_pipeline.py 生成 8 套语言全量正文（脚本与 workflow 已就绪，见上）；
- `sync_data.py` 增量同步实现（与上游开源源对接前须核实计划书指定源 github.com/StardewValley/Data 是否可用，已备选：npm stardew-valley-data、stardew-valley-json-exporter、junimosphere）；
- 扩充栏目（第十七章）：recipes / money / museum / festivals / events / tools / unlocks / achievements / orders / pets。

## 合规红线
- 数据仅取机器可读开源数据，无 Wiki 文本、无官方图片；
- 页面布局参考同类站（stardewvalleyguide.com、portalaser.com 等），不复制其文案与素材；
- Stardew Valley 商标归原作者所有，本站为非官方粉丝资源。
