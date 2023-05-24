import type { App } from 'vue'
import ElForm from './ElForm.vue'

export default {
  install(app: App) {
    app.component(ElForm.name, ElForm)
  }
}
