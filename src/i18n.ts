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
            production: "PROJECT",
            tech_stack: "TECH_STACK",
            logic_flow: "LOGIC_FLOW",
            open_bot: "OPEN_BOT",
            source: "SOURCE",
            features: "FEATURES",
            items: {
                "1": {
                    title: "NS DRIVE",
                    category: "TELEGRAM BOT",
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
                "2": {
                    title: "QG HELPDESK",
                    status: "PROJECT",
                    category: "SERVICE_DESK",
                    tagline: "Internal process optimization for QazaqGaz NTC",
                    badge: "ENTERPRISE_SOLUTION // 2026",
                    overview_label: "PROJECT_OVERVIEW",
                    description: "Development of a custom ecosystem for managing technical requests within the research center. The system automates task distribution between departments.",
                    features: [
                        "Role model: Administrator, Dispatcher, Executor",
                        "PDF report generation for employee KPI",
                        "Integration with corporate mail"
                    ],
                    tech_label: "TECHNICAL_INFRA",
                    tech: ["Laravel 12", "MySQL", "Docker", "Tailwind CSS", "Alpine.js", "CI/CD"],
                    impact_label: "PRODUCTION_RESULT",
                    impact_stat: "48h",
                    impact_desc: "MVP in record time. Increased request processing speed by <b>40%</b>.",
                    action_btn: "EXPLORE_REPOS_STRUCTURE"
                },
                "3": {
                    title: "IRONN DYNASTY",
                    category: "FITNESS_SITE",
                    status: "PROJECT",
                    tagline: "Full-stack web application for activity tracking and fitness journey",
                    badge: "FITNESS_MONITORING // LIVE_ON_PRODUCTION",
                    arch_label: "SYSTEM_ARCHITECTURE",
                    description: "The central element is the Personal Dashboard — a space for aggregating user activity data, implemented using optimized Django ORM queries.",
                    features: [
                        "Adaptive UI: Dynamic Dark/Light mode switching via JS.",
                        "User Management: Full authentication cycle and data protection (Django Permissions).",
                        "Deployment: Project fully deployed and configured on PythonAnywhere."
                    ],
                    tech_label: "TECH_STACK",
                    tech: ["Python 3.10", "Django", "JS & Node.js", "SQLite", "WSGI", "HTTPS"],
                    demo_label: "LIVE_DEMO",
                    action_btn: "PROJECT_STRUCTURE // VIEW_ON_GITHUB"
                },
                "4": {
                    title: "SOC DETECTOR",
                    category: "CYBER_SECURITY",
                    status: "PROJECT IN RROGRESS",
                    badge_status: "IN_PROGRESS",
                    tagline: "Microservice for real-time security log analysis",
                    badge: "CYBERSECURITY // MVP_UNDER_DEV",
                    tech_label: "CORE_TECHNOLOGIES",
                    tech: ["FastAPI", "Asynchronous Python", "SQLAlchemy + SQLite (soc.db)", "Pydantic v2", "OpenAPI (Swagger)"],                    pipeline_label: "DATA_PIPELINE",
                    features_label: "CURRENT_PROGRESS_MVP",
                    features: [
                        "Ingestion API: /ingest endpoint for log reception",
                        "Data Consistency: Strict validation of incoming JSON",
                        "Storage: Automated saving to soc.db"
                    ],
                    impact_label: "DETECTION_ENGINE",
                    impact_stat: "ASYNC",
                    impact_desc: "Integrated <b>anomaly_detector.py</b> module for stream deviation search.",
                    action_btn: "SYSTEM_ARCHITECTURE_SOURCE"
                },
                "5": {
                    title: "AI DETECTOR",
                    category: "AI_DETECTOR",
                    status: "PROJECT",
                    tagline: "Personal AI analyst for symptoms and health monitoring",
                    badge: "AI_MEDICAL_ASSISTANT // DEMO_PROJECT",
                    engine_label: "INTELLIGENT_ENGINE",
                    description: "The system uniqueness lies in <b>Multi-Model Support</b>: the app can switch between cloud GPT-4o and local models via Ollama.",
                    features: [
                        "Photo Analysis: Intelligent image analysis with HEIC conversion.",
                        "Privacy First: Fully offline operation capability (Mistral/SmolLM).",
                        "Smart Dashboard: BMI calculation and personalized advice."
                    ],
                    tech_label: "AI_TECH_STACK",
                    tech: ["Flask", "OpenAI API", "Ollama", "HuggingFace", "SQLAlchemy"],
                    impact_label: "PROJECT_PURPOSE",
                    impact_stat: "AI",
                    impact_desc: "Demonstration of LLM integration into real web interfaces with a focus on <b>Data Privacy</b>.",
                    disclaimer_label: "MEDICAL_DISCLAIMER",
                    disclaimer_text: "The project is for educational purposes. AI recommendations are not a medical diagnosis.",
                    action_btn: "EXPLORE_AI_LOGIC"
                },
                "6": {
                    "title": "VIVA CINE",
                    "category": "CINEMA SITE // VOD",
                    "status": "PROJECT",
                    "first_badge": "MY_FIRST",
                    "tagline": "Full-featured streaming platform and online cinema",
                    "badge": "STREAMING_SERVICE // ENTERTAINMENT_HUB",
                    "cap_label": "PLATFORM_CAPABILITIES",
                    "description": "A large-scale project featuring over <b>20+ pages</b> of unique templates. The system combines online viewing with social interaction via Community Chat.",
                    "features": [
                        "Movie Engine: Dynamic catalog with genre filtering.",
                        "Social: Interactive chat powered by JSON storage.",
                        "Profile: Customization of user data and avatars."
                    ],
                    "tech_label": "STREAMING_STACK",
                    "tech": ["Flask", "SQLAlchemy", "Jinja2", "Python", "JSON Logic"],
                    "scale_label": "SYSTEM_SCALE",
                    "scale_stat": "20+",
                    "scale_desc": "Dynamic template pages. Adaptability for <b>Cinema Mode</b>.",
                    "action_btn": "VIEW PROJECT"
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
            view_details: "СМОТРЕТЬ ПРОЕКТ",
            production: "ПРОЕКТ",
            tech_stack: "СТЕК ТЕХНОЛОГИЙ",
            logic_flow: "ЛОГИКА РАБОТЫ",
            open_bot: "ОТКРЫТЬ БОТА",
            source: "ИСХОДНЫЙ КОД",
            features: "ФУНКЦИИ",
            items: {
                "1": {
                    title: "NS DRIVE",
                    category: "ТЕЛЕГРАМ БОТ",
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
                "2": {
                    title: "QG HELPDESK",
                    status: "ПРОЕКТ",
                    category: "СЛУЖБА_ПОДДЕРЖКИ",
                    tagline: "Оптимизация внутренних процессов ТОО «QazaqGaz НТЦ»",
                    badge: "ENTERPRISE_SOLUTION // 2026",
                    overview_label: "ОБЗОР ПРОЕКТА",
                    description: "Разработка кастомной экосистемы для управления техническими заявками внутри научного центра. Система автоматизирует распределение задач между департаментами.",
                    features: [
                        "Ролевая модель: Администратор, Диспетчер, Исполнитель",
                        "Генерация PDF-отчетов по KPI сотрудников",
                        "Интеграция с корпоративной почтой"
                    ],
                    tech_label: "ТЕХНИЧЕСКАЯ ИНФРА",
                    tech: ["Laravel 12", "MySQL", "Docker", "Tailwind CSS", "Alpine.js", "CI/CD"],
                    impact_label: "РЕЗУЛЬТАТ",
                    impact_stat: "48ч",
                    impact_desc: "MVP за рекордные сроки. Повышение скорости обработки заявок на <b>40%</b>.",
                    action_btn: "СТРУКТУРА РЕПОЗИТОРИЯ"
                },
                "3": {
                    title: "IRONN DYNASTY",
                    category: "ФИТНЕС_САЙТ",
                    status: "ПРОЕКТ",
                    tagline: "Full-stack веб-приложение для отслеживания активности и фитнеса",
                    badge: "МОНИТОРИНГ ФИТНЕСА // LIVE_ON_PRODUCTION",
                    arch_label: "АРХИТЕКТУРА СИСТЕМЫ",
                    description: "Центральным элементом является Personal Dashboard — пространство для агрегации данных об активности пользователя, реализованное на оптимизированных Django ORM запросах.",
                    features: [
                        "Adaptive UI: Динамическое переключение Dark/Light режимов через JS.",
                        "User Management: Полный цикл аутентификации и защита данных (Django Permissions).",
                        "Deployment: Проект полностью развернут и настроен на PythonAnywhere."
                    ],
                    tech_label: "СТЕК ТЕХНОЛОГИЙ",
                    tech: ["Python 3.10", "Django", "JS & Node.js", "SQLite", "WSGI", "HTTPS"],
                    demo_label: "ДЕМО ЗАПУСК",
                    action_btn: "СТРУКТУРА ПРОЕКТА // НА GITHUB"
                },
                "4": {
                    title: "SOC DETECTOR",
                    category: "КИБЕРБЕЗОПАСНОСТЬ",
                    status: "ПРОЕКТ",
                    badge_status: "В РАЗРАБОТКЕ",
                    tagline: "Микросервис для анализа логов безопасности в реальном времени",
                    badge: "CYBERSECURITY // MVP_UNDER_DEV",
                    tech_label: "ОСНОВНЫЕ ТЕХНОЛОГИИ",
                    tech: ["FastAPI", "Asynchronous Python", "SQLAlchemy + SQLite (soc.db)", "Pydantic v2", "OpenAPI (Swagger)"],                    pipeline_label: "КОНВЕЙЕР ДАННЫХ",
                    features_label: "ТЕКУЩИЙ ПРОГРЕСС MVP",
                    features: [
                        "Ingestion API: Эндпоинт /ingest для приема логов",
                        "Data Consistency: Строгая валидация входящих JSON",
                        "Storage: Автоматизация сохранения в soc.db"
                    ],
                    impact_label: "ДВИЖОК ОБНАРУЖЕНИЯ",
                    impact_stat: "ASYNC",
                    impact_desc: "Интегрированный модуль <b>anomaly_detector.py</b> для поиска отклонений в потоке.",
                    action_btn: "ИСХОДНЫЙ КОД АРХИТЕКТУРЫ"
                },
                "5": {
                    title: "AI DETECTOR",
                    category: "ИИ ДЕТЕКТОР",
                    status: "ПРОЕКТ",
                    tagline: "Персональный ИИ-аналитик симптомов и состояния здоровья",
                    badge: "AI_MEDICAL_ASSISTANT // DEMO_PROJECT",
                    engine_label: "ИНТЕЛЛЕКТУАЛЬНЫЙ ДВИЖОК",
                    description: "Уникальность системы заключается в <b>Multi-Model Support</b>: приложение может переключаться между облачными GPT-4o и локальными моделями через Ollama.",
                    features: [
                        "Photo Analysis: Интеллектуальный анализ снимков с конвертацией HEIC.",
                        "Privacy First: Возможность работы полностью оффлайн (Mistral/SmolLM).",
                        "Smart Dashboard: Расчет ИМТ и персонализация советов."
                    ],
                    tech_label: "AI_СТЕК",
                    tech: ["Flask", "OpenAI API", "Ollama", "HuggingFace", "SQLAlchemy"],
                    impact_label: "ЦЕЛЬ ПРОЕКТА",
                    impact_stat: "AI",
                    impact_desc: "Демонстрация интеграции LLM в реальные веб-интерфейсы с фокусом на <b>Data Privacy</b>.",
                    disclaimer_label: "ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ",
                    disclaimer_text: "Проект носит образовательный характер. ИИ-рекомендации не являются медицинским диагнозом.",
                    action_btn: "ИЗУЧИТЬ ЛОГИКУ ИИ"
                },
                "6": {
                    "title": "VIVA CINE",
                    "category": "КИНО САЙТ // VOD",
                    "status": "ПРОЕКТ",
                    "first_badge": "ПЕРВЫЙ",
                    "tagline": "Полнофункциональная стриминговая платформа и онлайн-кинотеатр",
                    "badge": "STREAMING_SERVICE // ENTERTAINMENT_HUB",
                    "cap_label": "ВОЗМОЖНОСТИ ПЛАТФОРМЫ",
                    "description": "Масштабный проект, включающий более <b>20+ страниц</b> уникальных шаблонов. Система объединяет онлайн-просмотр и социальное взаимодействие через Community Chat.",
                    "features": [
                        "Movie Engine: Динамический каталог с фильтрацией по жанрам.",
                        "Social: Интерактивный чат на JSON-хранилище.",
                        "Profile: Кастомизация данных пользователя и аватаров."
                    ],
                    "tech_label": "СТЕК ТЕХНОЛОГИЙ",
                    "tech": ["Flask", "SQLAlchemy", "Jinja2", "Python", "JSON Logic"],
                    "scale_label": "МАСШТАБ СИСТЕМЫ",
                    "scale_stat": "20+",
                    "scale_desc": "Страниц динамических шаблонов. Адаптивность под <b>Cinema Mode</b>.",
                    "action_btn": "ПОКАЗАТЬ ПРОЕКТ"
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
            view_details: "ЖОБАҒА ҚАРАУ",
            production: "ПРОЕКТ",
            tech_stack: "ТЕХНОЛОГИЯЛАР",
            logic_flow: "ЖҰМЫС ЛОГИКАСЫ",
            open_bot: "БОТТЫ АШУ",
            source: "БАСТАПҚЫ КОД",
            features: "МҮМКІНДІКТЕР",
            viewProject: "ЖОБАҒА ҚАРАУ",
            items: {
                "1": {
                    title: "NS DRIVE",
                    category: "ТЕЛЕГРАМ БОТ",
                    tagline: "Автомектептегі сабақтарға жазылуды автоматтандыру",
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
                "2": {
                    title: "QG HELPDESK",
                    category: "ҚЫЗМЕТ КӨРСЕТУ_ҮСТЕЛІ",
                    status: "ПРОЕКТ",
                    tagline: "«QazaqGaz ҒТЦ» ЖШС ішкі процестерін оңтайландыру",
                    badge: "КӘСІПОРЫН ШЕШІМІ // 2026",
                    overview_label: "ЖОБАҒА ШОЛУ",
                    description: "Ғылыми орталық ішінде техникалық өтінімдерді басқаруға арналған экожүйені әзірлеу. Жүйе департаменттер арасындағы тапсырмаларды бөлуді автоматтандырады.",
                    features: [
                        "Рөлдік модель: Әкімші, Диспетчер, Орындаушы",
                        "Қызметкерлердің KPI бойынша PDF есептерін жасау",
                        "Корпоративтік поштамен интеграция"
                    ],
                    tech_label: "ТЕХНИКАЛЫҚ ИНФРА",
                    tech: ["Laravel 12", "MySQL", "Docker", "Tailwind CSS", "Alpine.js", "CI/CD"],
                    impact_label: "ӨНДІРІСТІК НӘТИЖЕ",
                    impact_stat: "48с",
                    impact_desc: "Рекордтық мерзімде MVP. Өтінімдерді өңдеу жылдамдығын <b>40%</b>-ға арттыру.",
                    action_btn: "РЕПОЗИТОРИЙ ҚҰРЫЛЫМЫ"
                },
                "3": {
                    title: "IRONN DYNASTY",
                    category: "ФИТНЕС_САЙТ",
                    status: "ПРОЕКТ",
                    tagline: "Белсенділік пен фитнесті бақылауға арналған Full-stack веб-қосымша",
                    badge: "ФИТНЕС МОНИТОРИНГІ // ӨНДІРІСТЕ",
                    arch_label: "ЖҮЙЕ АРХИТЕКТУРАСЫ",
                    description: "Орталық элемент - бұл Personal Dashboard, пайдаланушы белсенділігі туралы деректерді агрегациялауға арналған кеңістік, оңтайландырылған Django ORM сұраныстары арқылы жүзеге асырылған.",
                    features: [
                        "Adaptive UI: JS арқылы Dark/Light режимдерін динамикалық ауыстыру.",
                        "User Management: Толық аутентификация циклі және деректерді қорғау (Django Permissions).",
                        "Deployment: Жоба PythonAnywhere-де толық орналастырылған және конфигурацияланған."
                    ],
                    tech_label: "ТЕХНОЛОГИЯЛАР",
                    tech: ["Python 3.10", "Django", "JS & Node.js", "SQLite", "WSGI", "HTTPS"],
                    demo_label: "ДЕМО НҰСҚА",
                    action_btn: "ЖОБА ҚҰРЫЛЫМЫ // GITHUB-ТА ҚАРАУ"
                },
                "4": {
                    title: "SOC DETECTOR",
                    category: "КИБЕРҚАУІПСІЗДІК",
                    status: "ПРОЕКТ",
                    badge_status: "ӘЗІРЛЕУ ҮСТІНДЕ",
                    tagline: "Қауіпсіздік логтарын нақты уақытта талдауға арналған микросервис",
                    badge: "CYBERSECURITY // MVP_UNDER_DEV",
                    tech_label: "НЕГІЗГІ ТЕХНОЛОГИЯЛАР",
                    tech: ["FastAPI", "Asynchronous Python", "SQLAlchemy + SQLite (soc.db)", "Pydantic v2", "OpenAPI (Swagger)"],
                    pipeline_label: "ДЕРЕКТЕР КОНВЕЙЕРІ",
                    features_label: "MVP-ТЫҢ АҒЫМДАҒЫ ПРОГРЕСІ",
                    features: [
                        "Ingestion API: Логтарды қабылдауға арналған /ingest эндпоинті",
                        "Data Consistency: Кіріс JSON деректерін қатаң валидациялау",
                        "Storage: soc.db базасына автоматты түрде сақтау"
                    ],
                    impact_label: "АНЫҚТАУ МОТОРЫ",
                    impact_stat: "ASYNC",
                    impact_desc: "Ағындағы ауытқуларды іздеуге арналған интеграцияланған <b>anomaly_detector.py</b> модулі.",
                    action_btn: "ЖҮЙЕ АРХИТЕКТУРАСЫНЫҢ КОДЫ"
                },
                "5": {
                    title: "AI DETECTOR",
                    category: "ИИ ДЕТЕКТОР",
                    status: "ПРОЕКТ",
                    tagline: "Симптомдар мен денсаулық жағдайын талдауға арналған жеке ИИ-сарапшы",
                    badge: "AI_MEDICAL_ASSISTANT // DEMO_PROJECT",
                    engine_label: "ИНТЕЛЛЕКТУАЛДЫ МОТОР",
                    description: "Жүйенің бірегейлігі <b>Multi-Model Support</b> мүмкіндігінде: қосымша бұлттық GPT-4o және Ollama арқылы жергілікті модельдер арасында ауыса алады.",
                    features: [
                        "Photo Analysis: HEIC конвертациясымен суреттерді зияткерлік талдау.",
                        "Privacy First: Толық офлайн режимде жұмыс істеу мүмкіндігі (Mistral/SmolLM).",
                        "Smart Dashboard: Дене салмағының индексін (BMI) есептеу және кеңестер.",
                    ],
                    tech_label: "ИИ ТЕХНОЛОГИЯЛАРЫ",
                    tech: ["Flask", "OpenAI API", "Ollama", "HuggingFace", "SQLAlchemy"],
                    impact_label: "ЖОБА МАЗМҰНЫ",
                    impact_stat: "AI",
                    impact_desc: "LLM модельдерін нақты веб-интерфейстерге <b>Деректер құпиялылығына</b> Назар аудара отырып интеграциялау демосы.",
                    disclaimer_label: "МЕДИЦИНАЛЫҚ ЕСКЕРТУ",
                    disclaimer_text: "Жоба білім беру сипатына ие. ИИ ұсыныстары медициналық диагноз болып табылмайды.",
                    action_btn: "ИИ ЛОГИКАСЫН ЗЕРТТЕУ"
                },
                "6": {
                    "title": "VIVA CINE",
                    "category": "КИНО САЙТ // VOD",
                    "status": "ПРОЕКТ",
                    "first_badge": "АЛҒАШҚЫ",
                    "tagline": "Толық функционалды стримингтік платформа және онлайн-кинотеатр",
                    "badge": "СТРИМИНГ ҚЫЗМЕТІ // ENTERTAINMENT_HUB",
                    "cap_label": "ПЛАТФОРМА МҮМКІНДІКТЕРІ",
                    "description": "<b>20-дан астам</b> бірегей шаблондарды қамтитын ауқымды жоба. Жүйе онлайн көру мен Community Chat арқылы әлеуметтік өзара әрекеттесуді біріктіреді.",
                    "features": [
                        "Movie Engine: Жанрлар бойынша сүзуі бар динамикалық каталог.",
                        "Social: JSON сақтау орнындағы интерактивті чат.",
                        "Profile: Пайдаланушы деректері мен аватарларын теңшеу."
                    ],
                    "tech_label": "ТЕХНОЛОГИЯЛАР ТІЗБЕГІ",
                    "tech": ["Flask", "SQLAlchemy", "Jinja2", "Python", "JSON Logic"],
                    "scale_label": "ЖҮЙЕ АУҚЫМЫ",
                    "scale_stat": "20+",
                    "scale_desc": "Динамикалық шаблон беттері. <b>Cinema Mode</b> режиміне бейімділік.",
                    "action_btn": "ЖОБАҒА ҚАРАУ"
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