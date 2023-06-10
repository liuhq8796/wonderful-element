import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Form from '@/components/form';
import Dialog from '@/components/dialog';   

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Form)
app.use(Dialog)

app.mount('#app')
