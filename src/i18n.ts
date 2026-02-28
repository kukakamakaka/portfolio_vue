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
            view_details: "VIEW_DETAILS",
            production: "PRODUCTION",
            tech_stack: "TECH_STACK",
            logic_flow: "LOGIC_FLOW",
            open_bot: "OPEN_BOT",
            source: "SOURCE",
            features: "FEATURES",
            items: {
                "1": {
                    title: "NS DRIVE",
                    category: "MANAGEMENT_SYSTEM",
                    tagline: "Automated booking system for driving school",
                    badge: "2026_STABLE // COMMERCIAL",
                    impact_label: "OPERATIONAL_EFFICIENCY",
                    impact_stat: "90%",
                    features: [
                        "24/7 Automated Booking",
                        "API Integration & Monitoring",
                        "Admin Dashboard for scheduling",
                        "Real-time Telegram notifications"
                    ],
                    tech: ["Python 3.10+", "python-telegram-bot (v20.7)", "FastAPI + Uvicorn", "Gspread", "APScheduler"]
                },
            }
        },
        contacts: {
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
        },
        footer: {
            role: "WEB_DEVELOPER",
            nav_title: "NAVIGATION",
            about: "ABOUT",
            works: "WORKS",
            stack: "STACK",
            location: "LOCATION",
            city: "ASTANA, KAZAKHSTAN",
            socials: "SOCIAL_SYSTEMS",
            built: "BUILT WITH VUE 3 & GSAP",
            update: "LAST_UPDATE: FEB_2026"
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
            archive: "// АРХИВ_2026",
            view_details: "ПОДРОБНЕЕ",
            production: "В ПРОДАКШНЕ",
            tech_stack: "СТЕК ТЕХНОЛОГИЙ",
            logic_flow: "ЛОГИКА РАБОТЫ",
            open_bot: "ОТКРЫТЬ БОТА",
            source: "ИСХОДНЫЙ КОД",
            features: "ФУНКЦИИ",
            items: {
                "1": {
                    title: "NS DRIVE",
                    category: "СИСТЕМА УПРАВЛЕНИЯ",
                    tagline: "Автоматизация записи для автошколы",
                    badge: "СТАБИЛЬНО 2026 // КОММЕРЧЕСКИЙ",
                    impact_label: "ЭФФЕКТИВНОСТЬ",
                    impact_stat: "90%",
                    features: [
                        "Автоматическая запись 24/7",
                        "Интеграция и мониторинг API",
                        "Админ-панель для расписания",
                        "Уведомления в Telegram в реальном времени"
                    ],
                    tech: ["Python 3.10+", "python-telegram-bot (v20.7)", "FastAPI + Uvicorn", "Gspread", "APScheduler"]
                },
            }
        },
        contacts: {
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
        },
        footer: {
            role: "ВЕБ_РАЗРАБОТЧИК",
            nav_title: "НАВИГАЦИЯ",
            about: "ОБО МНЕ",
            works: "РАБОТЫ",
            stack: "СТЕК",
            location: "ЛОКАЦИЯ",
            city: "АСТАНА, КАЗАХСТАН",
            socials: "СОЦ_СЕТИ",
            built: "СОЗДАНО НА VUE 3 & GSAP",
            update: "ОБНОВЛЕНО: ФЕВ_2026"
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
            archive: "// МҰРАҒАТ_2026",
            view_details: "ТОЛЫҒЫРАҚ",
            production: "ӨНДІРІСТЕ",
            tech_stack: "ТЕХНОЛОГИЯЛАР",
            logic_flow: "ЖҰМЫС ЛОГИКАСЫ",
            open_bot: "БОТТЫ АШУ",
            source: "БАСТАПҚЫ КОД",
            features: "МҮМКІНДІКТЕР",
            viewProject: "ЖОБАҒА ҚАРАУ",
            items: {
                "1": {
                    title: "NS DRIVE",
                    category: "БАСҚАРУ ЖҮЙЕСІ",
                    tagline: "Автомектепке жазылуды автоматтандыру",
                    badge: "ТҰРАҚТЫ 2026 // КОММЕРЦИЯЛЫҚ",
                    impact_label: "ТИІМДІЛІК",
                    impact_stat: "90%",
                    features: [
                        "24/7 Автоматты жазылу",
                        "API интеграциясы және мониторингі",
                        "Кестеге арналған админ-панель",
                        "Telegram арқылы нақты уақыттағы хабарламалар"
                    ],
                    tech: ["Python 3.10+", "python-telegram-bot (v20.7)", "FastAPI + Uvicorn", "Gspread", "APScheduler"]
                },
            }
        },
        contacts: {
            "status": "БЕЛСЕНДІ_БАЙЛАНЫС",
            "get_in": "МЕНІМЕН",
            "touch": "ХАБАРЛАС",
            "node": "ОРНАЛАСҚАН ЖЕР",
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
        },
        footer: {
            role: "ВЕБ_ӘЗІРЛЕУШІ",
            nav_title: "НАВИГАЦИЯ",
            about: "МЕН ЖАЙЛЫ",
            works: "ЖҰМЫСТАР",
            stack: "СТЕК",
            location: "ЛОКАЦИЯ",
            city: "АСТАНА, ҚАЗАҚСТАН",
            socials: "ӘЛЕУМЕТТІК_ЖЕЛІ",
            built: "VUE 3 ЖӘНЕ GSAP-ПЕН ЖАСАЛҒАН",
            update: "ЖАҢАРТЫЛДЫ: АҚПAН_2026"
        }
    }
}
