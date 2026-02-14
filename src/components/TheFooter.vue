<template>
  <footer class="ultimate-footer">
    <div class="footer-grid-container">
      <div class="footer-main-section">
        <div class="name-wrapper">
          <p class="role-text">// {{ locale.t('footer.role') }}</p>
          <h1 class="highlight name-logo">0NEGE ALIBEK</h1>
          <div class="underline-glow"></div>
        </div>
      </div>

      <div class="footer-bento-grid">
        <div class="bento-cell">
          <span class="cell-label">{{ locale.t('footer.nav_title') }}</span>
          <nav class="footer-nav">
            <a href="#about" class="nav-link">{{ locale.t('footer.about') }}</a>
            <a href="#projects" class="nav-link">{{ locale.t('footer.works') }}</a>
            <a href="#skills" class="nav-link">{{ locale.t('footer.stack') }}</a>
          </nav>
        </div>

        <div class="bento-cell">
          <span class="cell-label">{{ locale.t('footer.location') }}</span>
          <p class="cell-value">{{ locale.t('footer.city') }}</p>
          <p class="cell-sub">UTC +5:00</p>
        </div>

        <div class="bento-cell socials">
          <span class="cell-label">{{ locale.t('footer.socials') }}</span>
          <div class="pill-group">
            <a href="https://github.com/kukakamakaka" target="_blank" class="social-pill">GH</a>
            <a href="https://t.me/evfendy" target="_blank" class="social-pill">TG</a>
            <a href="https://linkedin.com" target="_blank" class="social-pill">LI</a>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-legal-bar">
      <div class="legal-left">
        <span class="copyright">© 2026 0NEGE.</span>
        <span class="built-with">{{ locale.t('footer.built') }}</span>
      </div>
      <div class="legal-right">
        <div class="system-status">
          <span class="status-dot"></span>
          <span class="status-text">{{ locale.t('footer.update') }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { locale } from '../i18n';

const currentTime = ref('');
// Бастапқы мәнді сенің locale.t арқылы аламыз
const copyMessage = ref(locale.t('contacts.copy'));

// Тіл өзгергенде хабарламаны автоматты түрде жаңарту
watch(() => locale.current, () => {
  copyMessage.value = locale.t('contacts.copy');
});

const handleCopy = (text) => {
  navigator.clipboard.writeText(text);
  copyMessage.value = locale.t('contacts.copied');
  setTimeout(() => {
    copyMessage.value = locale.t('contacts.copy');
  }, 2000);
};

onMounted(() => {
  setInterval(() => {
    currentTime.value = new Date().toLocaleTimeString('en-GB', { hour12: false });
  }, 1000);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700;900&display=swap');

.ultimate-footer {
  background: #000;
  color: #fff;
  font-family: 'Unbounded', sans-serif;
  padding-top: 20px;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.03);
}

/* MARQUEE (ЖҮГІРМЕЛІ ЖОЛ) */
.marquee-line {
  background: #525d8f;
  color: #000;
  padding: 8px 0;
  overflow: hidden;
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 40px;
}

.marquee-content {
  display: flex;
  white-space: nowrap;
  animation: marquee 20s linear infinite;
}

.marquee-content span {
  padding-right: 50px;
}

/* CONTAINER */
.footer-grid-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

/* NAME SECTION */
.footer-main-section {
  text-align: left;
}

.role-text {
  font-size: 0.6rem;
  color: #525d8f;
  letter-spacing: 3px;
  margin-bottom: 5px;
}

.name-logo {
  font-size: clamp(2rem, 15vw, 6rem);
  line-height: 0.9;
  margin: 0;
  letter-spacing: -3px;
  font-weight: 900;
  background: linear-gradient(120deg, #fff 0%, #525d8f 50%, #fff 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientFlow 4s linear infinite;
}

.underline-glow {
  width: 100px;
  height: 4px;
  background: #525d8f;
  margin-top: 10px;
  box-shadow: 0 0 20px #525d8f;
}

/* BENTO GRID */
.footer-bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 40px;
}

.bento-cell {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cell-label {
  font-size: 0.55rem;
  color: #444;
  letter-spacing: 2px;
  font-weight: 700;
}

.nav-link {
  color: #888;
  text-decoration: none;
  font-size: 0.8rem;
  transition: 0.3s;
}

.nav-link:hover {
  color: #fff;
  transform: translateX(5px);
}

.cell-value { font-size: 0.9rem; color: #fff; margin: 0; }
.cell-sub { font-size: 0.7rem; color: #444; margin: 0; }

.pill-group {
  display: flex;
  gap: 10px;
}

.social-pill {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  font-size: 0.6rem;
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
}

.social-pill:hover {
  background: #fff;
  color: #000;
}

/* LEGAL BAR */
.footer-legal-bar {
  max-width: 1400px;
  margin: 60px auto 0;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.55rem;
  color: #333;
}

.legal-left {
  display: flex;
  gap: 20px;
}

.status-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  background: #ffffff;
  border-radius: 50%;
  margin-right: 8px;
  box-shadow: 0 0 10px #8c98d1;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes gradientFlow {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}

@media (max-width: 900px) {
  .footer-bento-grid { grid-template-columns: 1fr; gap: 40px; }
  .footer-legal-bar { flex-direction: column; gap: 20px; }
}
</style>