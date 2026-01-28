import { reactive } from 'vue'

export const translations = {
    EN: {
        about: "About",
        skills: "Skills",
        experience: "Experience",
        certificates: "Certificates",
        contact: "Contact",
        viewProjects: "VIEW PROJECTS"
    },
    RU: {
        about: "Обо мне",
        skills: "Навыки",
        experience: "Опыт",
        certificates: "Сертификаты",
        contact: "Контакты",
        viewProjects: "МОИ ПРОЕКТЫ"
    },
    KZ: {
        about: "Мен туралы",
        skills: "Дағдылар",
        experience: "Тәжірибе",
        certificates: "Сертификаттар",
        contact: "Контактілер",
        viewProjects: "ЖОБАЛАР"
    }
}

export const locale = reactive({
    current: 'EN' as keyof typeof translations,
    t(key: string) {
        return (translations[this.current] as any)[key] || key
    }
})