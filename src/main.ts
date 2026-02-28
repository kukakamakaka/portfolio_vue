import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { createI18n } from 'vue-i18n'

const messages = {
    ru: {
        projects: {
            items: {
                1: {
                    title: "АВТОШКОЛА БОТ",
                    tagline: "Инновациялық оқыту платформасы",
                    badge: "EDUCATION",
                    impact_label: "ПАЙДАЛАНУШЫЛАР",
                    impact_stat: "500+",
                    // МЫНА ЖЕРДІ ТЕКСЕР: [] жақша қолданылуы керек
                    tech: ["PYTHON", "FASTAPI", "AIOGRAM", "POSTGRESQL"],
                    features: [
                        "Автоматтандырылған тесттер",
                        "Төлем жүйесін интеграциялау",
                        "Жеке оқу кабинеті"
                    ]
                }
            }
        }
    }
}

const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    messages
})

const app = createApp(App)
app.use(vuetify)
app.use(i18n)
app.mount('#app')