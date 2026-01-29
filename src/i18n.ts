import { reactive } from 'vue'

export const locale = reactive({
    current: 'EN',
    // Метод для получения перевода по ключу (учитывая вложенность)
    t(key: string) {
        const keys = key.split('.')
        let value: any = messages[this.current as keyof typeof messages]

        for (const k of keys) {
            if (value[k]) value = value[k]
            else return key
        }
        return value
    }
})

const messages = {
    EN: {
        about: 'About',
        skills: 'Skills',
        experience: 'Experience',
        certificates: 'Certificates',
        contact: 'Contact',
        viewProjects: 'Projects',
        hero: {
            status: 'Status',
            statusText: 'Open for opportunities',
            location: 'Location',
            locText: 'Astana, Kazakhstan',
            scroll: 'Scroll to explore'
        },
        aboutSection: {
            title: 'ABOUT',
            lead: 'A 19-year-old {uni} graduate. Crafting digital solutions with a focus on {mod} and {perf}.',
            uni: 'Astana IT University',
            mod: 'modernity',
            perf: 'performance',
            desc: 'I am a Fullstack Developer dedicated to building seamless interfaces and robust backends. My mission is to continuously evolve, master emerging technologies, and drive the industry forward through innovative software engineering.',
            btn: 'GET IN TOUCH'
        },


    },
    RU: {
        about: 'Обо мне',
        skills: 'Навыки',
        experience: 'Опыт',
        certificates: 'Сертификаты',
        contact: 'Контакты',
        viewProjects: 'Проекты',
        hero: {
            status: 'Статус',
            statusText: 'Открыта к предложениям',
            location: 'Локация',
            locText: 'Астана, Казахстан',
            scroll: 'Листайте вниз'
        },
        aboutSection: {
            title: 'ОБО МНЕ',
            lead: '19-летняя выпускница {uni}. Создаю цифровые решения с акцентом на {mod} и {perf}.',
            uni: 'Astana IT University',
            mod: 'современность',
            perf: 'производительность',
            desc: 'Я — Fullstack-разработчик, создающий чистые интерфейсы и надежные бэкенды. Моя цель — непрерывное развитие, освоение новых технологий и вклад в индустрию через качественную разработку ПО.',
            btn: 'Напишите в telergam'
        }
    },
    KZ: {
        about: 'Мен жайлы',
        skills: 'Дағдылар',
        experience: 'Тәжірибе',
        certificates: 'Сертификаттар',
        contact: 'Контактілер',
        viewProjects: 'Жобалар',
        hero: {
            status: 'Статус',
            statusText: 'Жаңа жобаларға дайын',
            location: 'Локация',
            locText: 'Астана, Қазақстан',
            scroll: 'Төмен түсіріңіз'
        },
        aboutSection: {
            title: 'МЕН ЖАЙЛЫ',
            lead: '19 жастағы {uni} түлегімін. {mod} пен {perf} бағытталған цифрлық шешімдер жасаймын.',
            uni: 'Astana IT University',
            mod: 'заманауилыққа',
            perf: 'өнімділікке',
            desc: 'Мен таза интерфейстер мен сенімді бэкендтер құруға бағытталған Fullstack-әзірлеушімін. Менің мақсатым — үнемі даму, жаңа технологияларды игеру және бағдарламалық қамтамасыз ету арқылы индустрияны алға жылжыту.',
            btn: 'telergam-ға жазыңыз'
        }
    }
}
