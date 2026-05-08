---
layout: page
---

<div class="home-hero">
  <h1>部署物料准备指南</h1>
  <p class="hero-sub">代购网站私有化部署 — 按步骤准备物料，<strong>快速上线你的代购平台</strong></p>
</div>

<div class="phase-grid">

  <a href="phase1-basics/domain" class="phase-card p1">
    <div class="card-head">
      <span class="card-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
      </span>
      <span class="card-status s-required">必填</span>
    </div>
    <div class="card-title">基础信息</div>
    <div class="card-desc">域名、网站名称、联系方式、LOGO、Favicon</div>
    <div class="card-tags">
      <span class="card-tag">域名</span>
      <span class="card-tag">名称</span>
      <span class="card-tag">LOGO</span>
      <span class="card-tag">联系方式</span>
      <span class="card-tag">Favicon</span>
    </div>
  </a>

  <a href="phase2-notification/smtp" class="phase-card p2">
    <div class="card-head">
      <span class="card-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
      </span>
      <span class="card-status s-required">必填</span>
    </div>
    <div class="card-title">通知服务</div>
    <div class="card-desc">系统邮件和短信通知能力配置</div>
    <div class="card-tags">
      <span class="card-tag">SMTP邮箱</span>
      <span class="card-tag">短信接口</span>
    </div>
  </a>

  <a href="phase3-payment-login/paypal" class="phase-card p3">
    <div class="card-head">
      <span class="card-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
      </span>
      <span class="card-status s-partial">部分必填</span>
    </div>
    <div class="card-title">支付接入</div>
    <div class="card-desc">在线支付通道开通与配置</div>
    <div class="card-tags">
      <span class="card-tag">PayPal</span>
      <span class="card-tag">支付宝</span>
      <span class="card-tag">微信支付</span>
      <span class="card-tag">Stripe</span>
    </div>
  </a>

  <a href="phase3-payment-login/facebook" class="phase-card p4">
    <div class="card-head">
      <span class="card-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
      </span>
      <span class="card-status s-partial">部分必填</span>
    </div>
    <div class="card-title">第三方登录</div>
    <div class="card-desc">社交账号快捷登录与短信验证</div>
    <div class="card-tags">
      <span class="card-tag">Facebook</span>
      <span class="card-tag">Google</span>
      <span class="card-tag">微信</span>
      <span class="card-tag">Apple</span>
      <span class="card-tag">短信模板</span>
    </div>
  </a>

  <a href="phase4-visual/banner" class="phase-card p5">
    <div class="card-head">
      <span class="card-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
      </span>
      <span class="card-status s-required">必填</span>
    </div>
    <div class="card-title">视觉素材</div>
    <div class="card-desc">网站视觉相关的图片素材</div>
    <div class="card-tags">
      <span class="card-tag">背景图</span>
      <span class="card-tag">分享预览图</span>
    </div>
  </a>

  <a href="phase5-advanced/google-translate" class="phase-card p6">
    <div class="card-head">
      <span class="card-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
      </span>
      <span class="card-status s-optional">选填</span>
    </div>
    <div class="card-title">进阶功能</div>
    <div class="card-desc">翻译、客服、APP上架、数据统计</div>
    <div class="card-tags">
      <span class="card-tag">谷歌翻译</span>
      <span class="card-tag">客服系统</span>
      <span class="card-tag">APP上架</span>
      <span class="card-tag">统计代码</span>
    </div>
  </a>

  <a href="phase6-compliance/privacy-policy" class="phase-card p7">
    <div class="card-head">
      <span class="card-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </span>
      <span class="card-status s-suggest">建议</span>
    </div>
    <div class="card-title">合规与备案</div>
    <div class="card-desc">法律合规与域名备案</div>
    <div class="card-tags">
      <span class="card-tag">隐私政策</span>
      <span class="card-tag">ICP备案</span>
    </div>
  </a>

</div>

<div class="home-guide">
  <h2>使用说明</h2>
  <ul>
    <li>每个页面包含完整的操作步骤和「一键复制」提交模板</li>
    <li>标注「选填」的项可以跳过，不影响核心功能运行</li>
    <li>支付与登录涉及第三方平台注册审核，建议尽早开始</li>
    <li>遇到问题可随时联系技术支持</li>
  </ul>
</div>
