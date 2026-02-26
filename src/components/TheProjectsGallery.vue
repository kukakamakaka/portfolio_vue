<template>
  <section id="projects" class="projects-wrapper">
    <div class="header-v4">
      <div class="header-info">
        <span class="prefix">// ARCHIVE_2026</span>
        <h2 class="main-title">SELECTED<br><span class="gradient-text">EXPERIENCE</span></h2>
      </div>
    </div>

    <div class="projects-grid">
      <div class="p-card active" @click="openProject(1)">
        <div class="commercial-badge">COMMERCIAL</div>
        <div class="card-content">
          <div class="card-top">
            <div class="status-indicator"><span class="pulse"></span> PRODUCTION</div>
            <span class="index">01</span>
          </div>
          <div class="card-body">
            <span class="category">MANAGEMENT_SYSTEM</span>
            <h3 class="project-name">NS DRIVE</h3>
          </div>
          <div class="card-footer">
            <div class="tech-stack">PYTHON • FASTAPI • DOCKER</div>
            <div class="explore-btn">VIEW_DETAILS <span>→</span></div>
          </div>
        </div>
      </div>

      <div class="p-card active" @click="openProject(2)">
        <div class="card-bg-overlay">
          <img src="../assets/projects/project1/main.jpg" class="card-img-preview" alt="QazaqGaz Preview">
        </div>
        <div class="card-content">
          <div class="card-top">
            <div class="status-indicator"><span class="pulse orange"></span> DEPLOYED</div>
            <span class="index">02</span>
          </div>
          <div class="card-body">
            <span class="category">SERVICE_DESK</span>
            <h3 class="project-name">QG HELPDESK</h3>
          </div>
          <div class="card-footer">
            <div class="tech-stack">LARAVEL • MYSQL • DOCKER</div>
            <div class="explore-btn">VIEW_PROJECT <span>→</span></div>
          </div>
        </div>
      </div>

      <div v-for="i in 4" :key="i" class="p-card locked"></div>
    </div>

    <Teleport to="body">
      <Transition @enter="onEnter" @leave="onLeave">

        <div v-if="selectedProject === 1" class="modal-backdrop" @click.self="closeProject">
          <div class="modal-window dashboard">
            <button class="close-x-btn" @click="closeProject"><div class="x-icon"><span class="line l1"></span><span class="line l2"></span></div><span class="close-hint">ESC</span></button>
            <div class="m-container">
              <div class="m-top">
                <div class="m-brand"><span class="m-badge">2026_STABLE</span><h2 class="m-title">NS DRIVE</h2></div>
                <p class="m-tagline">Автоматизация записи для автошколы</p>
              </div>
              <div class="m-main-grid">
                <div class="m-block"> <label>TECH_STACK</label> <div class="stack-tags"><span>Python</span><span>FastAPI</span><span>Docker</span></div> </div>
                <div class="m-block"> <label>LOGIC_FLOW</label> <div class="logic-flow"><div class="node">TG</div><div class="arrow">→</div><div class="node">API</div></div> </div>
                <div class="m-block features"> <label>FEATURES</label> <ul class="compact-list"><li>• Запись 24/7</li><li>• API Monitoring</li></ul> </div>
                <div class="m-block impact"> <label>IMPACT</label> <div class="stat">90%</div> </div>
              </div>
              <div class="m-actions">
                <a href="#" class="btn-p">OPEN_BOT</a>
                <a href="#" class="btn-s">SOURCE</a>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="selectedProject === 2" class="modal-backdrop" @click.self="closeProject">
          <div class="modal-window showcase">
            <button class="close-x-btn" @click="closeProject" aria-label="Close">
              <div class="x-icon"><span class="line l1"></span><span class="line l2"></span></div>
              <span class="close-hint">ESC</span>
            </button>

            <div class="m-container">
              <div class="m-top">
                <div class="m-brand">
                  <span class="m-badge">ENTERPRISE_SOLUTION</span>
                  <h2 class="m-title">QG HELPDESK</h2>
                </div>
                <p class="m-tagline">🏛️ Система техподдержки для ТОО «QazaqGaz НТЦ»</p>
              </div>

              <div class="m-block slider-wrapper">
                <label>PROJECT_GALLERY // SWIPE_HORIZONTAL</label>

                <div class="gallery-viewport">
                  <div class="gallery-track">
                    <div class="gallery-slide">
                      <img src="../assets/projects/project1/main.jpg" alt="Dashboard Main">
                    </div>
                    <div class="gallery-slide">
                      <img src="../assets/projects/project1/1.jpg" alt="Interface 01">
                    </div>
                    <div class="gallery-slide">
                      <img src="../assets/projects/project1/2.jpg" alt="Interface 02">
                    </div>
                    <div class="gallery-slide">
                      <img src="../assets/projects/project1/3.jpg" alt="Interface 03">
                    </div>
                  </div>

                  <div class="slider-nav-hint">
                    <span class="arrow-icon">←</span>
                    <span class="hint-text">SCROLL_TO_VIEW_MORE</span>
                    <span class="arrow-icon">→</span>
                  </div>
                </div>
              </div>

              <div class="m-details-row">
                <div class="m-block stack">
                  <label>TECHNICAL_INFRA</label>
                  <div class="stack-tags">
                    <span class="highlight-tag">Laravel 12</span><span>PHP 8.2</span>
                    <span>MySQL</span><span>Tailwind</span><span>Docker</span>
                  </div>
                </div>

                <div class="m-block impact">
                  <label>PRODUCTION_RESULT</label>
                  <div class="impact-content">
                    <div class="stat">48h</div>
                    <p>Интенсивная разработка. <b>Fullstack Ready</b> код.</p>
                  </div>
                </div>
              </div>

              <div class="m-actions">
                <a href="https://github.com/kukakamakaka" target="_blank" class="btn-s full-width">
                  GITHUB_REPOSITORY <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { gsap } from 'gsap';

const selectedProject = ref<number | null>(null);

const openProject = (id: number) => {
  selectedProject.value = id;
  document.body.style.overflow = 'hidden';
};

const closeProject = () => {
  selectedProject.value = null;
  document.body.style.overflow = 'auto';
};

const onEnter = (el: any) => {
  const tl = gsap.timeline();
  tl.fromTo(el, { opacity: 0 }, { duration: 0.3, opacity: 1 })
      .fromTo('.modal-window', { y: 40, opacity: 0, scale: 0.95 }, { duration: 0.5, y: 0, opacity: 1, scale: 1, ease: 'expo.out' })
      .from('.m-block', { opacity: 0, y: 20, stagger: 0.05, duration: 0.4 }, "-=0.2");
};

const onLeave = (el: any, done: any) => {
  gsap.to(el, { duration: 0.3, opacity: 0, scale: 0.9, onComplete: done });
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@900&family=Inter:wght@400;700;800&display=swap');

.projects-wrapper { background: #000; padding: 100px 5vw; color: #fff; font-family: 'Inter', sans-serif; }
.main-title { font-family: 'Unbounded'; font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; line-height: 0.9; margin: 20px 0; }
.gradient-text { background: linear-gradient(90deg, #525d8f, #fff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.prefix { font-size: 0.7rem; letter-spacing: 5px; color: #525d8f; font-weight: 800; }

/* GRID */
.projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.p-card { background: #080808; border: 1px solid #111; height: 380px; position: relative; cursor: pointer; transition: 0.4s; overflow: hidden; }
.p-card:hover { border-color: #525d8f; }

.commercial-badge {
  position: absolute;
  top: 15px;
  right: -35px;
  background: #525d8f;
  color: #fff;
  font-size: 0.6rem;
  font-weight: 900;
  padding: 5px 40px;
  transform: rotate(45deg);
  z-index: 5;
  letter-spacing: 1px;
  overflow: hidden; /* Шиммер эффектісі сыртқа шықпауы үшін */

  /* Неонды жарық анимациясы */
  box-shadow: 0 0 10px rgba(82, 93, 143, 0.5);
  animation: badge-glow 3s infinite ease-in-out;
}

/* 1. Жылтыр эффектісі (Shimmer) */
.commercial-badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
  );
  animation: shimmer 4s infinite linear;
}

/* 2. Тыныс алу анимациясы (Glow) */
@keyframes badge-glow {
  0%, 100% {
    box-shadow: 0 0 10px rgba(82, 93, 143, 0.4);
    background: #525d8f;
  }
  50% {
    box-shadow: 0 0 25px rgba(82, 93, 143, 0.8);
    background: #6371ad; /* Сәл ашық түс */
  }
}

/* 3. Жылтырдың қозғалысы */
@keyframes shimmer {
  0% { left: -100%; }
  20% { left: 100%; }
  100% { left: 100%; }
}

/* Карточкаға тышқанды апарғанда (Hover) эффектіні күшейту */
.p-card:hover .commercial-badge {
  background: #fff;
  color: #525d8f;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
  transition: 0.4s;
}

.card-content { padding: 35px; height: 100%; display: flex; flex-direction: column; justify-content: space-between; }
.project-name { font-family: 'Unbounded'; font-size: 1.8rem; font-weight: 900; }

/* DASHBOARD MODAL */
.modal-backdrop { position: fixed; inset: 0; z-index: 99999; background: rgba(0,0,0,0.9); backdrop-filter: blur(20px); display: flex; align-items: center; justify-content: center; padding: 20px; }
.modal-window.dashboard {
  width: 100%; max-width: 950px; background: #050505; border: 1px solid #1a1a1a;
  padding: 50px; position: relative;
}

.m-container { display: flex; flex-direction: column; gap: 30px; }

.m-top { border-bottom: 1px solid #111; padding-bottom: 20px; }
.m-title { font-family: 'Unbounded'; font-size: 2.8rem; font-weight: 900; margin: 5px 0; }
.m-badge { color: #525d8f; font-size: 0.65rem; font-weight: 800; letter-spacing: 2px; }
.m-tagline { color: #555; font-size: 0.9rem; }

/* DASHBOARD GRID */
.m-main-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

.m-block { background: #080808; border: 1px solid #111; padding: 20px; }
.m-block label { font-size: 0.6rem; color: #525d8f; font-weight: 900; letter-spacing: 2px; display: block; margin-bottom: 15px; }

/* STACK TAGS */
.stack-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.stack-tags span { font-size: 0.7rem; padding: 4px 10px; border: 1px solid #222; background: #000; color: #eee; }

/* LOGIC FLOW */
.logic-flow { display: flex; align-items: center; gap: 10px; font-size: 0.75rem; color: #fff; font-weight: 700; }
.node { background: #111; padding: 8px 15px; border-radius: 2px; border: 1px solid #222; }
.arrow { color: #525d8f; }

/* COMPACT LIST */
.compact-list { list-style: none; padding: 0; margin: 0; }
.compact-list li { font-size: 0.8rem; color: #888; margin-bottom: 8px; }

/* IMPACT STICKER STYLE */
.impact { background: linear-gradient(135deg, rgba(82,93,143,0.1) 0%, #080808 100%); border-color: rgba(82,93,143,0.3); }
.impact-content { display: flex; align-items: center; gap: 20px; }
.stat { font-family: 'Unbounded'; font-size: 3rem; font-weight: 900; color: #525d8f; }
.impact-content p { font-size: 0.85rem; color: #eee; line-height: 1.4; }

/* ACTIONS */
.m-actions { display: flex; gap: 10px; }
.btn-p, .btn-s { flex: 1; padding: 18px; text-align: center; text-decoration: none; font-size: 0.75rem; font-weight: 900; letter-spacing: 1px; }
.btn-p { background: #fff; color: #000; }
.btn-s { border: 1px solid #222; color: #fff; }
.btn-s:hover { border-color: #525d8f; }

/* CLOSE BUTTON - NEON DASHBOARD STYLE */
.close-x-btn {
  position: absolute;
  top: 25px;
  right: 25px;
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(82, 93, 143, 0.4);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column; /* Элементтерді бірінің астына бірін қою */
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  backdrop-filter: blur(12px);
  z-index: 100;
  overflow: hidden;
}

/* Крест иконкасы */
.x-icon {
  width: 24px;
  height: 24px;
  position: relative;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.line {
  position: absolute;
  width: 100%;
  height: 2px;
  background: #525d8f;
  top: 50%;
  left: 0;
  border-radius: 4px;
  transition: 0.3s ease;
}

.l1 { transform: translateY(-50%) rotate(45deg); }
.l2 { transform: translateY(-50%) rotate(-45deg); }

/* ESC жазуының стилі */
.close-hint {
  font-family: 'Unbounded', sans-serif;
  font-size: 0.5rem;
  color: #525d8f;
  font-weight: 900;
  letter-spacing: 1px;
  opacity: 0.5; /* Әдетте сәл көрініп тұрады */
  transition: 0.3s;
}

/* --- HOVER EFFECTS --- */
.close-x-btn:hover {
  background: rgba(82, 93, 143, 0.15);
  border-color: #fff;
  box-shadow: 0 0 25px rgba(82, 93, 143, 0.4);
  transform: scale(1.05);
}

.close-x-btn:hover .line {
  background: #fff;
  box-shadow: 0 0 10px #fff;
}

.close-x-btn:hover .x-icon {
  transform: rotate(90deg); /* 90 градусқа айналу */
}

.close-x-btn:hover .close-hint {
  opacity: 1;
  color: #fff;
  transform: translateY(-2px); /* Сәл жоғары көтеріледі */
}

/* Басқан кезде */
.close-x-btn:active {
  transform: scale(0.95);
}

@media (max-width: 900px) {
  .m-main-grid { grid-template-columns: 1fr; }
  .projects-grid { grid-template-columns: 1fr; }
  .modal-window.dashboard { padding: 30px; height: 95vh; overflow-y: auto; }
}


/* Карточкадағы Preview суреті */
.card-bg-overlay {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  opacity: 0.3; /* Мәтін көрінуі үшін күңгірт */
  transition: 0.5s ease;
}

.card-img-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
}

.p-card:hover .card-bg-overlay {
  opacity: 0.6;
  transform: scale(1.05);
}

.p-card:hover .card-img-preview {
  filter: grayscale(0%);
}

/* Модальдағы суреттер торы (1 үлкен + 3 кіші) */
.m-main-grid.with-images {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 20px;
}

.image-showcase {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.img-main {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border: 1px solid #222;
}

.img-thumbs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.img-thumbs img {
  width: 100%;
  height: 60px;
  object-fit: cover;
  border: 1px solid #111;
  transition: 0.3s;
}

.img-thumbs img:hover {
  border-color: #525d8f;
  transform: translateY(-3px);
}

/* Модальды терезенің өзі - padding-ті азайттық */
.modal-window.showcase {
  width: 100%;
  max-width: 1200px; /* Сәл кеңірек қылдық */
  max-height: 95vh;
  background: #050505;
  border: 1px solid #1a1a1a;
  padding: 20px; /* Ішкі бос орынды азайттық, сурет үлкею үшін */
  position: relative;
  overflow-y: auto;
  z-index: 100;
}

/* ЖАБУ БАТЫРМАСЫ - Көрінбей тұрса, осы стильді қолдан */
.close-x-btn {
  position: absolute; /* Терезеге бекіту */
  top: 15px;
  right: 15px;
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #525d8f;
  border-radius: 8px;
  cursor: pointer;
  z-index: 999; /* Ең жоғары қабат */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Слайдер блогы */
.slider-wrapper {
  width: 100%;
  padding: 0 !important; /* Бос орынды мүлдем алып тастадық */
  background: transparent;
  border: none;
  margin: 40px 0 20px 0; /* Жабу батырмасымен соқтығыспауы үшін */
}

/* Суреттер жолы */
.gallery-track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 0; /* Суреттер арасындағы бос орынды жойдық */
}

/* Слайд - Максималды үлкен ен */
.gallery-slide {
  flex: 0 0 100%;
  width: 100%;
  scroll-snap-align: center;
}

.gallery-slide img {
  width: 100%;
  height: auto;
  max-height: 70vh; /* Экран биіктігінің 70%-ын алады */
  object-fit: cover; /* СУРЕТТІ ТОЛЫҚ ЕНІНЕ ЖАЯДЫ (Кішкентай болмайды) */
  border-radius: 4px;
}

</style>
