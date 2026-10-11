# Stardew Valley Hub — 站点工程与部署说明

非官方、全自动、数据驱动的 Stardew Valley 攻略站（Hugo 静态架构），生产环境：<https://www.stardewvalleyhub.wiki/>
本工程依据《Stardew Valley 全自动零维护 SEO 静态攻略站-最终落地建站计划书》搭建。
# Stardew Valley Hub

**站点定位**：面向全球玩家的星露谷工具 + 攻略导航站。所有游戏数据来自开源机器可读数据包（npm `stardew-valley-data`），内容 100% 原创、无版权文本；与 ConcernedApe 无关。

## 站点功能

### 工具类栏目（交互式）
| 栏目 | 路由 | 说明 |
|---|---|---|
| Farm Layout Planner | `/farmlayou/` | 12×8 农场网格规划：建筑/作物/道路放置、Save draft、Clear、Export JSON，localStorage 保存 |
| Sprinkler Layout Planner | `/sprinkler-layout-guide/` | 3×3~15×15 田块洒水器布局规划器：手动放置 + 一键最少洒水器推荐、重置/清空/导出 |
| Gift Lookup | `/gift/` | NPC 礼物查询：按村民/礼物搜索，Loved/Liked 标签 |
| Crop Profit Calculator | `/calculator/` | 作物利润计算器（季度利润、再生作物、酿酒收益） |
| Community Center Checklist | `/bundles/` | 社区中心收集包勾选清单（标准/重混合制切换，localStorage 进度保存） |
| Fish Checklist | `/fish-checklist/` | 鱼类图鉴勾选追踪：按季节/天气/时间/地点分类，进度统计 |
| Museum Checklist | `/museum-checklist/` | 博物馆捐赠追踪：Artifacts / Minerals 分类，搜索与进度统计 |

### 内容类栏目
| 栏目 | 路由 | 说明 |
|---|---|---|
| Guides Hub | `/all-guides/` | 数据驱动原创攻略库：crops / fish / minerals / villagers 四类，每天自动新增 3 篇 |
| Guides 下拉 | `starter` `npc` `crops` `fish` `bundles` `bosses` `weapons` `monsters` `museum` `tier` `maps` | 程序化数据页面（NPC 礼物、作物、鱼类、收集包、BOSS、武器、怪物、博物馆、排行榜、地图） |
| Farm Layout 下拉 | `farm types` `farm maps` | 农场类型与地图攻略 |
| FAQ | `/faq/` | 常见问题（含 FAQPage Schema） |
| Updates | `/updates/` | 更新资讯（`fetch_updates.py` 抓取） |

### 多语言
- **英文（en，默认）**、**简体中文（zh-hans）**、**德语（de）** 三语言
- 核心页人工高质量翻译；详情页标题翻译 + 正文保留英文
- 图片统一 `/images/` 路径，三语言共用同一套图片资源（hero 图按语言调用 en / zh-cn 版本）
- 每次构建由 `gen_lang.py` 自动从最新英文全量生成 zh-hans / de 页面

## 技术栈

- **Hugo**（服务器端 v0.147+，`[pagination] pagerSize = 10` 配置）
- **Python 3.11+**（内容生成脚本）
- **GitHub Actions**（自动更新流水线）
- **Cloudflare Pages**（构建 + 部署，非 www → www 301）

## 目录结构

```
├── hugo.toml                  # 站点配置（三语言、pagination、AdSense、params）
├── build.sh                   # 一键构建入口（见下）
├── README.md
├── i18n/                      # en / zh-hans / de 词典（各 293 条，导航/页脚/首页/工具/JS 文案）
├── data/                      # 勾选追踪数据（fish / artifacts / minerals json）+ .guides-version
├── data-src/package/          # npm stardew-valley-data 数据包（数据 + 像素图标，固化自包含）
├── content/
│   ├── en/                    # 英文内容（默认语言）
│   ├── zh-hans/               # 简体中文（gen_lang.py 自动生成，勿手改）
│   ├── de/                    # 德语（gen_lang.py 自动生成，勿手改）
│   └── ...                    # npc/crops/fish/bundles/faq/updates/boss/museum/tier/maps/all-guides 等栏目
├── layouts/                   # Hugo 模板（header/footer/breadcrumb 多语言 partial、各工具页模板）
├── static/
│   ├── css/style.css          # 全站样式（导航下拉、响应式、工具页布局）
│   ├── images/                # 像素图标 + AI 原创封面图（guide-covers、farm-planner-hero 系列）
│   ├── ads.txt                # AdSense 授权（pub-3866829862674413）
│   └── robots.txt             # 含 Sitemap 声明
├── scripts/
│   ├── build_site.py          # 程序化内容生成器（全站数据栏目页面）
│   ├── gen_lang.py            # 多语言页面生成（MANUAL 人工译文 + PATTERNS 标题模式，幂等）
│   ├── gen_guides.py          # Guides Hub 攻略生成器（新内容优先 + 回填，坏数据自动跳过）
│   ├── fetch_updates.py       # Updates 更新资讯抓取
│   ├── ai_pipeline.py         # 备用 LLM 内容流水线
│   ├── sync_data.py           # 数据同步
│   └── translate_free.py      # 备用翻译脚本
└── .github/workflows/
    ├── auto-update.yml        # 每 3 天 UTC 00:00 同步最新游戏数据（数据 + 图标 + 勾选 json）
    ├── guides-autogen.yml     # 每天 UTC 02:00 生成 3 篇原创攻略（pull --rebase + push 重试加固）
    ├── data-sync.yml          # 数据同步备用
    ├── build-deploy.yml       # 构建部署
    └── ai-content.yml         # AI 内容（手动/周期触发）
```

## 构建

```bash
bash build.sh
```

流程（按序）：
1. `python3 scripts/build_site.py` — 生成程序化内容（NPC/作物/鱼/收集包/FAQ/BOSS/食谱/博物馆/节日/事件/工具/建筑/成就/订单/宠物等栏目页面）
2. 复制像素图标库 `data-src/package/images` → `static/images`（**禁止 `rm -rf static/images`**，否则删掉 AI 原创封面图）
3. 复制勾选追踪数据（fish / artifacts / minerals json）→ `data/`
4. `python3 scripts/gen_lang.py` — 从最新英文全量生成 zh-hans / de 页面
5. `hugo --minify` — 静态构建，输出 `public/`

构建产物自动包含：
- **sitemap**：Hugo 原生生成 `sitemap.xml`（sitemapindex）→ `en/` `zh-hans/` `de/` 三个子 sitemap，每条 URL 带三语言 `hreflang` 交替链接，`lastmod` = 构建日期，无需手动维护
- robots.txt、静态资源

> ⚠️ 不要把旧版 `static/sitemap.xml` 或 `layouts/sitemap.xml` 放回仓库——会覆盖 Hugo 原生三语言 sitemap。

## 自动化流水线

| Workflow | 触发 | 动作 |
|---|---|---|
| `auto-update.yml` | 每 3 天 UTC 00:00 + 手动 | 拉取 npm `stardew-valley-data@latest`，更新数据包与勾选数据，版本升级才提交 |
| `guides-autogen.yml` | 每天 UTC 02:00 + 手动 | 运行 `gen_guides.py --count 3`：有新内容优先生成新物品攻略，无新内容按最新→最老回填；提交后 Cloudflare 自动重新构建（含多语言 + sitemap） |
| `build-deploy.yml` | push | 触发 Cloudflare Pages 构建部署 |

每次 push 后：数据/内容更新 → Cloudflare 自动跑 `bash build.sh` → 三语言页面与 sitemap 同步更新 → 站点上线。

## 数据源与版权合规

- 全部游戏数据：npm `stardew-valley-data`（开源、机器可读、无版权文本），版本见 `data-src/package/package.json`
- 配图：像素图标来自数据包；封面/hero 图全部为 AI 原创像素/农场地图像素风，**不使用官方截图**
- 攻略内容：由脚本基于数据事实 100% 原创生成，不抓取任何外部文章
- 本站为非官方粉丝资源，Stardew Valley 商标归 ConcernedApe 所有

## SEO 与广告

- 每页独立 Title / Description，FAQPage + BreadcrumbList JSON-LD
- hreflang 三语言交替链接；三语言独立 sitemap
- AdSense：`ca-pub-3866829862674413`（`ads.txt` 已部署）；广告位 slot 在 `hugo.toml` 的 `adsenseInArticleSlot` / `adsenseSidebarSlot` 配置
- Cookie 同意弹窗：用户同意前不加载广告脚本
- GSC 提交：`https://www.stardewvalleyhub.wiki/sitemap.xml`

## 本地开发

```bash
# 依赖
hugo >= 0.128（服务器端 0.147+）
python3 >= 3.11

# 构建
bash build.sh

# 本地预览
python3 -m http.server 8899 --directory public
# 打开 http://127.0.0.1:8899/

# 单跑攻略生成器（试跑 3 篇）
python3 scripts/gen_guides.py --count 3

# 单跑多语言生成
python3 scripts/gen_lang.py
```

## 部署

1. 推送仓库到 GitHub `main` 分支
2. Cloudflare Pages 连接仓库，构建命令 `bash build.sh`，输出目录 `public`
3. 域名 `stardewvalleyhub.wiki` 接入 Cloudflare，配置 301：非 www → www（已生效）
4. 在 GSC / Bing Webmaster 提交 sitemap 根地址

