<script setup lang="ts">
import { onMounted } from 'vue';
import { locale } from '../i18n'; // Путь к твоему файлу i18n.ts

onMounted(() => {
  // Анимация появления
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  // Эффект Spotlight
  const cards = document.querySelectorAll('.skill-card');
  cards.forEach((card) => {
    const skillCard = card as HTMLElement;
    skillCard.onmousemove = (e: MouseEvent) => {
      const rect = skillCard.getBoundingClientRect();
      skillCard.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      skillCard.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };
  });
});
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="noise-overlay"></div>
    <div class="bg-glow-circle circle-1"></div>
    <div class="bg-glow-circle circle-2"></div>
    <div class="bg-grid-decor"></div>

    <div class="marquee-wrapper">
      <div class="marquee-track">
        <span v-for="i in 10" :key="i">
          PYTHON • DJANGO • FASTAPI • LARAVEL • VUE 3 • DOCKER • AI INTEGRATION •&nbsp;
        </span>
      </div>
    </div>

    <div class="container">
      <div class="skills-grid">

        <div class="skill-card wide reveal">
          <div class="card-border-glow"></div>
          <div class="spotlight"></div>
          <div class="card-content">
            <div class="card-header-flex">
              <span class="num">01 // {{ locale.t('skillsSection.backend.title') }}</span>
              <div class="status-badge"><span class="dot"></span> {{ locale.t('skillsSection.backend.status') }}</div>
            </div>
            <h3 class="main-title">{{ locale.t('skillsSection.backend.mainTitle') }}</h3>

            <div class="expertise-grid">
              <div class="exp-item">
                <div class="exp-head"><span>/</span> {{ locale.t('skillsSection.backend.python.head') }}</div>
                <p v-html="locale.t('skillsSection.backend.python.desc')"></p>
              </div>
              <div class="exp-item">
                <div class="exp-head"><span>/</span> {{ locale.t('skillsSection.backend.php.head') }}</div>
                <p v-html="locale.t('skillsSection.backend.php.desc')"></p>
              </div>
              <div class="exp-item">
                <div class="exp-head"><span>/</span> {{ locale.t('skillsSection.backend.ai.head') }}</div>
                <p v-html="locale.t('skillsSection.backend.ai.desc')"></p>
              </div>
              <div class="exp-item">
                <div class="exp-head"><span>/</span> {{ locale.t('skillsSection.backend.db.head') }}</div>
                <p v-html="locale.t('skillsSection.backend.db.desc')"></p>
              </div>
            </div>
          </div>
        </div>

        <div class="skill-card reveal">
          <div class="spotlight"></div>
          <div class="card-content">
            <span class="num">02 // {{ locale.t('skillsSection.frontend.title') }}</span>
            <h3 class="sub-title">{{ locale.t('skillsSection.frontend.mainTitle') }}</h3>
            <ul class="tech-list">
              <li><span class="dash">—</span> <b>Vue.js 3:</b> {{ locale.t('skillsSection.frontend.vue') }}</li>
              <li><span class="dash">—</span> <b>TypeScript:</b> {{ locale.t('skillsSection.frontend.ts') }}</li>
              <li><span class="dash">—</span> <b>Build:</b> Vite, NPM</li>
              <li><span class="dash">—</span> <b>Styles:</b> Tailwind, GSAP, i18n</li>
            </ul>
            <div class="card-decor-box">UI.02</div>
          </div>
        </div>

        <div class="skill-card reveal">
          <div class="spotlight"></div>
          <div class="card-content">
            <span class="num">03 // {{ locale.t('skillsSection.infra.title') }}</span>
            <h3 class="sub-title">{{ locale.t('skillsSection.infra.mainTitle') }}</h3>
            <ul class="tech-list">
              <li><span class="dash">—</span> <b>DevOps:</b> Docker, Compose</li>
              <li><span class="dash">—</span> <b>CI/CD:</b> GitHub Actions</li>
              <li><span class="dash">—</span> <b>VCS:</b> {{ locale.t('skillsSection.infra.git') }}</li>
              <li><span class="dash">—</span> <b>OS:</b> Linux, CLI tools</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  background-color: var(--fg-bg-dark);
  padding: 40px 0 140px;
  position: relative;
  overflow: hidden;
  color: var(--fg-text-light);
}

/* --- НОВЫЙ ДЕКОР ФОНА --- */
.noise-overlay {
  position: absolute; inset: 0;
  background-image: url("https://grainy-gradients.vercel.app/noise.svg");
  opacity: 0.05; pointer-events: none; z-index: 1;
}

.bg-glow-circle {
  position: absolute;
  width: 500px; height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%);
  filter: blur(80px);
  z-index: 0;
}
.circle-1 { top: -100px; right: -100px; background: radial-gradient(circle, rgba(144,169,255,0.05) 0%, transparent 70%); }
.circle-2 { bottom: -150px; left: -100px; }

.bg-grid-decor {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 100px 100px;
  z-index: 0;
  mask-image: radial-gradient(circle at center, black, transparent 80%);
}

/* --- MARQUEE --- */
.marquee-wrapper {
  background: #fff; padding: 20px 0; transform: rotate(-1.5deg) scale(1.05);
  margin-bottom: 50px; position: relative; z-index: 5;
}
.marquee-track { display: flex; white-space: nowrap; animation: marquee 35s linear infinite; }
.marquee-track span { font-size: 2rem; font-weight: 950; color: #000; letter-spacing: -0.02em; }

@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* --- GRID & CARDS --- */
.container { max-width: 1350px; margin: 0 auto; padding: 0 5%; position: relative; z-index: 2; }
.skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }

.skill-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative; border-radius: 2px; overflow: hidden;
  transition: all 0.5s ease;
}
.skill-card:hover { border-color: rgba(255, 255, 255, 0.2); transform: translateY(-5px); }

.wide { grid-column: span 2; }

/* Spotlight эффект */
.spotlight {
  position: absolute; inset: 0;
  background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.08), transparent 40%);
  z-index: 1; pointer-events: none;
}

.card-content { padding: 50px; position: relative; z-index: 2; }

/* Внутренние элементы */
.card-header-flex { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 25px; }

.status-badge {
  font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px;
  padding: 5px 12px; border: 1px solid rgba(255,255,255,0.1); border-radius: 20px;
  display: flex; align-items: center; gap: 8px;
}
.status-badge .dot { width: 6px; height: 6px; background: #94a9ff; border-radius: 50%; box-shadow: 0 0 10px #94a9ff; }

.num { font-size: 0.75rem; color: #94a9ff; font-weight: 800; letter-spacing: 0.2em; }
.main-title { font-size: 3.5rem; font-weight: 950; margin-bottom: 40px; color: #fff; }
.sub-title { font-size: 2rem; font-weight: 900; margin-bottom: 25px; color: #fff; }

.expertise-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
.exp-head { font-size: 1rem; font-weight: 800; color: #fff; margin-bottom: 12px; display: flex; gap: 8px; }
.exp-head span { color: #94a9ff; }
.exp-item p { font-size: 0.95rem; color: rgba(255,255,255,0.5); line-height: 1.6; }

.tech-list { list-style: none; padding: 0; }
.tech-list li { font-size: 1.1rem; color: rgba(255,255,255,0.7); margin-bottom: 15px; display: flex; gap: 10px; }
.tech-list li b { color: #fff; }
.dash { color: #94a9ff; font-weight: 900; }

.card-decor-box {
  position: absolute; bottom: 20px; right: 20px;
  font-size: 4rem; font-weight: 950; color: rgba(255,255,255,0.02);
  user-select: none; pointer-events: none;
}

/* Reveal */
.reveal { opacity: 0; transform: translateY(40px); transition: 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
.reveal.active { opacity: 1; transform: translateY(0); }

@media (max-width: 1024px) {
  .skills-section {
    padding: 20px 0 80px; /* Еще сильнее прижимаем к About на планшетах/моб */
  }

  /* Лента на мобилках должна быть чуть меньше, чтобы не перекрывать всё */
  .marquee-wrapper {
    margin-bottom: 40px;
    padding: 12px 0;
  }
  .marquee-track span {
    font-size: 1.2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 15px; /* Уменьшаем расстояние между карточками */
  }

  .wide { grid-column: span 1; }

  /* Названия секций — делаем компактнее */
  .main-title {
    font-size: 2rem;
    margin-bottom: 25px;
    line-height: 1.1;
  }
  .sub-title {
    font-size: 1.6rem;
    margin-bottom: 15px;
  }

  /* Контент внутри карточек */
  .card-content {
    padding: 25px 20px; /* Меньше внутренние отступы */
  }

  /* Сетка навыков внутри Backend карточки */
  .expertise-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .exp-head {
    font-size: 0.95rem;
    margin-bottom: 8px;
  }

  /* Прячем громоздкий декор, который мешает на маленьких экранах */
  .card-decor-box, .bg-glow-circle {
    display: none;
  }

  /* Тех-списки делаем плотнее */
  .tech-list li {
    font-size: 0.9rem;
    margin-bottom: 8px;
  }

  /* Сетка фона — на мобилках делаем её мельче или убираем, чтобы не рябило */
  .bg-grid-decor {
    background-size: 50px 50px;
    opacity: 0.5;
  }
}

/* Дополнительная полировка для совсем маленьких экранов (iPhone SE и т.д.) */
@media (max-width: 480px) {
  .main-title { font-size: 1.8rem; }
  .card-content { padding: 20px 15px; }
  .num { font-size: 0.6rem; margin-bottom: 15px; }
}
</style>