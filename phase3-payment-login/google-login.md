# Google 登录接入

<DifficultyBadge level="medium" />
<TimeEstimate :minutes="15" />

## 我需要这个吗？

**选填。** 如果你希望用户通过 Google 账号直接登录你的网站，则需要配置。

如果你的用户群体主要在国内，且不需要 Google 登录，可以跳过。

---

## 操作步骤

### 第一步：访问 Google Cloud Console

1. 访问 [Google Cloud Console](https://console.cloud.google.com)
2. 使用 Google 账号登录

### 第二步：创建项目

1. 点击顶部的项目选择器 → **「新建项目」**
2. 输入项目名称（如你的网站名称）
3. 点击 **「创建」**

### 第三步：配置 OAuth 同意屏幕

1. 在左侧菜单中找到 **「API 和服务」** → **「OAuth 同意屏幕」**
2. 选择用户类型：**「外部」**（External）
3. 填写应用信息：
   - 应用名称
   - 用户支持电子邮件
   - 开发者联系信息
4. 添加授权范围：`email`、`profile`、`openid`
5. 发布状态设为 **「生产环境」**（如仅供测试可保持「测试」）

### 第四步：创建 OAuth 凭据

1. 进入 **「API 和服务」** → **「凭据」**
2. 点击 **「创建凭据」** → **「OAuth 客户端 ID」**
3. 应用类型选择 **「Web 应用」**
4. 填写 **已获授权的 JavaScript 来源**（技术支持会提供你的域名）
5. 创建后记录：
   - **客户端 ID**（Client ID）
   - **客户端密钥**（Client Secret）

---

## 我要提供什么？

<CopyTemplate text="【Google登录配置】
客户端 ID（Client ID）：__________
客户端密钥（Client Secret）：__________" />

---

## 常见问题

:::details 需要科学上网吗？
注册和配置 Google Cloud Console 时需要，但配置完成后用户使用 Google 登录不需要。
:::

:::details 审核需要多久？
如果选择「外部」+「测试」模式，无需审核即可使用，但限制最多 100 个测试用户。切换到「生产环境」可能需要 Google 审核。
:::
