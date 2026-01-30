import { reactive } from 'vue'

export const locale = reactive({
    current: 'EN' as 'EN' | 'RU' | 'KZ',
    t(key: string) {
        const keys = key.split('.')
        let value: any = messages[this.current]

        for (const k of keys) {
            if (value && value[k]) {
                value = value[k]
            } else {
                return key
            }
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
        skillsSection: {
            backend: {
                title: 'BACKEND',
                status: 'Backend Architecture',
                mainTitle: 'Backend Architecture',
                python: {
                    head: 'Python & Frameworks',
                    desc: '<b>Django:</b> MVT, ORM (N+1 optimization), Custom Auth. <br> <b>FastAPI & Flask:</b> Pydantic, RESTful APIs.'
                },
                php: {
                    head: 'PHP & Automation',
                    desc: '<b>Laravel:</b> MVC, Artisan, Providers. <br> <b>Telegram Bots:</b> State Machines, Google Sheets API.'
                },
                ai: {
                    head: 'AI Integration',
                    desc: '<b>LLM:</b> Ollama, Hugging Face. Implementing AI into business logic and diagnostic systems.'
                },
                db: {
                    head: 'Database Logic',
                    desc: '<b>SQL:</b> PostgreSQL, MySQL. Structural design and complex query optimization.'
                }
            },
            frontend: {
                title: 'FRONTEND',
                mainTitle: 'Frontend & UI',
                vue: 'Composition API, Reactivity',
                ts: 'Strict Typing, Interfaces'
            },
            infra: {
                title: 'INFRA',
                mainTitle: 'Infrastructure',
                git: 'Git (Advanced)'
            }
        }
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
            btn: 'Напишите в Telegram'
        },
        skillsSection: {
            backend: {
                title: 'БЭКЕНД',
                status: 'Разработка логики',
                mainTitle: 'Архитектура Backend',
                python: {
                    head: 'Python и Фреймворки',
                    desc: '<b>Django:</b> MVT, ORM (N+1), кастомная авторизация. <br> <b>FastAPI и Flask:</b> Pydantic, REST API.'
                },
                php: {
                    head: 'PHP и Автоматизация',
                    desc: '<b>Laravel:</b> MVC, Artisan, Providers. <br> <b>TG Боты:</b> State Machines, Google Sheets API.'
                },
                ai: {
                    head: 'Интеграция ИИ',
                    desc: '<b>LLM:</b> Ollama, Hugging Face. Внедрение ИИ в бизнес-логику и системы диагностики.'
                },
                db: {
                    head: 'Логика БД',
                    desc: '<b>SQL:</b> PostgreSQL, MySQL. Проектирование структур и оптимизация сложных запросов.'
                }
            },
            frontend: {
                title: 'ФРОНТЕНД',
                mainTitle: 'Frontend и UI',
                vue: 'Composition API, Реактивность',
                ts: 'Строгая типизация, Интерфейсы'
            },
            infra: {
                title: 'ИНФРА',
                mainTitle: 'Инфраструктура',
                git: 'Git (Продвинутый уровень)'
            }
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
            btn: 'Telegram-ға жазыңыз'
        },
        skillsSection: {
            backend: {
                title: 'БЭКЕНД',
                status: 'Логиканы әзірлеу',
                mainTitle: 'Backend Архитектурасы',
                python: {
                    head: 'Python және Фреймворктер',
                    desc: '<b>Django:</b> MVT, ORM (N+1), кастомды аутентификация. <br> <b>FastAPI және Flask:</b> Pydantic, REST API.'
                },
                php: {
                    head: 'PHP және Автоматизация',
                    desc: '<b>Laravel:</b> MVC, Artisan, Провайдерлер. <br> <b>TG Боттар:</b> State Machines, Google Sheets API.'
                },
                ai: {
                    head: 'ИИ Интеграциясы',
                    desc: '<b>LLM:</b> Ollama, Hugging Face. ИИ-ді бизнес-логика мен диагностика жүйелеріне енгізу.'
                },
                db: {
                    head: 'Деректер қоры',
                    desc: '<b>SQL:</b> PostgreSQL, MySQL. Құрылымдарды жобалау және күрделі сұраныстарды оптимизациялау.'
                }
            },
            frontend: {
                title: 'ФРОНТЕНД',
                mainTitle: 'Frontend және UI',
                vue: 'Composition API, Реактивтілік',
                ts: 'Қатаң типтеу, Интерфейстер'
            },
            infra: {
                title: 'ИНФРА',
                mainTitle: 'Инфрақұрылым',
                git: 'Git (Жоғары деңгей)'
            }
        }
    }
}