<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
// Импортируем систему перевода
import { locale } from '../i18n'

const activeTab = ref('about')
const toggleLangMobile = () => {
  const currentIndex = languages.indexOf(locale.current);
  const nextIndex = (currentIndex + 1) % languages.length;
  locale.current = languages[nextIndex] as any;
};

// --- МУЗЫКАЛЬНАЯ ЛОГИКА ---
const isPlaying = ref(false)
const audio = ref<HTMLAudioElement | null>(null)
const audioUrl = '/music/background.mp3'

const toggleMusic = () => {
  if (!audio.value) {
    audio.value = new Audio(audioUrl)
    audio.value.loop = true
    audio.value.volume = 0.5 // Средняя громкость
  }

  if (isPlaying.value) {
    audio.value.pause()
  } else {
    audio.value.play().catch(() => console.log("Кликните на страницу для активации аудио"))
  }
  isPlaying.value = !isPlaying.value
}

// --- ЛОГИКА ЯЗЫКОВ ---
const isLangOpen = ref(false)
const languages = ['EN', 'RU', 'KZ']

const toggleLang = (event: Event) => {
  event.stopPropagation()
  isLangOpen.value = !isLangOpen.value
}

const selectLang = (lang: any) => {
  locale.current = lang // Глобально меняем язык во всем приложении
  isLangOpen.value = false
}

const closeDropdown = () => {
  isLangOpen.value = false
}

onMounted(() => {
  window.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  window.removeEventListener('click', closeDropdown)
})
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <a href="#hero">AO</a>
    </div>

    <div class="nav-links">
      <a href="#about">{{ locale.t('about') }}</a>
      <a href="#skills">{{ locale.t('skills') }}</a>
      <a href="#experience">{{ locale.t('experience') }}</a>
      <a href="#certificates">{{ locale.t('certificates') }}</a>
      <a href="#contact">{{ locale.t('contact') }}</a>
    </div>

    <div class="actions">
      <button @click="toggleMusic" class="music-toggle" :class="{ 'is-active': isPlaying }">
        <div class="visualizer">
          <span class="v-bar"></span>
          <span class="v-bar"></span>
          <span class="v-bar"></span>
          <span class="v-bar"></span>
        </div>
      </button>

      <div class="lang-picker">
        <button @click="toggleLang" class="lang-btn" :class="{ 'active': isLangOpen }">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="globe-icon"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          <span class="lang-current">{{ locale.current }}</span>
          <span class="arrow" :class="{ 'rotate': isLangOpen }">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    </span>
        </button>

        <transition name="dropdown-anime">
          <div v-if="isLangOpen" class="lang-dropdown">
            <div class="dropdown-inner">
              <div
                  v-for="lang in languages"
                  :key="lang"
                  @click="selectLang(lang)"
                  class="lang-item"
                  :class="{ 'current': locale.current === lang }"
              >
                <span class="lang-name">{{ lang }}</span>
                <svg v-if="locale.current === lang" class="check-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <a href="#projects" class="cta-button">{{ locale.t('viewProjects') }}</a>
    </div>
  </nav>
  <nav class="mobile-tabbar">
    <a href="#about" class="tab-item" :class="{ 'is-active': activeTab === 'about' }" @click="activeTab = 'about'">
      <div class="icon-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      </div>
      <span class="tab-label">{{ locale.t('about') }}</span>
    </a>

    <a href="#skills" class="tab-item" :class="{ 'is-active': activeTab === 'skills' }" @click="activeTab = 'skills'">
      <div class="icon-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
      </div>
      <span class="tab-label">{{ locale.t('skills') }}</span>
    </a>

    <a href="#projects" class="tab-item main-pill" :class="{ 'is-active': activeTab === 'projects' }" @click="activeTab = 'projects'">
      <div class="icon-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      </div>
      <span class="tab-label">{{ locale.t('viewProjects') }}</span>
    </a>

    <div class="util-group">
      <div class="tab-item util-icon" @click="toggleMusic">
        <div class="visualizer-mini" :class="{ 'playing': isPlaying }">
          <span></span><span></span><span></span>
        </div>
      </div>
      <div class="tab-item util-icon" @click="toggleLangMobile">
        <span class="lang-text">{{ locale.current }}</span>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* ПЛАВАЮЩИЙ НАВБАР */
.navbar {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  height: 70px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(25, 30, 45, 0.75);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  z-index: 1000;
}

.logo a {
  font-size: 1.6rem;
  font-weight: 900;
  color: #fff;
  text-decoration: none;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover { color: #fff; }

.actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* МУЗЫКАЛЬНАЯ КНОПКА */
.music-toggle {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 42px;
  height: 42px;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.music-toggle:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.2);
}

.visualizer {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 16px;
}

.v-bar {
  width: 2px;
  height: 4px;
  background-color: #fff;
  border-radius: 1px;
  transition: height 0.3s ease;
}

/* Анимация при воспроизведении */
.is-active .v-bar {
  animation: bounce 0.8s infinite alternate;
}
.is-active .v-bar:nth-child(1) { animation-delay: 0.1s; }
.is-active .v-bar:nth-child(2) { animation-delay: 0.3s; }
.is-active .v-bar:nth-child(3) { animation-delay: 0.2s; }
.is-active .v-bar:nth-child(4) { animation-delay: 0.4s; }

@keyframes bounce {
  0% { height: 4px; }
  100% { height: 16px; }
}

/* ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА */
/* ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА — DESKTOP REDESIGN */
.lang-picker { position: relative; }

.lang-btn {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #fff;
  padding: 8px 16px;
  border-radius: 14px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.lang-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

.lang-btn.active {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.3);
}

.globe-icon {
  opacity: 0.6;
  transition: opacity 0.3s;
}
.lang-btn:hover .globe-icon { opacity: 1; }

.arrow {
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0.5;
}
.arrow.rotate { transform: rotate(180deg); opacity: 1; }

/* ВЫПАДАЮЩЕЕ МЕНЮ */
.lang-dropdown {
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  min-width: 120px;
  background: rgba(20, 22, 30, 0.8);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: 6px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  z-index: 1100;
  transform-origin: top right;
}

.dropdown-inner {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.lang-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.2s ease;
}

.lang-item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}

.lang-item.current {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.check-icon {
  color: #fff;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.3));
}

/* АНИМАЦИЯ ПОЯВЛЕНИЯ (SPRING EFFECT) */
.dropdown-anime-enter-active {
  animation: spring-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.dropdown-anime-leave-active {
  animation: spring-in 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) reverse;
}

@keyframes spring-in {
  0% { opacity: 0; transform: scale(0.8) translateY(-10px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}
/* КНОПКА VIEW PROJECTS */
.cta-button {
  background: #fff;
  color: #121621;
  padding: 10px 18px;
  border-radius: 12px;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 800;
  transition: all 0.2s;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.3);
}

/* АНИМАЦИИ ВЫПАДЕНИЯ */
.fade-slide-enter-active, .fade-slide-leave-active { transition: all 0.3s ease; }
.fade-slide-enter-from, .fade-slide-leave-to { opacity: 0; transform: translateY(-10px); }

@media (max-width: 850px) {
  .navbar { display: none; }
}
/* МОБИЛЬНЫЙ ТАБ-БАР — LUXE STYLE */
.mobile-tabbar {
  display: none;
  position: fixed;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  /* Глубокий космический фон с градиентом */
  background: radial-gradient(circle at top, rgba(45, 48, 60, 0.92), rgba(20, 22, 28, 0.95));
  backdrop-filter: blur(25px) saturate(160%);
  -webkit-backdrop-filter: blur(25px) saturate(160%);

  /* Двойная рамка для эффекта объема */
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
      0 20px 40px rgba(0, 0, 0, 0.6),
      0 0 0 1px rgba(255, 255, 255, 0.05) inset; /* Тонкий блик внутри */

  border-radius: 40px;
  padding: 6px;
  gap: 4px;
  align-items: center;
  z-index: 2000;
  width: auto;
  min-width: 290px;
}

@media (max-width: 850px) {
  .mobile-tabbar { display: flex; }
}

.tab-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  min-width: 46px;
  border-radius: 23px;
  color: rgba(255, 255, 255, 0.45);
  text-decoration: none;
  /* Плавная физика 'пружины' */
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  flex-shrink: 0;
}

/* Эффект при нажатии пальцем */
.tab-item:active {
  transform: scale(0.9);
  background: rgba(255, 255, 255, 0.05);
}

/* Активная вкладка — мягкое свечение */
.tab-item.is-active {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 0 18px;
  min-width: 130px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  transition: transform 0.3s ease;
}

.is-active .icon-wrapper {
  transform: scale(1.1);
}

/* Текст вкладки */
.tab-label {
  font-size: 0.75rem;
  font-weight: 700;
  margin-left: 10px;
  white-space: nowrap;
  letter-spacing: 0.3px;
  display: none;
  opacity: 0;
  text-transform: capitalize;
}

.is-active .tab-label {
  display: inline-block;
  opacity: 1;
  animation: slideInText 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes slideInText {
  from { transform: translateX(-8px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

/* Группа настроек (Звук/Язык) */
/* Утилиты (Музыка и Язык) */
.util-group {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 8px;
  padding-left: 12px;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  height: 28px;
  flex-shrink: 0; /* Чтобы вся группа не сжималась */
}

.util-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px; /* Фиксируем ширину */
  height: 44px; /* Фиксируем высоту */
  min-width: 44px;
  cursor: pointer;
  transition: transform 0.2s ease;
  color: #fff;
  flex-shrink: 0;
}

.util-icon:active {
  transform: scale(0.9);
}

/* Визуализатор звука — гарантированная видимость */
.visualizer-mini {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 14px; /* Высота контейнера */
  width: 14px; /* Ширина контейнера */
  pointer-events: none; /* Чтобы клик шел на родителя */
}

.visualizer-mini span {
  width: 2px;
  height: 4px; /* Минимальная высота, чтобы полоски были видны всегда */
  background: #fff;
  border-radius: 1px;
  display: block;
}

/* Анимация */
.visualizer-mini.playing span {
  animation: equalize-mini 0.6s infinite alternate;
}

.visualizer-mini.playing span:nth-child(1) { animation-delay: 0.1s; }
.visualizer-mini.playing span:nth-child(2) { animation-delay: 0.3s; }
.visualizer-mini.playing span:nth-child(3) { animation-delay: 0.2s; }

@keyframes equalize-mini {
  0% { height: 4px; }
  100% { height: 14px; }
}

/* Язык */
.lang-text {
  font-size: 0.75rem;
  font-weight: 900;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  padding: 4px 6px;
  border-radius: 8px;
  min-width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
