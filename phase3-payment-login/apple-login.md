# Apple 登录接入

<DifficultyBadge level="hard" />
<TimeEstimate :minutes="20" />

## 我需要这个吗？

**选填。** 如果你同时提供 iOS APP，Apple 要求所有支持第三方登录的 APP **必须同时提供 Apple 登录**（App Store 审核要求）。

如果只有网站没有 iOS APP，可以跳过。

---

## 操作步骤

### 第一步：登录 Apple 开发者平台

1. 访问 [Apple Developer](https://developer.apple.com)
2. 使用 Apple ID 登录
3. 需要已加入 **Apple Developer Program**（年费 $99）

### 第二步：配置 Sign in with Apple

1. 进入 **「Certificates, Identifiers & Profiles」**
2. 在 **「Identifiers」** 中选择你的 APP ID（或新建一个）
3. 勾选 **「Sign in with Apple」** 能力
4. 保存

### 第三步：配置 Service ID（网页端）

如果你需要在网站上（而非仅 APP 内）使用 Apple 登录：

1. 在 **「Identifiers」** 中新建一个 **Services ID**
2. 勾选 **「Sign in with Apple」**
3. 配置域名和回调 URL（技术支持会提供）

### 第四步：生成密钥

1. 在 **「Keys」** 中新建密钥
2. 勾选 **「Sign in with Apple」**
3. 下载 **`.p8` 密钥文件**（只能下载一次，务必保存）
4. 记录 **Key ID**

---

## 我要提供什么？

<CopyTemplate text="【Apple登录配置】
Apple Developer 账号（邮箱）：__________
Team ID：__________
Service ID（网页端，如有）：__________
Key ID：__________
密钥文件（.p8）：（请以附件形式发送）" />

---

## 常见问题

:::details 不接入 Apple 登录会怎样？
如果你的 iOS APP 支持了 Facebook/Google 等第三方登录但没提供 Apple 登录，App Store 审核**会被拒绝**。
:::

:::details 只有网站不 APP 需要吗？
如果只有网站没有 iOS APP，Apple 登录不是必须的。
:::
