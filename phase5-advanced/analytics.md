# 网站统计代码

<DifficultyBadge level="medium" />
<TimeEstimate :minutes="15" />

## 我需要这个吗？

**选填。** 如果你需要了解网站访问情况（访客数、页面浏览量、用户来源等），建议接入统计工具。

不做也不影响网站正常运行，但上线后你可能需要这些数据来优化运营。

---

## 工具选择

| 工具 | 费用 | 特点 |
|------|------|------|
| [Google Analytics](https://analytics.google.com) | 免费 | 功能最强大，国际主流 |
| [百度统计](https://tongji.baidu.com) | 免费 | 国内访问速度快，中文界面友好 |
| [Microsoft Clarity](https://clarity.microsoft.com) | 免费 | 支持用户行为录屏回放，完全免费 |

:::tip 推荐
建议同时接入 **Google Analytics**（全面分析）和 **Microsoft Clarity**（用户行为分析），两者都免费且互补。
:::

---

## 操作步骤

### Google Analytics

:::details 点击展开配置教程

**第一步：注册**

1. 访问 [Google Analytics](https://analytics.google.com)
2. 使用 Google 账号登录
3. 点击 **「开始衡量」**

**第二步：创建媒体资源**

1. 填写账号名称（如公司名）
2. 创建媒体资源，填写网站名称和域名
3. 选择行业类别和业务信息

**第三步：获取跟踪代码**

1. 创建完成后会获得一段 **gtag.js 代码** 或 **GA4 衡量 ID**（格式如 `G-XXXXXXXXXX`）
2. 记录这个 ID

:::

### 百度统计

:::details 点击展开配置教程

**第一步：注册**

1. 访问 [百度统计](https://tongji.baidu.com)
2. 使用百度账号登录

**第二步：添加网站**

1. 点击 **「管理」** → **「新增网站」**
2. 填写网站域名

**第三步：获取统计代码**

1. 创建后获取一段 JavaScript 统计代码
2. 复制整段代码

:::

### Microsoft Clarity

:::details 点击展开配置教程

**第一步：注册**

1. 访问 [Microsoft Clarity](https://clarity.microsoft.com)
2. 使用微软账号或 Google 账号登录

**第二步：添加项目**

1. 点击 **「Add new project」**
2. 输入网站名称和域名

**第三步：获取代码**

1. 获取 Clarity 的 JavaScript 代码片段
2. 复制整段代码

:::

---

## 我要提供什么？

<CopyTemplate text="【网站统计配置】
统计工具：（Google Analytics / 百度统计 / Microsoft Clarity）
GA4 衡量 ID（如 G-XXXXXXXXXX）：__________
或 统计代码：（粘贴整段代码）" />

---

## 常见问题

:::details 这些工具会拖慢网站速度吗？
不会。统计代码非常轻量（几KB），对页面加载速度的影响几乎可以忽略。
:::

:::details 需要科学上网吗？
- Google Analytics 注册时需要，但统计代码在国内可以正常加载
- 百度统计和 Microsoft Clarity 国内可直接访问
:::
