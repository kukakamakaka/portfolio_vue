<script setup lang="ts">
import { computed } from 'vue';
import { locale } from '../i18n'; // Путь к твоему файлу i18n

// Используем только твой кастомный locale.t
const localizedExperience = computed(() => {
  const data = locale.t('experience.items');
  return Array.isArray(data) ? data : [];
});

// Статические данные (не зависят от языка)
const jobLinks = [
  "https://github.com/kukakamakaka/qazaqgaz-test",
  "https://github.com/kukakamakaka/autoshkola-bot",
  "https://github.com/kukakamakaka/skt-orken-site"
];

const jobStacks = [
  ["Laravel 12", "Breeze", "MySQL", "Tailwind"],
  ["Python", "FastAPI", "Gspread", "APScheduler"],
  ["Flask", "Python 3.12", "Jinja2", "Virtualenv"]
];
</script>

<template>
  <section id="experience" class="experience-section">
    <div class="container">

      <div class="section-intro">
        <h2 class="section-title">PATH</h2>
        <p class="section-subtitle">// {{ locale.t('experience.journey') }}</p>
      </div>

      <div class="experience-grid">
        <div v-for="(job, index) in localizedExperience" :key="index" class="exp-card">
          <div class="card-inner">

            <div class="card-header">
              <span class="job-month">{{ job.month }}</span>
              <span class="job-id">0{{ index + 1 }}</span>
            </div>

            <div class="card-content">
              <h3 class="company">{{ job.company }}</h3>
              <p class="role">{{ job.role }}</p>

              <div class="achievements-list">
                <div v-for="ach in job.achievements" :key="ach" class="ach-item">
                  <span class="ach-dot"></span>
                  <p class="ach-text">{{ ach }}</p>
                </div>
              </div>

              <div v-if="job.comment" class="personal-note">
                <span class="comment-symbol">//</span>
                <span class="comment-text">{{ job.comment }}</span>
              </div>
            </div>

            <div class="card-footer">
              <div class="tech-row">
                <span v-for="tech in jobStacks[index]" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
              <a :href="jobLinks[index]" target="_blank" class="github-link">
                {{ locale.t('experience.viewSource') }} ↗
              </a>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.experience-section {
  background: #000;
  color: #fff;
  padding: 100px 0;
  overflow: hidden; /* Чтобы скролл не ломал всю страницу */
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;
}

.section-intro {
  margin-bottom: 60px;
}

.section-title {
  font-size: clamp(4rem, 12vw, 10rem);
  font-weight: 900;
  letter-spacing: -0.05em;
  color: #111;
  line-height: 0.8;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.section-subtitle {
  font-family: monospace;
  color: #444;
  letter-spacing: 2px;
  margin-left: 10px;
}

/* СЕТКА С ПОДДЕРЖКОЙ МОБИЛЬНОГО СКРОЛЛА */
.experience-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  transition: all 0.3s ease;
}

.exp-card {
  background: #0a0a0a;
  border: 1px solid #1a1a1a;
  padding: 45px 35px;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  min-width: 0; /* Важно для grid */
}

.exp-card:hover {
  background: #fff;
  color: #000;
  transform: translateY(-8px);
  border-color: #fff;
}

.card-inner {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
}

.job-month {
  font-family: monospace;
  font-size: 0.75rem;
  letter-spacing: 2px;
  opacity: 0.6;
}

.job-id {
  font-weight: 900;
  font-size: 1.2rem;
  opacity: 0.1;
}

.company {
  font-size: 2.2rem;
  line-height: 1.1;
  font-weight: 900;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.role {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 35px;
  color: #525d8f;
  font-weight: 700;
}

.exp-card:hover .role {
  color: #000;
}

.achievements-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.ach-item {
  display: flex;
  gap: 12px;
}

.ach-dot {
  width: 4px;
  height: 4px;
  background: currentColor;
  border-radius: 50%;
  margin-top: 7px;
  flex-shrink: 0;
  opacity: 0.3;
}

.ach-text {
  font-size: 0.95rem;
  line-height: 1.5;
  opacity: 0.7;
}

.exp-card:hover .ach-text {
  opacity: 0.9;
}

.card-footer {
  margin-top: 50px;
  padding-top: 30px;
  border-top: 1px solid rgba(255,255,255,0.05);
}

.exp-card:hover .card-footer {
  border-top-color: rgba(0,0,0,0.1);
}

.tech-row {
  display: flex;
  gap: 8px;
  margin-bottom: 25px;
  flex-wrap: wrap;
}

.tech-tag {
  font-size: 0.6rem;
  border: 1px solid #222;
  padding: 4px 10px;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.exp-card:hover .tech-tag {
  border-color: rgba(0,0,0,0.2);
}

.github-link {
  display: inline-block;
  font-weight: 900;
  font-size: 0.75rem;
  text-decoration: none;
  color: inherit;
  letter-spacing: 1px;
  border-bottom: 1px solid;
  padding-bottom: 4px;
  transition: opacity 0.3s;
}

.github-link:hover {
  opacity: 0.5;
}

.personal-note {
  margin-top: 15px;
  display: flex;
  gap: 6px;
  opacity: 0.4; /* Делаем его очень неявным */
  transition: opacity 0.3s ease;
}

.comment-symbol {
  font-family: monospace;
  color: #525d8f; /* Твой акцентный цвет только на символе // */
}

.comment-text {
  font-size: 0.75rem; /* Маленький размер */
  font-family: monospace;
  line-height: 1.4;
  color: #fff;
}

/* При наведении на карточку */
.exp-card:hover .personal-note {
  opacity: 1; /* Проявляется только при наведении */
}

.exp-card:hover .comment-text {
  color: #555; /* На белом фоне становится темно-серым, не черным */
}

.exp-card:hover .comment-symbol {
  color: #000; /* Символ // становится черным */
}
/* МОБИЛЬНАЯ АДАПТАЦИЯ (КОМПАКТНАЯ) */
@media (max-width: 900px) {
  .experience-section {
    padding: 60px 0; /* Меньше отступы секции */
  }

  .section-title {
    font-size: 3.5rem; /* Уменьшили фоновый текст */
    margin-bottom: -15px;
  }

  .experience-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding: 20px 5%; /* Отступы по бокам, чтобы первая карточка стояла ровно */
    gap: 12px;
    -webkit-overflow-scrolling: touch;
    margin: 0 -5%; /* Компенсируем padding контейнера для скролла в край */
  }

  .exp-card {
    min-width: 75vw; /* Еще меньше ширина (75% экрана) */
    padding: 25px 20px; /* Компактные внутренние отступы */
    min-height: 380px; /* Ограничили высоту */
    scroll-snap-align: center;
  }

  .company {
    font-size: 1.5rem; /* Уменьшили название компании */
    margin: 10px 0 5px;
  }

  .role {
    font-size: 0.75rem;
    margin-bottom: 20px;
  }

  .ach-text {
    font-size: 0.85rem; /* Мелкий текст для описания */
    line-height: 1.3;
  }

  .achievements-list {
    gap: 10px;
  }

  .card-header {
    margin-bottom: 20px;
  }

  .card-footer {
    margin-top: 30px;
    padding-top: 20px;
  }

  /* Прячем скроллбар */
  .experience-grid::-webkit-scrollbar {
    display: none;
  }
  .experience-grid {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
</style>
