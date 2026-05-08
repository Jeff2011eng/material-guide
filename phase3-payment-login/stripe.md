# Stripe 支付接入

<DifficultyBadge level="medium" />
<TimeEstimate :minutes="20" />

## 我需要这个吗？

**选填。** 如果你需要支持信用卡直接支付（Visa、MasterCard 等），Stripe 是国际主流的支付通道。

如果 PayPal 已经满足你的收款需求，可以跳过此项。

:::warning 注意
Stripe 账号需要使用海外主体或支持的国家/地区注册，中国大陆主体暂不支持直接使用 Stripe。如果需要接入，建议注册香港公司或其他支持地区的主体。
:::

---

## 操作步骤

### 第一步：注册 Stripe 账号

1. 访问 [Stripe 官网](https://stripe.com)
2. 点击 **「Start now」** 注册账号
3. 填写邮箱、密码完成注册

### 第二步：完成商家认证

1. 登录后进入 **「Settings」** → **「Account details」**
2. 填写商家信息：
   - 业务类型
   - 公司地址（需为 Stripe 支持的国家/地区）
   - 银行账户信息（用于收款）
   - 身份验证材料

### 第三步：获取 API 密钥

1. 进入 **「Developers」** → **「API keys」**
2. 记录以下信息：
   - **Publishable key**（公钥，以 `pk_` 开头）
   - **Secret key**（私钥，以 `sk_` 开头）

:::warning 重要
Secret key 是敏感信息，请勿泄露。如果怀疑泄露，请立即在后台重新生成。
:::

---

## 我要提供什么？

<CopyTemplate text="【Stripe支付配置】
Publishable key：__________
Secret key：__________" />

---

## 常见问题

:::details 中国大陆可以注册 Stripe 吗？
目前 Stripe 不支持中国大陆主体直接注册。常见解决方案：
- 注册香港公司后开通 Stripe 香港账号
- 使用 Stripe Atlas 注册美国公司后开通
:::

:::details Stripe 和 PayPal 怎么选？
- **PayPal**：用户需要有 PayPal 账号，覆盖面广，国内可注册
- **Stripe**：支持直接信用卡支付，用户体验更好，但注册门槛较高

两者可以同时接入，不冲突。
:::
