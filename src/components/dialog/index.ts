import ElDialog from './ElDialog.vue';
import { type App  } from 'vue';

export default {
    install(app: App) {
        app.component(ElDialog.name, ElDialog)
    }
}