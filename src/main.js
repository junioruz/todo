import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/main.scss'
import { languages } from './i18n'
import { createi18n } from 'vue-i18n'
const lang = localStorage.lang
const i18 = createi18n({
    legacy: true,
    local: lang || 'ru',
    messages: languages
})
createApp(App).mount('#app')
