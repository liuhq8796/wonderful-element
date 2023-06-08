import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Form from '@/components/form';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Form)

app.mount('#app')
