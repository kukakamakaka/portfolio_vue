import { reactive } from 'vue'

export const locale = reactive({
    current: 'EN' as 'EN' | 'RU' | 'KZ',
    t(key: string) {
        const keys = key.split('.')
        let value: any = messages[this.current]

        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k]
            } else {
                return key
            }
        }

        // ЗАЩИТА: Если навбар просит 'experience', а там объект/массив,
        // мы возвращаем название ключа, а не весь JSON.
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            if (keys.length === 1) {
                return keys[0]
            }
        }

        return value
    }
})

const messages = {
    EN: {
        about: 'About',
        skills: 'Skills',
        experience1: 'Experience',
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
        },
        certificatesSection: {
            title: 'CERTIFICATIONS',
            subtitle: '// PROFESSIONAL DEVELOPMENT',
            view: 'VIEW CERTIFICATE',
            items: [
                {
                    title: 'Python Essentials 1',
                    issuer: 'Cisco Networking Academy / OpenEDG',
                    date: 'Jan 19, 2026',
                    description: 'Design, develop, and refactor computer programs written in Python 3.'
                },
                {
                    title: 'Ethical Hacker',
                    issuer: 'Astana IT University / Cisco',
                    date: 'Nov 10, 2025',
                    description: 'Completed ethical hacking course through Cisco Networking Academy.'
                },
                {
                    title: 'CCNA: Switching, Routing, and Wireless Essentials',
                    issuer: 'Astana IT University / Cisco',
                    date: 'Oct 31, 2024',
                    description: 'Studied networking protocols, switching, and wireless infrastructure.'
                }
            ]
        },
        projects: {
            title1: 'SELECTED',
            title2: 'WORKS',
            hint: 'GALLERY // VOL. 2026',
            viewProject: "VIEW PROJECT",
            viewGithub: "VIEW GITHUB",
            items: {
                "1": { "title": "QAZAQGAZ SYSTEM", "desc": "Production-ready system launched from scratch in 48 hours. RBAC model and CI/CD pipelines implemented." },
                "2": { "title": "AVTOSCHCOOLA BOT", "desc": "Asynchronous Telegram bot for automated booking. Integration with Google Sheets API." },
                "3": { "title": "SKT ORKEN SITE", "desc": "Corporate website for a construction company. Server-side routing implemented." },
                "4": { "title": "CORE DJANGO API", "desc": "REST API design using Django Rest Framework and JWT authentication." },
                "5": { "title": "VUE 3 PORTFOLIO", "desc": "High-performance portfolio using Composition API and i18n." },
                "6": { "title": "FASTAPI SERVICE", "desc": "Microservice for real-time data processing using Pydantic and Redis." },
                "7": { "title": "DOCKERIZED APP", "desc": "Production infrastructure setup: Nginx, SSL, Docker Compose." },
                "8": { "title": "TASK MANAGER", "desc": "Task management system with access control levels and MySQL." }
            }
        },
        "contacts": {
            "status": "ACTIVE_NEURAL_LINK",
            "get_in": "GET IN",
            "touch": "TOUCH",
            "node": "CURRENT_NODE",
            "astana": "ASTANA, KZ",
            "endpoint": "PRIMARY_ENDPOINT",
            "copy": "CLICK TO COPY",
            "copied": "COPIED!",
            "dev_channel": "DEV CHANNEL",
            "student": "AITU Student"
        },
        experience: {
            journey: "2025 — 2026 Career Journey",
            viewSource: "VIEW SOURCE",
            items: [
                {
                    month: "JANUARY 2026",
                    company: "QazaqGaz NTC",
                    role: "Junior Laravel Developer (Test Task)",
                    achievements: ["Helpdesk system on Laravel 12 with RBAC model.", "Admin panel for tickets, categories and priorities.", "Full environment and DB setup using Seeders."]
                },
                {
                    month: "JUNE 2025",
                    company: "Avtoshkola NS",
                    role: "Commercial Bot Developer",
                    achievements: ["Driving lessons booking via Google Sheets API.", "Payment monitoring and auto-notifications.", "Architecture based on python-telegram-bot + FastAPI."]
                },
                {
                    month: "JUNE 2025",
                    company: "SKT ORKEN BUILD",
                    role: "Web Developer Intern",
                    achievements: ["Corporate site on Flask with Jinja2 templates.", "Server optimization for macOS specific ports.", "Responsive layout and asset structure design."],
                    comment: "My first site, don't judge too hard haha"
                }
            ]
        }
    },
    RU: {
        about: 'Обо мне',
        skills: 'Навыки',
        experience1: 'Опыт',
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
        },
        certificatesSection: {
            title: 'СЕРТИФИКАТЫ',
            subtitle: '// ПРОФЕССИОНАЛЬНОЕ РАЗВИТИЕ',
            view: 'СМОТРЕТЬ',
            items: [
                {
                    title: 'Python Essentials 1',
                    issuer: 'Cisco Networking Academy / OpenEDG',
                    date: '19 янв, 2026',
                    description: 'Проектирование и разработка программ на языке Python 3.'
                },
                {
                    title: 'Ethical Hacker',
                    issuer: 'Astana IT University / Cisco',
                    date: '10 ноя, 2025',
                    description: 'Курс этичного хакинга через академию Cisco.'
                },
                {
                    title: 'CCNA: Switching, Routing, and Wireless Essentials',
                    issuer: 'Astana IT University / Cisco',
                    date: '31 окт, 2024',
                    description: 'Сетевые протоколы, коммутация и беспроводная инфраструктура.'
                }
            ]
        },
        projects: {
            title1: 'ИЗБРАННЫЕ',
            title2: 'РАБОТЫ',
            hint: 'ГАЛЕРЕЯ // 2026',
            viewProject: "СМОТРЕТЬ ПРОЕКТ",
            viewGithub: "СМОТРЕТЬ GITHUB",
            items: {
                "1": { "title": "QAZAQGAZ SYSTEM", "desc": "система запущенная с нуля за 48 часов." },
                "2": { "title": "AVTOSCHCOOLA BOT", "desc": "Telegram-бот для автоматизации записи." },
                "3": { "title": "SKT ORKEN SITE", "desc": "Корпоративный сайт для строительной компании." },
                "4": { "title": "CORE DJANGO API", "desc": "Проектирование REST API с JWT." },
                "5": { "title": "VUE 3 PORTFOLIO", "desc": "Портфолио на Composition API." },
                "6": { "title": "FASTAPI SERVICE", "desc": "Микросервис на Pydantic." },
                "7": { "title": "DOCKERIZED APP", "desc": "Nginx, SSL, Docker Compose." },
                "8": { "title": "TASK MANAGER", "desc": "Система управления задачами." }
            }
        },
        "contacts": {
            "status": "АКТИВНОЕ_СОЕДИНЕНИЕ",
            "get_in": "СВЯЖИТЕСЬ",
            "touch": "СО МНОЙ",
            "node": "ТЕКУЩАЯ_ЛОКАЦИЯ",
            "astana": "АСТАНА, КЗ",
            "endpoint": "ОСНОВНАЯ_ПОЧТА",
            "copy": "НАЖМИТЕ, ЧТОБЫ КОПИРОВАТЬ",
            "copied": "СКОПИРОВАНО!",
            "dev_channel": "DEV КАНАЛ",
            "student": "Студент AITU"
        },
        experience: {
            journey: "2025 — 2026 Карьерный путь",
            viewSource: "ИСХОДНЫЙ КОД",
            items: [
                {
                    month: "ЯНВАРЬ 2026",
                    company: "QazaqGaz НТЦ",
                    role: "Junior Laravel Developer",
                    achievements: ["Helpdesk система на Laravel 12", "RBAC модель", "Seeders"]
                },
                {
                    month: "ИЮНЬ 2025",
                    company: "Avtoshkola NS",
                    role: "Разработчик ботов",
                    achievements: ["Google Sheets API", "Мониторинг оплат"]
                },
                {
                    month: "ИЮНЬ 2025",
                    company: "СКТ ӨРКЕН БЬЮЛД",
                    role: "Web-интерн",
                    achievements: ["Сайт на Flask", "Верстка"],
                    comment: "Мой первый сайт, строго не судить ахаха"
                }
            ]
        }
    },
    KZ: {
        about: 'Мен жайлы',
        skills: 'Дағдылар',
        experience1: 'Тәжірибе',
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
            lead: '19 жастағы {uni} түлегімін.',
            uni: 'Astana IT University',
            mod: 'заманауилыққа',
            perf: 'өнімділікке',
            desc: 'Мен Fullstack-әзірлеушімін.',
            btn: 'Telegram-ға жазыңыз'
        },
        skillsSection: {
            backend: {
                title: 'БЭКЕНД',
                status: 'Логиканы әзірлеу',
                mainTitle: 'Backend Архитектурасы',
                python: {
                    head: 'Python және Фреймворктер',
                    desc: '<b>Django:</b> MVT, ORM (N+1). <br> <b>FastAPI және Flask:</b> Pydantic, REST API.'
                },
                php: {
                    head: 'PHP және Автоматизация',
                    desc: '<b>Laravel:</b> MVC. <br> <b>TG Боттар:</b> Google Sheets API.'
                },
                ai: {
                    head: 'ИИ Интеграциясы',
                    desc: '<b>LLM:</b> Ollama, Hugging Face.'
                },
                db: {
                    head: 'Деректер қоры',
                    desc: '<b>SQL:</b> PostgreSQL, MySQL.'
                }
            },
            frontend: {
                title: 'ФРОНТЕНД',
                mainTitle: 'Frontend және UI',
                vue: 'Composition API',
                ts: 'Interfaces'
            },
            infra: {
                title: 'ИНФРА',
                mainTitle: 'Инфрақұрылым',
                git: 'Git (Жоғары деңгей)'
            }
        },
        certificatesSection: {
            title: 'СЕРТИФИКАТТАР',
            subtitle: '// КӘСІБИ ДАМУ',
            view: 'ҚАРАУ',
            items: [
                {
                    title: 'Python Essentials 1',
                    issuer: 'Cisco Networking Academy / OpenEDG',
                    date: '19 қаң, 2026',
                    description: 'Python 3 тілінде бағдарламаларды жобалау және әзірлеу.'
                },
                {
                    title: 'Ethical Hacker',
                    issuer: 'Astana IT University / Cisco',
                    date: '10 қар, 2025',
                    description: 'Cisco академиясы арқылы этикалық хакинг курсы.'
                },
                {
                    title: 'CCNA: Switching, Routing, and Wireless Essentials',
                    issuer: 'Astana IT University / Cisco',
                    date: '31 қаз, 2024',
                    description: 'Желілік хаттамалар, коммутация және сымсыз инфрақұрылым.'
                }
            ]
        },
        projects: {
            title1: 'ТАҢДАУЛЫ',
            title2: 'ЖҰМЫСТАР',
            hint: 'ГАЛЕРЕЯ // 2026',
            viewProject: "ЖОБАҒА ҚАРАУ",
            viewGithub: "GITHUB-ТЫ ҚАРАУ",
            items: {
                "1": { "title": "QAZAQGAZ ЖҮЙЕСІ", "desc": "48 сағатта нөлден іске қосылған жүйе." },
                "2": { "title": "AVTOSCHCOOLA БОТЫ", "desc": "Автоматтандыруға арналған Telegram-бот." },
                "3": { "title": "SKT ORKEN САЙТЫ", "desc": "Құрылыс компаниясына арналған сайт." },
                "4": { "title": "CORE DJANGO API", "desc": "DRF және JWT көмегімен REST API." },
                "5": { "title": "VUE 3 ПОРТФОЛИО", "desc": "i18n қолданылған портфолио." },
                "6": { "title": "FASTAPI ҚЫЗМЕТІ", "desc": "Деректерді өңдеуге арналған микросервис." },
                "7": { "title": "DOCKERIZED ҚОСЫМША", "desc": "Nginx, SSL, Docker Compose." },
                "8": { "title": "ТАПСЫРМАЛАР МЕНЕДЖЕРІ", "desc": "Тапсырмаларды басқару жүйесі." }
            }
        },
        "contacts": {
            "status": "БЕЛСЕНДІ_БАЙЛАНЫС",
            "get_in": "БІЗБЕН",
            "touch": "ХАБАРЛАС",
            "node": "АҒЫМДАҒЫ_НУКТЕ",
            "astana": "АСТАНА, ҚЗ",
            "endpoint": "НЕГІЗГІ_ПОШТА",
            "copy": "КӨШІРУ ҮШІН БАСЫҢЫЗ",
            "copied": "КӨШІРІЛДІ!",
            "dev_channel": "DEV КАНАЛ",
            "student": "AITU Студенті"
        },
        experience: {
            journey: "2025 — 2026 Мансап жолы",
            viewSource: "БАСТАПҚЫ КОД",
            items: [
                {
                    month: "ҚАҢТАР 2026",
                    company: "QazaqGaz ГТӨ",
                    role: "Junior Laravel Developer",
                    achievements: ["Helpdesk жүйесі", "RBAC моделі"]
                },
                {
                    month: "МАУСЫМ 2025",
                    company: "Avtoshkola NS",
                    role: "Бот әзірлеуші",
                    achievements: ["Google Sheets API автоматтандыру"]
                },
                {
                    month: "МАУСЫМ 2025",
                    company: "СКТ ӨРКЕН БЬЮЛД",
                    role: "Web-әзірлеуші стажер",
                    achievements: ["Flask негізіндегі сайт"],
                    comment: "Менің алғашқы сайтым, қатты сынамаңыздар ахаха"
                }
            ]
        }
    }
}
