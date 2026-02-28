<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { locale } from '../i18n';

const certificates = computed(() => {
  const data = locale.t('certificatesSection.items');
  return Array.isArray(data) ? data : [];
});

const certFiles = [
  new URL('../assets/python_cert.pdf', import.meta.url).href,
  new URL('../assets/hacker_cert.pdf', import.meta.url).href,
  new URL('../assets/ccna_cert.pdf', import.meta.url).href
];


const mouseX = ref(0);
const mouseY = ref(0);
const updateMouse = (e: MouseEvent) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
};
onMounted(() => window.addEventListener('mousemove', updateMouse));
</script>

<template>
  <section id="certificates" class="cert-section">
    <div class="bg-vibe">
      <div class="cyber-grid"></div>
      <div class="interactive-glow" :style="{ left: mouseX + 'px', top: mouseY + 'px' }"></div>

      <div class="floating-elements">
        <div class="data-tag d1">STATUS: VERIFIED</div>
        <div class="data-tag d2">0xDE_77_AF</div>
        <div class="data-tag d3">HASH_CHECK_SUCCESS</div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="split-display">

        <div class="branding-column">
          <div class="vertical-content auto-float">
            <h2 class="main-title">
              <span class="gradient-text">{{ locale.t('certificatesSection.title') }}</span>
            </h2>
          </div>
        </div>

        <div class="list-column">
          <div v-for="(cert, index) in certificates" :key="index" class="cert-entry">
            <a :href="certFiles[index]" target="_blank" class="cert-link">

              <div class="cert-info">
                <div class="entry-header">
                  <div class="id-badge">ID: 0{{ index + 1 }}</div>
                  <div class="divider-line"></div>
                  <span class="date">{{ cert.date }}</span>
                </div>

                <h3 class="entry-title">{{ cert.title }}</h3>

                <div class="entry-details">
                  <div class="org-container">
                    <span class="org-icon">◈</span>
                    <span class="org-name">{{ cert.issuer }}</span>
                  </div>
                  <p class="desc">{{ cert.description }}</p>
                </div>
              </div>

              <div class="entry-action">
                <div class="magnetic-circle">
                  <span class="arrow">→</span>
                  <svg class="progress-ring" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48"></circle>
                  </svg>
                </div>
              </div>

              <div class="hover-glow-effect"></div>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.cert-section {
  background: #000;
  color: #fff;
  padding: 120px 0;
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

/* --- ADVANCED BACKGROUND --- */
.bg-vibe {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.cyber-grid {
  position: absolute;
  inset: 0;
  background-image:
      linear-gradient(rgba(82, 93, 143, 0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(82, 93, 143, 0.07) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(circle at center, black, transparent 90%);
}

.interactive-glow {
  position: fixed;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(82, 93, 143, 0.12) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  filter: blur(40px);
  transition: width 0.3s ease;
}

.data-tag {
  position: absolute;
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  color: rgba(82, 93, 143, 0.3);
  letter-spacing: 2px;
  border-left: 1px solid rgba(82, 93, 143, 0.3);
  padding-left: 10px;
}
.d1 { top: 10%; right: 5%; animation: floatY 6s infinite; }
.d2 { bottom: 15%; left: 10%; animation: floatY 8s infinite reverse; }
.d3 { top: 40%; left: 30%; animation: floatY 10s infinite; }

@keyframes floatY {
  0%, 100% { transform: translateY(0); opacity: 0.3; }
  50% { transform: translateY(-20px); opacity: 0.6; }
}

/* --- LAYOUT (PRECISE) --- */
.container-fluid {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 6%;
  position: relative;
  z-index: 2;
}

.split-display {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 80px;
}

/* LEFT SIDE: BRANDING */
.branding-column {
  flex: 0 0 100px; /* Фиксация ширины чтобы не прыгал */
}

.vertical-content {
  position: sticky;
  top: 150px;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}

.main-title {
  font-size: clamp(3.5rem, 7vw, 6rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -4px;
  margin: 0;
  line-height: 0.85;
}

.gradient-text {
  background: linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes softFloat {
  0%, 100% { transform: rotate(180deg) translateY(0px); }
  50% { transform: rotate(180deg) translateY(-25px); }
}
.auto-float { animation: softFloat 6s ease-in-out infinite; }

/* RIGHT SIDE: LIST */
.list-column {
  flex: 0 1 800px;
}

.cert-entry {
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  overflow: visible !important;
}

.cert-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 45px 0;
  text-decoration: none;
  color: inherit;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.entry-header {
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: monospace;
  font-size: 0.75rem;
  margin-bottom: 15px;
}

.id-badge {
  color: #525d8f;
  background: rgba(82, 93, 143, 0.1);
  padding: 2px 8px;
  border-radius: 4px;
}

.divider-line { width: 40px; height: 1px; background: rgba(82, 93, 143, 0.2); }
.date { color: #555; }

.entry-title {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 15px;
  line-height: 1;
  transition: color 0.3s;
}

.org-container {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  color: #888;
}

.org-icon { color: #525d8f; font-size: 0.8rem; }
.org-name { font-size: 0.85rem; font-weight: 700; text-transform: uppercase; }

.desc {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  max-width: 550px;
  transition: color 0.3s;
}

/* MAGNETIC CIRCLE BUTTON */
.magnetic-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.4s;
}

.arrow { font-size: 1.8rem; transform: rotate(-45deg); transition: 0.4s; }

.progress-ring {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  transform: rotate(-90deg);
}

.progress-ring circle {
  fill: transparent;
  stroke: #525d8f;
  stroke-width: 2;
  stroke-dasharray: 301.59;
  stroke-dashoffset: 301.59;
  transition: stroke-dashoffset 0.6s ease;
}

/* HOVER EFFECTS */
.cert-link:hover {
  padding-left: 25px;
  background: rgba(255, 255, 255, 0.01);
}

.cert-link:hover .entry-title { color: #525d8f; }
.cert-link:hover .desc { color: #aaa; }

.cert-link:hover .magnetic-circle {
  border-color: #fff;
  transform: scale(1.1);
}

.cert-link:hover .arrow {
  transform: rotate(0deg);
  color: #fff;
}

.cert-link:hover .progress-ring circle {
  stroke-dashoffset: 0;
}

.hover-glow-effect {
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(82, 93, 143, 0.03), transparent);
  transition: 0.8s;
}
.cert-link:hover .hover-glow-effect { left: 100%; }

@media (max-width: 1100px) {
  .cert-section {
    min-height: auto;
    padding: 0px 0;
  }

  .split-display {
    flex-direction: column;
    gap: 0px;
  }


  .vertical-content {
    writing-mode: horizontal-tb;
    transform: none !important;
    animation: none;
    position: static;
  }

  .main-title {
    font-size: clamp(3rem, 12vw, 5rem);
    line-height: 2.1;
    text-align: center;
    margin-bottom: 10px;
  }


  .list-column {
    flex: auto;
    width: 100%;
  }

  .entry-title {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }

  .desc {
    font-size: 0.8rem;
    line-height: 1.4;
  }

  .cert-link {
    padding: 20px 0;
  }


  .interactive-glow, .floating-elements {
    display: none;
  }


  .magnetic-circle {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
  }

  .arrow {
    font-size: 1.2rem;
  }
}
</style>