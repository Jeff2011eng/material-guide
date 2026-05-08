import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '部署物料准备指南',
  description: '代购网站 — 私有化部署物料准备引导',
  lang: 'zh-CN',
  base: '/material-guide/',
  appearance: 'light',
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
    ],

    sidebar: [
      {
        text: '基础信息',
        collapsed: false,
        items: [
          { text: '域名', link: '/phase1-basics/domain' },
          { text: '网站名称与标题', link: '/phase1-basics/site-name' },
          { text: '官方联系方式', link: '/phase1-basics/contact' },
          { text: '网站LOGO', link: '/phase1-basics/logo' },
          { text: 'Favicon图标', link: '/phase1-basics/favicon' },
        ],
      },
      {
        text: '通知服务',
        collapsed: false,
        items: [
          { text: 'SMTP邮箱配置', link: '/phase2-notification/smtp' },
          { text: '短信接口（选填）', link: '/phase2-notification/sms' },
        ],
      },
      {
        text: '支付接入',
        collapsed: false,
        items: [
          { text: 'PayPal商户接入', link: '/phase3-payment-login/paypal' },
          { text: '支付宝商户接入（选填）', link: '/phase3-payment-login/alipay' },
          { text: '微信支付商户接入（选填）', link: '/phase3-payment-login/wechat-pay' },
          { text: 'Stripe支付接入（选填）', link: '/phase3-payment-login/stripe' },
        ],
      },
      {
        text: '第三方登录',
        collapsed: false,
        items: [
          { text: 'Facebook登录接入', link: '/phase3-payment-login/facebook' },
          { text: 'Google登录接入（选填）', link: '/phase3-payment-login/google-login' },
          { text: '微信登录接入（选填）', link: '/phase3-payment-login/wechat-login' },
          { text: 'Apple登录接入（选填）', link: '/phase3-payment-login/apple-login' },
          { text: '短信模板配置（选填）', link: '/phase3-payment-login/sms-template' },
        ],
      },
      {
        text: '视觉素材',
        collapsed: false,
        items: [
          { text: '推广联盟背景图', link: '/phase4-visual/banner' },
          { text: '登录注册页背景图（选填）', link: '/phase4-visual/login-bg' },
          { text: '社交分享预览图（选填）', link: '/phase4-visual/og-image' },
        ],
      },
      {
        text: '进阶功能',
        collapsed: false,
        items: [
          { text: '谷歌翻译API（选填）', link: '/phase5-advanced/google-translate' },
          { text: '在线客服系统（选填）', link: '/phase5-advanced/customer-service' },
          { text: 'APP代上架 - iOS（选填）', link: '/phase5-advanced/app-publish' },
          { text: 'APP代上架 - Android（选填）', link: '/phase5-advanced/android-publish' },
          { text: '网站统计代码（选填）', link: '/phase5-advanced/analytics' },
        ],
      },
      {
        text: '合规与备案',
        collapsed: false,
        items: [
          { text: '隐私政策与服务条款', link: '/phase6-compliance/privacy-policy' },
          { text: 'ICP备案（视情况）', link: '/phase6-compliance/icp' },
        ],
      },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
              },
            },
          },
        },
      },
    },

    footer: {
      message: '如有疑问请联系技术支持',
    },

    outline: {
      label: '页面导航',
      level: [2, 3],
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    lastUpdated: {
      text: '最后更新于',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})
