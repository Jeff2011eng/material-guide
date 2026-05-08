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
    if (typeof window !== 'undefined') {
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement
        const hamburger = target.closest('.VPNavBarHamburger') as HTMLElement
        if (!hamburger) return
        e.stopImmediatePropagation()
        e.preventDefault()
        const sidebar = document.querySelector('.VPSidebar') as HTMLElement
        if (!sidebar) return
        const isOpen = sidebar.classList.contains('open')
        if (isOpen) {
          sidebar.classList.remove('open')
          document.body.style.removeProperty('overflow')
          const bd = document.querySelector('.sidebar-backdrop')
          bd?.remove()
        } else {
          sidebar.classList.add('open')
          document.body.style.overflow = 'hidden'
          if (!document.querySelector('.sidebar-backdrop')) {
            const bd = document.createElement('div')
            bd.className = 'sidebar-backdrop'
            bd.addEventListener('click', () => {
              sidebar.classList.remove('open')
              document.body.style.removeProperty('overflow')
              bd.remove()
            })
            document.body.appendChild(bd)
          }
        }
      }, true)
    }
  },
}
