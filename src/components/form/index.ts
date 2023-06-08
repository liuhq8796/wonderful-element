import type { App } from 'vue'
import ElForm from './ElForm.vue'
import ElFormItem from './ElFormItem.vue';
import ElInput from './ElInput.vue';

export default {
  install(app: App) {
    app.component(ElForm.name, ElForm)
    app.component(ElFormItem.name, ElFormItem)
    app.component(ElInput.name, ElInput)
  }
}
