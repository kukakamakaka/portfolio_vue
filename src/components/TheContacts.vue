<template>
  <div class="contact-page">
    <div class="video-layer">
      <video autoplay muted loop playsinline class="bg-video">
        <source src="/nexbot-bg.mp4" type="video/mp4">
      </video>
      <div class="video-overlay"></div>
    </div>

    <section id="contact" class="contact-section">
      <div class="container split-wrapper">

        <div class="side-column left-side">
          <div class="bento-item header-card">
            <div class="status-badge">
              <span class="pulse-dot"></span>
              {{ locale.t('contacts.status') }}
            </div>
            <h2 class="hero-title">
              {{ locale.t('contacts.get_in') }} <br>
              <span class="stroke-text">{{ locale.t('contacts.touch') }}</span>
            </h2>
          </div>

          <div class="bento-item location-card">
            <span class="label">{{ locale.t('contacts.node') }}</span>
            <span class="city">{{ locale.t('contacts.astana') }}</span>
            <span class="tz">UTC +5:00</span>
          </div>

          <div class="bento-item email-card" @click="handleCopy('kukakamakaka99@gmail.com')">
            <span class="label">{{ locale.t('contacts.endpoint') }}</span>
            <div class="email-row">
              <h3>kukakamakaka99@gmail.com</h3>
              <i class="fas fa-copy"></i>
            </div>
            <div class="copy-status">{{ copyMessage }}</div>
          </div>
        </div>

        <div class="center-gap"></div>

        <div class="side-column right-side">
          <div class="social-grid">
            <a href="https://t.me/evfendy" target="_blank" class="bento-item social-link tg">
              <i class="fab fa-telegram-plane"></i> <span>TELEGRAM</span>
            </a>
            <a href="https://wa.me/77054371168" target="_blank" class="bento-item social-link wa">
              <i class="fab fa-whatsapp"></i> <span>WHATSAPP</span>
            </a>
            <a href="https://github.com/kukakamakaka" target="_blank" class="bento-item social-link gh">
              <i class="fab fa-github"></i> <span>GITHUB</span>
            </a>
            <a href="https://linkedin.com/in/kukaka-makaka-2b8a8a388/" target="_blank" class="bento-item social-link li">
              <i class="fab fa-linkedin-in"></i> <span>LINKEDIN</span>
            </a>
            <a href="https://www.instagram.com/webdevelop88" target="_blank" class="bento-item social-link ig">
              <i class="fab fa-instagram"></i> <span>INSTAGRAM</span>
            </a>
            <a href="https://www.tiktok.com/@webdev64" target="_blank" class="bento-item social-link tk">
              <i class="fab fa-tiktok"></i> <span>TIKTOK</span>
            </a>

            <a href="https://t.me/kukakamakaka" target="_blank" class="bento-item wide-link ch">
              <i class="fas fa-bullhorn"></i>
              <div class="txt">
                <span class="title">{{ locale.t('contacts.dev_channel') }}</span>
                <span class="sub">@kukakamakaka</span>
              </div>
            </a>
            <div @click="handleCopy('231506@astanait.edu.kz')" class="bento-item wide-link teams">
              <i class="fas fa-university"></i>
              <div class="txt">
                <span class="title">MS TEAMS</span>
                <span class="sub">{{ locale.t('contacts.student') }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { locale } from '../i18n';

const currentTime = ref('');

const copyMessage = ref(locale.t('contacts.copy'));


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
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;800&family=Space+Grotesk:wght@700&display=swap');

.contact-page {
  position: relative;
  min-height: 100vh;
  background: #000;
  color: #fff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  overflow: hidden;
}

.video-layer {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.bg-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
}

.video-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #000 0%, transparent 40%, transparent 60%, #000 100%);
}

.contact-section {
  position: relative;
  z-index: 10;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 40px;
}

.split-wrapper {
  display: flex;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: stretch;
  gap: 20px;
}

.side-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
}

.center-gap {
  flex: 1.2;
}

.bento-item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(15px);
  transition: 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  text-decoration: none;
  color: #fff;
  cursor: default;
}

.bento-item:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: #525d8f;
  transform: translateY(-4px);
}

a.bento-item { cursor: pointer; }

.header-card .hero-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3rem;
  line-height: 1.1;
  margin: 10px 0;
  font-weight: 700;
}

.stroke-text {
  color: transparent;
  -webkit-text-stroke: 1px #525d8f;
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.65rem;
  color: #525d8f;
  font-weight: 800;
  letter-spacing: 1px;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 8px #8c98d1;
  animation: blink 1.5s infinite;
}

.location-card .city {
  display: block;
  font-size: 1.5rem;
  font-weight: 800;
  margin-top: 5px;
}

.location-card .label, .email-card .label {
  font-size: 0.6rem;
  color: #525d8f;
  font-weight: 800;
}

.email-card { cursor: pointer; }
.email-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
}

.email-row h3 {
  font-size: 1rem;
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
}

.copy-status {
  font-size: 0.6rem;
  color: #525d8f;
  margin-top: 8px;
  font-weight: 800;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
}

.social-link i { font-size: 1.4rem; color: #525d8f; }
.social-link span { font-size: 0.6rem; font-weight: 800; letter-spacing: 1px; }

.wide-link {
  grid-column: span 2;
  display: flex;
  align-items: center;
  gap: 15px;
}

.wide-link .title { font-weight: 800; font-size: 0.85rem; display: block; }
.wide-link .sub { font-size: 0.6rem; color: #666; }



@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* RESPONSIVE */
@media (max-width: 1100px) {
  .center-gap { display: none; }
  .split-wrapper { flex-direction: column; align-items: center; }
  .side-column { max-width: 100%; width: 100%; }
}

@media (max-width: 600px) {
  .header-card .hero-title { font-size: 2.2rem; }
  .social-grid { grid-template-columns: 1fr; }
  .social-link { flex-direction: row; justify-content: flex-start; padding-left: 10px; }
}
</style>