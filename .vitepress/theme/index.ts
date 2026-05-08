import DefaultTheme from 'vitepress/theme'
import DifficultyBadge from './components/DifficultyBadge.vue'
import TimeEstimate from './components/TimeEstimate.vue'
import CopyTemplate from './components/CopyTemplate.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DifficultyBadge', DifficultyBadge)
    app.component('TimeEstimate', TimeEstimate)
    app.component('CopyTemplate', CopyTemplate)
  },
  setup() {
    // On mobile, redirect the top nav hamburger to open the sidebar
    // instead of the nav menu screen
    if (typeof window !== 'undefined') {
      import('vitepress').then(({ inBrowser }) => {
        if (!inBrowser) return
        const observer = new MutationObserver(() => {
          const hamburger = document.querySelector('.VPNavBar .menu-button')
          const sidebarToggle = document.querySelector('.VPLocalNav .menu')
          if (hamburger && sidebarToggle && !hamburger.dataset.redirected) {
            hamburger.dataset.redirected = 'true'
            hamburger.addEventListener('click', (e) => {
              e.stopImmediatePropagation()
              e.preventDefault()
              sidebarToggle.click()
            }, true)
          }
        })
        observer.observe(document.body, { childList: true, subtree: true })
      })
    }
  },
}
