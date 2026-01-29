<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue'
import { onMounted, onUnmounted, ref } from 'vue';
// ОБЯЗАТЕЛЬНО: Импортируем locale для работы переводов в шаблоне
import { locale } from './i18n';

const isLoading = ref(true);
const loadingProgress = ref(0);
const preloaderText = "ONEGE ALIBEK";

const handleScroll = () => {
  const scrollValue = window.scrollY;
  const bgTitle = document.querySelector('.bg-title') as HTMLElement;
  if (bgTitle) {
    // Текст плавно уходит влево при скролле
    bgTitle.style.transform = `translateX(-${scrollValue * 0.4}px)`;
  }
};

onMounted(() => {
  // Анимация прогресс-бара
  const interval = setInterval(() => {
    if (loadingProgress.value < 100) {
      loadingProgress.value += Math.floor(Math.random() * 10) + 1;
      if (loadingProgress.value > 100) loadingProgress.value = 100;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        isLoading.value = false;
      }, 500); // Задержка перед исчезновением прелоадера
    }
  }, 100);

  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
  <div class="app-container">
    <transition name="preloader-fade">
      <div v-if="isLoading" class="preloader">
        <div class="preloader-wrapper">
          <div class="preloader-text-wrap">
            <span v-for="(char, index) in preloaderText" :key="index"
                  :style="{ animationDelay: index * 0.1 + 's' }"
                  class="char">
              {{ char === ' ' ? '\u00A0' : char }}
            </span>
          </div>
          <div class="progress-container">
            <div class="progress-num">{{ loadingProgress }}%</div>
            <div class="progress-line" :style="{ width: loadingProgress + '%' }"></div>
          </div>
        </div>
      </div>
    </transition>

    <TheNavbar v-if="!isLoading" />

    <main v-if="!isLoading" class="smooth-scroll">
      <section id="hero" class="hero light-section">
        <div class="bg-title-wrapper">
          <h1 class="bg-title">FULLSTACK DEVELOPER</h1>
        </div>

        <div class="hero-content">
          <div class="hero-info">
            <div class="info-block">
              <span class="label">{{ locale.t('hero.status') }}</span>
              <p>{{ locale.t('hero.statusText') }}</p>
            </div>
            <div class="info-block align-right">
              <span class="label">{{ locale.t('hero.location') }}</span>
              <p>{{ locale.t('hero.locText') }} 2026</p>
            </div>
          </div>

          <div class="hero-visual">
            <div class="visual-main">
              <h1 class="visual-name">ONEGE<br><span class="outline">ALIBEK</span></h1>
              <div class="floating-circle"></div>
            </div>
          </div>

          <div class="hero-footer">
            <div class="scroll-explore">
              <div class="mouse"></div>
              <span>{{ locale.t('hero.scroll') }}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="about dark-section">
        <div class="about-container">
          <div class="about-header">
            <span class="section-num">01 // 05</span>
            <h2 class="section-title">{{ locale.t('aboutSection.title') }}</h2>
          </div>

          <div class="about-grid">
            <div class="about-visual">
              <div class="photo-placeholder">
                <img src="https://i.ibb.co.com/d0XkzFyv/my-photo.jpg" alt="Onege Alibek" class="about-img" />

                <div class="image-overlay"></div>
              </div>

              <div class="visual-decor"></div>
            </div>

            <div class="about-content">
              <p class="about-lead" v-if="locale.current === 'EN'">
                A 19-year-old <span class="highlight">{{ locale.t('aboutSection.uni') }}</span> graduate.
                Crafting digital solutions with a focus on
                <span class="highlight">{{ locale.t('aboutSection.mod') }}</span> and
                <span class="highlight">{{ locale.t('aboutSection.perf') }}</span>.
              </p>
              <p class="about-lead" v-else-if="locale.current === 'RU'">
                19-летняя выпускница <span class="highlight">{{ locale.t('aboutSection.uni') }}</span>.
                Создаю цифровые решения с акцентом на
                <span class="highlight">{{ locale.t('aboutSection.mod') }}</span> и
                <span class="highlight">{{ locale.t('aboutSection.perf') }}</span>.
              </p>
              <p class="about-lead" v-else>
                19 жастағы <span class="highlight">{{ locale.t('aboutSection.uni') }}</span> түлегімін.
                <span class="highlight">{{ locale.t('aboutSection.mod') }}</span> пен
                <span class="highlight">{{ locale.t('aboutSection.perf') }}</span> бағытталған цифрлық шешімдер жасаймын.
              </p>

              <p class="about-description">
                {{ locale.t('aboutSection.desc') }}
              </p>

              <div class="about-action">
                <a href="https://t.me/evfendy" target="_blank" class="circle-btn">
                  <span>{{ locale.t('aboutSection.btn') }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
/* Используем твои переменные из сохраненной инфы */
:root {
  --fg-bg-light: #f4f4f7;
  --fg-bg-dark: #050505;
  --fg-text-dark: #1a1a1a;
  --fg-text-light: #ffffff;
  --fg-accent: rgba(49, 55, 89, 0.75);
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: var(--fg-bg-light);
  color: var(--fg-text-dark);
}

/* --- PRELOADER --- */
.preloader {
  position: fixed;
  inset: 0;
  background: var(--fg-bg-dark);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.preloader-text-wrap {
  overflow: hidden;
  margin-bottom: 20px;
}

.char {
  display: inline-block;
  font-size: 2.5rem;
  font-weight: 900;
  transform: translateY(100%);
  animation: char-up 0.5s forwards ease-out;
}

@keyframes char-up {
  to { transform: translateY(0); }
}

.progress-container {
  width: 200px;
  position: relative;
}

.progress-num {
  font-size: 0.8rem;
  margin-bottom: 5px;
  font-weight: 300;
  letter-spacing: 2px;
}

.progress-line {
  height: 1px;
  background: var(--fg-accent);
  transition: width 0.1s ease;
}

.preloader-fade-leave-active {
  transition: transform 1s cubic-bezier(0.85, 0, 0.15, 1);
}

.preloader-fade-leave-to {
  transform: translateY(-100%);
}

/* --- HERO (LIGHT) --- */
.hero {
  height: 100vh;
  background-color: var(--fg-bg-light);
  color: var(--fg-text-dark);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  /* Зернистость для премиальности */
  background-image: url("https://grainy-gradients.vercel.app/noise.svg");
  background-size: 200px;
  opacity: 0.95;
}

/* Бегущий фон, который дышит при скролле */
.bg-title-wrapper {
  position: absolute;
  top: 45%;
  left: 0;
  white-space: nowrap;
  pointer-events: none;
  animation: marqueeHero 30s linear infinite;
  z-index: 1;
}

@keyframes marqueeHero {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.bg-title {
  font-size: 25vw;
  font-weight: 900;
  color: rgba(0,0,0,0.02); /* Почти невидимый, но создает объем */
  margin: 0;
  text-transform: uppercase;
}

.hero-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 120px 0 60px;
  z-index: 2;
}

/* Информация сверху с анимацией проявления */
.hero-info {
  display: flex;
  justify-content: space-between;
  animation: fadeInDown 1s cubic-bezier(0.2, 1, 0.3, 1) both;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.label {
  display: block;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(0,0,0,0.5);
  margin-bottom: 8px;
}

/* ГЛАВНЫЙ ВИЗУАЛ */
.hero-visual {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px; /* Для 3D эффекта */
}

.visual-main {
  position: relative;
  /* Анимация "вплытия" имени */
  animation: heroScale 1.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes heroScale {
  from { opacity: 0; transform: scale(0.9) translateY(40px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.visual-name {
  font-size: clamp(4rem, 12vw, 10rem);
  font-weight: 950;
  line-height: 0.85;
  margin: 0;
  letter-spacing: -0.04em;
  transition: transform 0.3s ease-out;
}

/* Эффект контура, который переливается */
.outline {
  -webkit-text-stroke: 1.5px var(--fg-text-dark);
  color: transparent;
  transition: all 0.5s ease;
}

.visual-main:hover .outline {
  color: var(--fg-text-dark);
  -webkit-text-stroke: 1.5px transparent;
}

/* ДЫШАЩИЕ СФЕРЫ */
.floating-circle {
  position: absolute;
  width: 35vw;
  height: 35vw;
  background: radial-gradient(circle, var(--fg-accent) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.2;
  z-index: -1;
  /* Плавное хаотичное движение */
  animation: blobFloat 12s infinite alternate ease-in-out;
}

.circle-1 { top: -10%; right: -5%; animation-delay: 0s; }
.circle-2 { bottom: -10%; left: -5%; background: rgba(100, 100, 255, 0.2); animation-delay: -4s; }

@keyframes blobFloat {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0, 0) scale(1); }
}

/* Скролл-индикатор снизу */
.hero-footer {
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
}

.scroll-icon {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, var(--fg-text-dark), transparent);
  position: relative;
  overflow: hidden;
}

.scroll-icon::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--fg-accent);
  animation: scrollLine 2s infinite ease-in-out;
}

@keyframes scrollLine {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

/* МОБИЛЬНАЯ АДАПТАЦИЯ HERO */
@media (max-width: 768px) {
  .hero-info {
    flex-direction: column;
    gap: 20px;
  }
  .visual-name {
    font-size: 15vw;
  }
  .bg-title {
    font-size: 40vw;
  }
}

/* --- ABOUT (DARK) --- */
.about {
  min-height: 100vh;
  background-color: var(--fg-bg-dark);
  color: var(--fg-text-light);
  padding: 160px 10%;
  position: relative;
  overflow: hidden;
  view-timeline-name: --section;
}

/* Эффект шума (Film Grain) на фоне — придает текстуру */
.about::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("https://grainy-gradients.vercel.app/noise.svg");
  opacity: 0.05;
  pointer-events: none;
  z-index: 1;
}

/* Бегущая строка на заднем плане (скрытая деталь) */
.about::after {
  content: "CREATIVE EXPERIENCE • STRATEGIC DESIGN • FULLSTACK DEVELOPMENT •";
  position: absolute;
  top: 20%;
  left: -50%;
  font-size: 15vw;
  font-weight: 900;
  color: rgba(255,255,255,0.02);
  white-space: nowrap;
  animation: marquee 60s linear infinite;
  z-index: 0;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.about-container {
  position: relative;
  z-index: 2; /* Выше шума и бегущей строки */
}

/* ФОТО: Глитч-эффект при наведении и плавание */
.about-visual {
  max-width: 420px;
  justify-self: center;
  position: relative;
  animation: float 6s ease-in-out infinite, revealUp both;
  animation-timeline: auto, --section; /* float работает всегда, revealUp от скролла */
  animation-range: auto, entry 25% cover 50%;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(1deg); }
}

.photo-placeholder {
  width: 100%;
  aspect-ratio: 4/5;
  background: #111;
  position: relative;
  overflow: hidden;
  border-radius: 0;
  outline: 1px solid rgba(255,255,255,0.15);
}

/* Свечение за фото */
.about-visual::before {
  content: '';
  position: absolute;
  inset: -20px;
  background: var(--fg-accent);
  filter: blur(60px);
  opacity: 0;
  transition: opacity 0.8s ease;
  z-index: -1;
}

.about-visual:hover::before {
  opacity: 0.2; /* Мягкое свечение при наведении */
}

/* ТЕКСТ: Эффект "появления букв" */
.about-lead {
  font-size: clamp(1.8rem, 4vw, 3.2rem);
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 50px;
  letter-spacing: -0.03em;
}

/* Анимированный градиент на хайлайтах */
.highlight {
  background: linear-gradient(120deg, #fff 0%, var(--fg-accent) 50%, #fff 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientFlow 4s linear infinite;
  display: inline-block;
}

@keyframes gradientFlow {
  to { background-position: 200% center; }
}

/* Описание с эффектом размытия при наведении */
.about-description {
  font-size: 1.2rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.8;
  max-width: 550px;
  transition: color 0.4s ease, filter 0.4s ease;
}

.about-description:hover {
  color: rgba(255,255,255,0.9);
  cursor: default;
}

/* КНОПКА: Эффект "магнита" */
.circle-btn {
  width: 160px;
  height: 160px;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: transparent;
  color: #fff;
  font-weight: 700;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
}

.circle-btn::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid var(--fg-accent);
  opacity: 0;
  transform: scale(1.2);
  transition: all 0.5s ease;
}

.circle-btn:hover::after {
  opacity: 1;
  transform: scale(1);
}

.circle-btn:hover {
  background: var(--fg-accent);
  box-shadow: 0 0 30px var(--fg-accent);
  border-color: transparent;
}
.about-img {
  width: 100%;
  height: 120%; /* Уменьшили со 130, чтобы не так сильно улетало */
  object-fit: cover;
  /* ОБЯЗАТЕЛЬНО ДОБАВЬ ЭТО: */
  object-position: center 20%; /* 20% поднимет картинку, чтобы лицо было в кадре */

  filter: grayscale(100%) brightness(0.8);
  transition: filter 0.5s ease;

  /* Параллакс оставляем, но чуть спокойнее */
  animation: parallaxScroll linear both;
  animation-timeline: --section;
  animation-range: entry 0% exit 100%;
}

@keyframes parallaxScroll {
  from { transform: translateY(-5%); } /* Меньше смещение */
  to { transform: translateY(5%); }
}
@media (max-width: 768px) {
  .about {
    min-height: auto;
    padding: 80px 6% 140px; /* Увеличили нижний паддинг для кнопки */
    display: flex;
    flex-direction: column;
    background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0);
    background-size: 30px 30px;
    gap: 0; /* Убираем стандартный гэп, будем рулить маржинами */
  }

  .about::before {
    top: 10%;
    font-size: 20vw;
    opacity: 0.02;
  }

  /* --- ФОТО: Чуть меньше, чтобы дать место тексту --- */
  .about-visual {
    width: 75%; /* Вместо фиксированных 280px используем % */
    max-width: 260px;
    align-self: flex-start;
    margin-left: 0;
    margin-bottom: 20px; /* Даем отступ до текста */
    z-index: 1;
  }

  .photo-placeholder {
    aspect-ratio: 4/5;
  }

  /* --- ТЕКСТ: Убираем сильный нахлест --- */
  .about-content {
    align-self: flex-end;
    width: 90%;
    margin-top: -20px; /* Уменьшили нахлест, чтобы не закрывать лицо */
    z-index: 2;
    text-align: right;
  }

  .about-lead {
    font-size: 1.5rem; /* Чуть меньше размер, чтобы не в 3 этажа */
    line-height: 1.1;
    margin-bottom: 15px;
    background: #000; /* Добавим черный фон-подложку, если текст наезжает на фото */
    display: inline;
    padding: 5px 0;
    box-shadow: 10px 0 0 #000, -10px 0 0 #000;
  }

  .about-description {
    font-size: 0.95rem;
    margin-top: 15px;
    padding-right: 12px;
    border-right: 2px solid var(--fg-accent);
    max-width: 100%;
  }

  /* --- КНОПКА: Фиксируем снизу, чтобы не плавала поверх букв --- */
  .about-action {
    position: relative; /* Меняем с absolute на relative для мобилок */
    margin-top: 40px;
    align-self: flex-start; /* Ставим слева, как и хотели */
    left: 0;
    bottom: 0;
  }

  .circle-btn {
    width: 90px;
    height: 90px;
    font-size: 0.55rem;
    /* Убираем лишнюю яркость, если мешает */
    background: rgba(var(--fg-accent-rgb), 0.9);
  }
}
</style>
