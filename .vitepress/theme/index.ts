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
}
