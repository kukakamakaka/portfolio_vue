
<script setup lang="ts">
import { ref } from 'vue';

interface Project {
  id: number;
  dir: string;
  title: string;
  stack: string;
  desc: string;
  mainImg: string;
  gallery: string[];
  github?: string;
  details?: string[];
}

const images = (import.meta as any).glob('../assets/projects/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const getStaticImg = (projectDir: string, fileName: string) => {
  const path = `../assets/projects/${projectDir}/${fileName}`;
  return images[path] || '';
};

const projectsData = [
  {
    id: 1, dir: '1', title: "QAZAQGAZ SYSTEM", stack: "LARAVEL 12 // DOCKER",
    desc: "Production-ready система, запущенная с нуля за 48 часов. Внедрена RBAC модель и CI/CD пайплайны.",
    github: "https://github.com/kukakamakaka/qazaqgaz-test",
    details: ["Laravel 12", "Docker", "CI/CD"]
  },
  {
    id: 2, dir: '2', title: "AVTOSCHCOOLA BOT", stack: "PYTHON // AIOGRAM",
    desc: "Асинхронный Telegram-бот для автоматизации записи. Интеграция с Google Sheets API.",
    github: "https://github.com/kukakamakaka/avtoschool-bot",
    details: ["Python", "Aiogram", "Google API"]
  },
  {
    id: 3, dir: '3', title: "SKT ORKEN SITE", stack: "PYTHON // FLASK",
    desc: "Корпоративный сайт для строительной компании. Реализована серверная маршрутизация.",
    github: "https://github.com/kukakamakaka/skt-orken-site",
    details: ["Flask", "Jinja2", "Python"]
  },
  {
    id: 4, dir: '4', title: "CORE DJANGO API", stack: "PYTHON // DRF",
    desc: "Проектирование REST API с использованием Django Rest Framework и JWT.",
    github: "https://github.com/kukakamakaka",
    details: ["Django", "DRF", "PostgreSQL"]
  },
  {
    id: 5, dir: '5', title: "VUE 3 PORTFOLIO", stack: "VUE 3 // TS",
    desc: "Высокопроизводительное портфолио с использованием Composition API.",
    github: "https://github.com/kukakamakaka",
    details: ["Vue 3", "TypeScript", "Vite"]
  },
  {
    id: 6, dir: '6', title: "FASTAPI SERVICE", stack: "PYTHON // FASTAPI",
    desc: "Микросервис для обработки данных в реальном времени.",
    github: "https://github.com/kukakamakaka",
    details: ["FastAPI", "Pydantic", "Redis"]
  },
  {
    id: 7, dir: '7', title: "DOCKERIZED APP", stack: "DEVOPS // LINUX",
    desc: "Настройка инфраструктуры для production: Nginx, SSL, Docker Compose.",
    github: "https://github.com/kukakamakaka",
    details: ["Nginx", "Docker", "Linux"]
  },
  {
    id: 8, dir: '8', title: "TASK MANAGER", stack: "PHP // MYSQL",
    desc: "Система управления задачами с разграничением прав доступа.",
    github: "https://github.com/kukakamakaka",
    details: ["PHP", "MySQL", "AJAX"]
  }
];

const projects: Project[] = projectsData.map(p => ({
  ...p,
  mainImg: getStaticImg(p.dir, 'main.jpg'),
  gallery: [
    getStaticImg(p.dir, '1.jpg'),
    getStaticImg(p.dir, '2.jpg'),
    getStaticImg(p.dir, '3.jpg')
  ].filter(img => img !== '')
}));

const selectedProject = ref<Project | null>(null);

const openProject = (p: Project) => {
  selectedProject.value = p;
  document.body.style.overflow = 'hidden';
};

const closeProject = () => {
  selectedProject.value = null;
  document.body.style.overflow = '';
};
</script>

<template>
  <div class="portfolio-wrap">
    <div class="projects-grid">
      <div v-for="p in projects" :key="p.id" class="project-card" @click="openProject(p)">
        <div class="card-visual">
          <img :src="p.mainImg" :alt="p.title" class="main-photo" />
          <div class="card-overlay">
            <span class="hover-text">VIEW PROJECT</span>
          </div>
          <span class="floating-number">{{ p.id < 10 ? '0' + p.id : p.id }}</span>
        </div>
        <div class="card-details">
          <span class="stack-text">{{ p.stack }}</span>
          <h3 class="title-text">{{ p.title }}</h3>
        </div>
      </div>
    </div>

    <Transition name="overlay-fade">
      <div v-if="selectedProject" class="project-modal" @click.self="closeProject">
        <button class="exit-btn" @click="closeProject">
          <span class="exit-icon">✕</span>
          <span class="exit-text">ESC</span>
        </button>

        <div class="modal-inner">
          <header class="modal-header">
            <div class="header-meta">
              <span class="m-id">CASE-0{{ selectedProject.id }}</span>
              <span class="m-stack">{{ selectedProject.stack }}</span>
            </div>
            <h2 class="m-title">{{ selectedProject.title }}</h2>
            <p class="m-description">{{ selectedProject.desc }}</p>

            <div class="tech-tags" v-if="selectedProject.details">
              <span v-for="tag in selectedProject.details" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </header>

          <div class="modal-images">
            <div v-for="(img, i) in selectedProject.gallery" :key="i" class="m-img-wrap">
              <img :src="img" alt="detail" loading="lazy" />
            </div>
          </div>

          <footer class="modal-footer">
            <div class="footer-line"></div>
            <div class="footer-btns">
              <a v-if="selectedProject.github" :href="selectedProject.github" target="_blank" class="github-btn">
                VIEW GITHUB ↗
              </a>
            </div>
          </footer>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Все старые стили сохраняются, добавляю только новые для ссылок и тегов */

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 25px;
}

.tag {
  font-size: 0.65rem;
  color: #58d1ff; /* Голубой акцент */
  border: 1px solid rgba(88, 209, 255, 0.3);
  padding: 5px 12px;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-btns {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.github-btn {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.2);
  padding: 15px 40px;
  border-radius: 4px;
  transition: all 0.3s;
}

.github-btn:hover {
  background: #fff;
  color: #000;
}

/* Остальные стили из твоего кода ниже... */
.portfolio-wrap { background: #000; min-height: 100vh; padding: 100px 5%; }
.projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 50px; max-width: 1300px; margin: 0 auto; }
.project-card { cursor: pointer; position: relative; }
.card-visual { position: relative; aspect-ratio: 1 / 1; overflow: hidden; border-radius: 2px; background: #0a0a0a; margin-bottom: 20px; }
.main-photo { width: 100%; height: 100%; object-fit: cover; transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
.card-overlay { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.7); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.4s ease; backdrop-filter: blur(5px); }
.hover-text { font-size: 0.7rem; letter-spacing: 0.3em; color: #fff; border-bottom: 1px solid #fff; padding-bottom: 5px; }
.floating-number { position: absolute; bottom: -10px; right: 10px; font-size: 5rem; font-weight: 900; color: #fff; opacity: 0.05; transition: all 0.6s ease; pointer-events: none; }
.project-card:hover .main-photo { transform: scale(1.1); }
.project-card:hover .card-overlay { opacity: 1; }
.project-card:hover .floating-number { opacity: 0.15; transform: translateY(-20px); }
.card-details { padding: 0 5px; }
.stack-text { font-size: 0.6rem; color: #444; letter-spacing: 0.2em; text-transform: uppercase; }
.title-text { font-size: 1rem; font-weight: 700; color: #fff; margin-top: 5px; }

.project-modal { position: fixed; inset: 0; background: #000; z-index: 2000; overflow-y: auto; padding: 120px 5% 60px; }
.exit-btn { position: fixed; top: 40px; right: 40px; background: #fff; border: none; padding: 12px 24px; display: flex; align-items: center; gap: 10px; cursor: pointer; z-index: 2100; border-radius: 100px; transition: transform 0.3s; }
.exit-btn:hover { transform: scale(1.05); }
.exit-icon { font-size: 1rem; color: #000; }
.exit-text { font-size: 0.7rem; font-weight: 800; color: #000; letter-spacing: 0.1em; }
.modal-inner { max-width: 900px; margin: 0 auto; }
.modal-header { margin-bottom: 80px; }
.header-meta { display: flex; gap: 20px; margin-bottom: 20px; }
.m-id { font-family: monospace; color: #333; }
.m-stack { color: #555; font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; }
.m-title { font-size: clamp(2.5rem, 8vw, 6rem); font-weight: 900; line-height: 0.85; margin-bottom: 30px; }
.m-description { font-size: 1.2rem; color: #666; line-height: 1.6; max-width: 600px; }
.modal-images { display: flex; flex-direction: column; gap: 40px; }
.m-img-wrap { width: 100%; border-radius: 4px; overflow: hidden; }
.m-img-wrap img { width: 100%; display: block; }
.modal-footer { padding: 100px 0; text-align: center; }
.footer-line { width: 100%; height: 1px; background: #111; margin-bottom: 60px; }
.cta-link { font-size: clamp(1.5rem, 4vw, 3rem); font-weight: 900; color: #fff; text-decoration: none; transition: opacity 0.3s; }
.cta-link:hover { opacity: 0.6; }
.overlay-fade-enter-active, .overlay-fade-leave-active { transition: opacity 0.6s ease, transform 0.6s ease; }
.overlay-fade-enter-from, .overlay-fade-leave-to { opacity: 0; transform: translateY(20px); }

@media (max-width: 768px) {
  .exit-btn { top: 20px; right: 20px; padding: 10px 15px; }
  .tech-tags { gap: 5px; }
}
</style>