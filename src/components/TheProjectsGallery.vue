<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
// 1. РЕСМИ useI18n ЕМЕС, ӨЗІҢНІҢ locale ОБЪЕКТІҢДІ ИМПОРТТА:
import { locale } from '../i18n';

const selectedProject = ref<number | null>(null);
const projectSlider = ref<HTMLElement | null>(null);

const openProject = (id: number) => {
  selectedProject.value = id;
  document.body.style.overflow = 'hidden';
};

const closeProject = () => {
  selectedProject.value = null;
  document.body.style.overflow = 'auto';
};

const handleEsc = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeProject();
};

onMounted(() => window.addEventListener('keydown', handleEsc));
onUnmounted(() => {
  window.removeEventListener('keydown', handleEsc);
  document.body.style.overflow = 'auto';
});

// GSAP Анимациялары
const onEnter = (el: Element) => {
  const tl = gsap.timeline();
  tl.fromTo(el, { opacity: 0 }, { duration: 0.3, opacity: 1 })
      .fromTo('.modal-window',
          { y: 40, opacity: 0, scale: 0.95 },
          { duration: 0.5, y: 0, opacity: 1, scale: 1, ease: 'expo.out' }
      )
      .from('.m-block',
          { opacity: 0, y: 20, stagger: 0.05, duration: 0.4 },
          "-=0.2"
      );
};

const onLeave = (el: Element, done: () => void) => {
  gsap.to(el, {
    duration: 0.3,
    opacity: 0,
    scale: 0.9,
    onComplete: done
  });
};

const scrollSlider = (direction: 'next' | 'prev') => {
  if (projectSlider.value) {
    const scrollAmount = projectSlider.value.clientWidth;
    projectSlider.value.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  }
};
</script>

<template>
  <section id="projects" class="projects-wrapper">
    <div class="header-v4">
      <div class="header-info">
        <span class="prefix">{{ locale.t('projects.archive') }}</span>
        <h2 class="main-title">
          {{ locale.t('projects.title1') }}<br>
          <span class="gradient-text">{{ locale.t('projects.title2') }}</span>
        </h2>
      </div>
    </div>

    <div class="projects-grid">
      <div class="p-card active" @click="openProject(1)">
        <div class="commercial-badge">COMMERCIAL</div>
        <div class="card-content">
          <div class="card-top">
            <div class="status-indicator">
              <span class="pulse"></span>
              {{ locale.t('projects.production') }}
            </div>
            <span class="index">01</span>
          </div>
          <div class="card-body">
            <span class="category">{{ locale.t('projects.items.1.category') }}</span>
            <h3 class="project-name">{{ locale.t('projects.items.1.title') }}</h3>
          </div>
          <div class="card-footer">
            <div class="tech-stack">
              {{ locale.t('projects.items.1.tech').join(' • ') }}
            </div>
            <div class="explore-btn">{{ locale.t('projects.viewProject') }} <span>→</span></div>
          </div>
        </div>
      </div>

      <div class="p-card active" @click="openProject(2)">
        <div class="card-bg-overlay">
          <img src="../assets/projects/project1/main.jpg" class="card-img-preview" alt="QazaqGaz Preview">
        </div>
        <div class="card-content">
          <div class="card-top">
            <div class="status-indicator">
              <span class="pulse orange"></span>
              {{ locale.t('projects.items.2.status') || 'DEPLOYED' }}
            </div>
            <span class="index">02</span>
          </div>
          <div class="card-body">
            <span class="category">{{ locale.t('projects.items.2.category') }}</span>
            <h3 class="project-name">{{ locale.t('projects.items.2.title') }}</h3>
          </div>
          <div class="card-footer">
            <div class="tech-stack">
              {{ locale.t('projects.items.2.tech').join(' • ') }}
            </div>
            <div class="explore-btn">
              {{ locale.t('projects.viewProject') }} <span>→</span>
            </div>
          </div>
        </div>
      </div>

      <div class="p-card active" @click="openProject(3)">
        <div class="card-bg-overlay">
          <img src="../assets/projects/project2/main.jpg" class="card-img-preview" alt="Ironn Dynasty">
        </div>
        <div class="card-content">
          <div class="card-top">
            <div class="status-indicator">
              <span class="pulse green"></span>
              {{ locale.t('projects.items.3.status') }}
            </div>
            <span class="index">03</span>
          </div>
          <div class="card-body">
            <span class="category">{{ locale.t('projects.items.3.category') }}</span>
            <h3 class="project-name">{{ locale.t('projects.items.3.title') }}</h3>
          </div>
          <div class="card-footer">
            <div class="tech-stack">
              {{ locale.t('projects.items.3.tech').join(' • ') }}
            </div>
            <div class="explore-btn">{{ locale.t('projects.viewProject') }} <span>→</span></div>
          </div>
        </div>
      </div>

      <div class="p-card active" @click="openProject(4)">
        <div class="project-badge in-progress">
          {{ locale.t('projects.items.4.badge_status') }}
        </div>

        <div class="card-content">
          <div class="card-top">
            <div class="status-indicator">
              <span class="pulse orange"></span>
              {{ locale.t('projects.items.4.status') }}
            </div>
            <span class="index">04</span>
          </div>
          <div class="card-body">
            <span class="category">{{ locale.t('projects.items.4.category') }}</span>
            <h3 class="project-name">{{ locale.t('projects.items.4.title') }}</h3>
          </div>
          <div class="card-footer">
            <div class="tech-stack">
              {{ locale.t('projects.items.4.tech').slice(0, 3).join(' • ') }}
            </div>
            <div class="explore-btn">{{ locale.t('projects.view_details') }} <span>→</span></div>
          </div>
        </div>
      </div>

      <div class="p-card active" @click="openProject(5)">

        <div class="card-bg-overlay">
          <img src="../assets/projects/project3/main.jpg" class="card-img-preview" alt="Aika AI">
        </div>

        <div class="card-content">
          <div class="card-top">
            <div class="status-indicator"><span class="pulse"></span> AI_READY</div>
            <span class="index">05</span>
          </div>
          <div class="card-body">
            <span class="category">HEALTH_TECH // AI</span>
            <h3 class="project-name">AI DETECTOR</h3>
          </div>
          <div class="card-footer">
            <div class="tech-stack">FLASK • OPENAI • OLLAMA</div>
            <div class="explore-btn">VIEW_CASE <span>→</span></div>
          </div>
        </div>
      </div>

      <div class="p-card active" @click="openProject(6)">

        <div class="card-bg-overlay">
          <img src="../assets/projects/project5/main.jpg" class="card-img-preview" alt="Viva Cine Preview">
        </div>

        <div class="card-content">
          <div class="commercial-badge">MY_FIRST</div>

          <div class="card-top">
            <div class="status-indicator"><span class="pulse"></span> ONLINE</div>
            <span class="index">06</span>
          </div>
          <div class="card-body">
            <span class="category">ENTERTAINMENT // VOD</span>
            <h3 class="project-name">VIVA CINE</h3>
          </div>
          <div class="card-footer">
            <div class="tech-stack">FLASK • SQLALCHEMY • JINJA2</div>
            <div class="explore-btn">LAUNCH_APP <span>→</span></div>
          </div>
        </div>
      </div>

      <div class="p-card active" @click="openProject(7)">

        <div class="card-bg-overlay">
          <img src="../assets/projects/project6/main.jpg" class="card-img-preview" alt="Car Gallery Preview">
        </div>

        <div class="card-content">
          <div class="card-top">
            <div class="status-indicator"><span class="pulse"></span> STABLE</div>
            <span class="index">07</span>
          </div>
          <div class="card-body">
            <span class="category">AUTO_SHOWCASE // CRUD</span>
            <h3 class="project-name">CAR GALLERY</h3>
          </div>
          <div class="card-footer">
            <div class="tech-stack">FASTAPI • SQLALCHEMY • UVICORN</div>
            <div class="explore-btn">OPEN_API <span>→</span></div>
          </div>
        </div>
      </div>

      <div class="p-card active" @click="openProject(8)">

        <div class="card-bg-overlay">
          <img src="../assets/projects/project4/main.jpg" class="card-img-preview" alt="Restaurant App Preview">
        </div>

        <div class="card-content">
          <div class="card-top">
            <div class="status-indicator"><span class="pulse"></span> PRODUCTION</div>
            <span class="index">08</span>
          </div>
          <div class="card-body">
            <span class="category">FOOD_TECH // CMS</span>
            <h3 class="project-name">RESTAURANT APP</h3>
          </div>
          <div class="card-footer">
            <div class="tech-stack">FLASK • JINJA2 • SQLITE</div>
            <div class="explore-btn">VIEW_SITE <span>→</span></div>
          </div>
        </div>
      </div>

      <div class="p-card active" @click="openProject(9)">
        <div class="project-badge commercial">CORPORATE_WEB</div>

        <div class="card-bg-overlay">
          <img src="../assets/projects/project7/main.jpg" class="card-img-preview" alt="SKT-Orken Preview">
        </div>

        <div class="card-content">
          <div class="card-top">
            <div class="status-indicator"><span class="pulse"></span> LIVE</div>
            <span class="index">09</span>
          </div>
          <div class="card-body">
            <span class="category">BUSINESS // INDUSTRY</span>
            <h3 class="project-name">SKT-ORKEN</h3>
          </div>
          <div class="card-footer">
            <div class="tech-stack">FLASK • PYTHON 3.12 • CSS3</div>
            <div class="explore-btn">VISIT_SITE <span>→</span></div>
          </div>
        </div>
      </div>

    </div>

    <Teleport to="body">
      <Transition name="modal">
        <div v-if="selectedProject" class="modal-backdrop" @click.self="closeProject">

          <div v-if="selectedProject === 1" class="modal-window dashboard">
            <button class="close-x-btn" @click="closeProject">
              <div class="x-icon"><span class="line l1"></span><span class="line l2"></span></div>
              <span class="close-hint">ESC</span>
            </button>
            <div class="m-container">
              <div class="m-top">
                <div class="m-brand">
                  <span class="m-badge">{{ locale.t('projects.items.1.badge') }}</span>
                  <h2 class="m-title">{{ locale.t('projects.items.1.title') }}</h2>
                </div>
                <p class="m-tagline">{{ locale.t('projects.items.1.tagline') }}</p>
              </div>
              <div class="m-main-grid">
                <div class="m-block">
                  <label>{{ locale.t('projects.tech_stack') }}</label>
                  <div class="stack-tags">
                    <span v-for="t in locale.t('projects.items.1.tech')" :key="t">{{ t }}</span>
                  </div>
                </div>

                <div class="m-block">
                  <label>{{ locale.t('projects.logic_flow') }}</label>
                  <div class="logic-flow">
                    <div class="node">TG</div><div class="arrow">→</div><div class="node">API</div>
                  </div>
                </div>

                <div class="m-block features">
                  <label>{{ locale.t('projects.features') }}</label>
                  <ul class="compact-list">
                    <li v-for="f in locale.t('projects.items.1.features')" :key="f">{{ f }}</li>
                  </ul>
                </div>

                <div class="m-block impact">
                  <label>{{ locale.t('projects.items.1.impact_label') }}</label>
                  <div class="stat">{{ locale.t('projects.items.1.impact_stat') }}</div>
                </div>
              </div>
              <div class="m-actions">
                <a href="https://t.me/ns_drive_bot" target="_blank" class="btn-p">
                  {{ locale.t('projects.open_bot') }}
                </a>
                <a href="https://github.com/kukakamakaka/autoshkola-bot" target="_blank" class="btn-s">
                  {{ locale.t('projects.source') }}
                </a>
              </div>

            </div>
          </div>

          <div v-else-if="selectedProject === 2" class="modal-window showcase">
            <button class="close-x-btn" @click="closeProject" aria-label="Close">
              <div class="x-icon"><span class="line l1"></span><span class="line l2"></span></div>
              <span class="close-hint">ESC</span>
            </button>

            <div class="m-container">
              <div class="m-top">
                <div class="m-brand">
                  <span class="m-badge">{{ locale.t('projects.items.2.badge') }}</span>
                  <h2 class="m-title">{{ locale.t('projects.items.2.title') }}</h2>
                </div>
                <p class="m-tagline">{{ locale.t('projects.items.2.tagline') }}</p>
              </div>

              <div class="m-block slider-wrapper">
                <div class="gallery-viewport">
                  <button class="nav-slide prev" @click="scrollSlider('prev')">‹</button>
                  <button class="nav-slide next" @click="scrollSlider('next')">›</button>
                  <div class="gallery-track" ref="projectSlider">
                    <div class="gallery-slide"><img src="../assets/projects/project1/main.jpg" alt="Dashboard"></div>
                    <div class="gallery-slide"><img src="../assets/projects/project1/2.jpg" alt="Stats"></div>
                  </div>
                </div>
              </div>

              <div class="m-details-row extended">
                <div class="m-block description">
                  <label>{{ locale.t('projects.items.2.overview_label') }}</label>
                  <p class="long-text">{{ locale.t('projects.items.2.description') }}</p>
                  <ul class="compact-list">
                    <li v-for="f in locale.t('projects.items.2.features')" :key="f">{{ f }}</li>
                  </ul>
                </div>

                <div class="m-side-info">
                  <div class="m-block stack">
                    <label>{{ locale.t('projects.items.2.tech_label') }}</label>
                    <div class="stack-tags">
            <span v-for="(t, index) in locale.t('projects.items.2.tech')"
                  :key="t"
                  :class="{ 'highlight-tag': index === 0 }">
              {{ t }}
            </span>
                    </div>
                  </div>

                  <div class="m-block impact">
                    <label>{{ locale.t('projects.items.2.impact_label') }}</label>
                    <div class="impact-content">
                      <div class="stat">{{ locale.t('projects.items.2.impact_stat') }}</div>
                      <p v-html="locale.t('projects.items.2.impact_desc')"></p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="m-actions">
                <a href="https://github.com/kukakamakaka/qazaqgaz-test" target="_blank" class="btn-s full-width">
                  {{ locale.t('projects.items.2.action_btn') }} <span>→</span>
                </a>
              </div>
            </div>
          </div>

          <div v-else-if="selectedProject === 3" class="modal-window showcase">
            <button class="close-x-btn" @click="closeProject" aria-label="Close">
              <div class="x-icon"><span class="line l1"></span><span class="line l2"></span></div>
              <span class="close-hint">ESC</span>
            </button>

            <div class="m-container">
              <div class="m-top">
                <div class="m-brand">
                  <span class="m-badge">{{ locale.t('projects.items.3.badge') }}</span>
                  <h2 class="m-title">{{ locale.t('projects.items.3.title') }}</h2>
                </div>
                <p class="m-tagline">{{ locale.t('projects.items.3.tagline') }}</p>
              </div>

              <div class="m-block slider-wrapper">
                <div class="gallery-viewport">
                  <button class="nav-slide prev" @click="scrollSlider('prev')">‹</button>
                  <button class="nav-slide next" @click="scrollSlider('next')">›</button>

                  <div class="gallery-track" ref="projectSlider">
                    <div class="gallery-slide"><img src="../assets/projects/project2/main.jpg" alt="Ironn Dashboard"></div>
                    <div class="gallery-slide"><img src="../assets/projects/project2/1.jpg" alt="Trainer Profiles"></div>
                    <div class="gallery-slide"><img src="../assets/projects/project2/2.jpg" alt="Progress Tracker"></div>
                    <div class="gallery-slide"><img src="../assets/projects/project2/3.jpg" alt="Plans"></div>
                  </div>
                </div>
              </div>

              <div class="m-details-row extended">
                <div class="m-block description">
                  <label>{{ locale.t('projects.items.3.arch_label') }}</label>
                  <p class="long-text">{{ locale.t('projects.items.3.description') }}</p>
                  <ul class="compact-list">
                    <li v-for="f in locale.t('projects.items.3.features')" :key="f">{{ f }}</li>
                  </ul>
                </div>

                <div class="m-side-info">
                  <div class="m-block stack">
                    <label>{{ locale.t('projects.items.3.tech_label') }}</label>
                    <div class="stack-tags">
            <span v-for="(t, index) in locale.t('projects.items.3.tech')"
                  :key="t"
                  :class="{ 'highlight-tag': index === 0 }">
              {{ t }}
            </span>
                    </div>
                  </div>

                  <div class="m-block impact">
                    <label>{{ locale.t('projects.items.3.demo_label') }}</label>
                    <div class="impact-content">
                      <a href="https://onege.pythonanywhere.com" target="_blank" class="live-link">
                        onege.pythonanywhere.com 🔗
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="m-actions">
                <a href="https://github.com/kukakamakaka/IronnDynasty" target="_blank" class="btn-s full-width">
                  {{ locale.t('projects.items.3.action_btn') }} <span>→</span>
                </a>
              </div>
            </div>
          </div>

          <div v-else-if="selectedProject === 4" class="modal-window dashboard">
            <button class="close-x-btn" @click="closeProject">
              <div class="x-icon"><span class="line l1"></span><span class="line l2"></span></div>
              <span class="close-hint">ESC</span>
            </button>

            <div class="m-container">
              <div class="m-top">
                <div class="m-brand">
                  <span class="m-badge">{{ locale.t('projects.items.4.badge') }}</span>
                  <h2 class="m-title">{{ locale.t('projects.items.4.title') }}</h2>
                </div>
                <p class="m-tagline">{{ locale.t('projects.items.4.tagline') }}</p>
              </div>

              <div class="m-main-grid">
                <div class="m-block">
                  <label>{{ locale.t('projects.items.4.tech_label') }}</label>
                  <div class="stack-tags">
          <span v-for="(t, index) in locale.t('projects.items.4.tech')"
                :key="t"
                :class="{ 'highlight-tag': index === 0 }">
            {{ t }}
          </span>
                  </div>
                </div>

                <div class="m-block">
                  <label>{{ locale.t('projects.items.4.pipeline_label') }}</label>
                  <div class="logic-flow">
                    <div class="node">TELEMETRY</div>
                    <div class="arrow">→</div>
                    <div class="node">INGEST</div>
                    <div class="arrow">→</div>
                    <div class="node">ANALYSIS</div>
                  </div>
                </div>

                <div class="m-block features">
                  <label>{{ locale.t('projects.items.4.features_label') }}</label>
                  <ul class="compact-list">
                    <li v-for="f in locale.t('projects.items.4.features')" :key="f">
                      • {{ f }}
                    </li>
                  </ul>
                </div>

                <div class="m-block impact">
                  <label>{{ locale.t('projects.items.4.impact_label') }}</label>
                  <div class="impact-content">
                    <div class="stat">{{ locale.t('projects.items.4.impact_stat') }}</div>
                    <p v-html="locale.t('projects.items.4.impact_desc')"></p>
                  </div>
                </div>
              </div>

              <div class="m-actions">
                <a href="https://github.com/kukakamakaka/soc-anomaly-app" target="_blank" class="btn-s full-width">
                  {{ locale.t('projects.items.4.action_btn') }} <span>→</span>
                </a>
              </div>
            </div>
          </div>

          <div v-else-if="selectedProject === 5" class="modal-window showcase">
            <button class="close-x-btn" @click="closeProject" aria-label="Close">
              <div class="x-icon"><span class="line l1"></span><span class="line l2"></span></div>
              <span class="close-hint">ESC</span>
            </button>

            <div class="m-container">
              <div class="m-top">
                <div class="m-brand">
                  <span class="m-badge">AI_MEDICAL_ASSISTANT // DEMO_PROJECT</span>
                  <h2 class="m-title">AI HEALTH DETECTOR </h2>
                </div>
                <p class="m-tagline">Персональный ИИ-аналитик симптомов и состояния здоровья</p>
              </div>

              <div class="m-block slider-wrapper">
                <div class="gallery-viewport">
                  <button class="nav-slide prev" @click="scrollSlider('prev')">‹</button>
                  <button class="nav-slide next" @click="scrollSlider('next')">›</button>

                  <div class="gallery-track" ref="projectSlider">
                    <div class="gallery-slide"><img src="../assets/projects/project3/main.jpg" alt="AI Chat Interface"></div>
                    <div class="gallery-slide"><img src="../assets/projects/project3/1.jpg" alt="Health Dashboard"></div>
                    <div class="gallery-slide"><img src="../assets/projects/project3/2.jpg" alt="Symptom History"></div>
                    <div class="gallery-slide"><img src="../assets/projects/project3/3.jpg" alt="Photo Analysis"></div>
                  </div>
                </div>
              </div> <div class="m-details-row extended">
              <div class="m-block description">
                <label>INTELLIGENT_ENGINE</label>
                <p class="long-text">
                  Уникальность системы заключается в <b>Multi-Model Support</b>: приложение может переключаться между облачными GPT-4o и локальными моделями через Ollama.
                </p>
                <ul class="compact-list">
                  <li>Photo Analysis: Интеллектуальный анализ снимков с конвертацией HEIC.</li>
                  <li>Privacy First: Возможность работы полностью оффлайн (Mistral/SmolLM).</li>
                  <li>Smart Dashboard: Расчет ИМТ и персонализация советов.</li>
                </ul>
              </div>

              <div class="m-side-info">
                <div class="m-block stack">
                  <label>AI_TECH_STACK</label>
                  <div class="stack-tags">
                    <span class="highlight-tag">Flask</span><span class="highlight-tag">OpenAI API</span>
                    <span>Ollama</span><span>HuggingFace</span><span>SQLAlchemy</span>
                  </div>
                </div>

                <div class="m-block impact">
                  <label>PROJECT_PURPOSE</label>
                  <div class="impact-content">
                    <div class="stat">AI</div>
                    <p>Демонстрация интеграции LLM в реальные веб-интерфейсы с фокусом на <b>Data Privacy</b>.</p>
                  </div>
                </div>
              </div>
            </div>

              <div class="m-block structure-view" style="border-left: 2px solid #e74c3c;">
                <label style="color: #e74c3c;"> MEDICAL_DISCLAIMER</label>
                <p style="font-size: 0.75rem; color: #888;">Проект носит образовательный характер. ИИ-рекомендации не являются медицинским диагнозом.</p>
              </div>

              <div class="m-actions">
                <a href="https://github.com/kukakamakaka/ai-health" target="_blank" class="btn-s full-width">
                  EXPLORE_AI_LOGIC <span>→</span>
                </a>
              </div>
            </div> </div>

          <div v-else-if="selectedProject === 6" class="modal-window showcase">
            <button class="close-x-btn" @click="closeProject" aria-label="Close">
              <div class="x-icon"><span class="line l1"></span><span class="line l2"></span></div>
              <span class="close-hint">ESC</span>
            </button>

            <div class="m-container">
              <div class="m-top">
                <div class="m-brand">
                  <span class="m-badge">STREAMING_SERVICE // ENTERTAINMENT_HUB</span>
                  <h2 class="m-title">VIVA CINE</h2>
                </div>
                <p class="m-tagline">Полнофункциональная стриминговая платформа и онлайн-кинотеатр</p>
              </div>

              <div class="m-block slider-wrapper">
                <div class="gallery-viewport">
                  <button class="nav-slide prev" @click="scrollSlider('prev')">‹</button>
                  <button class="nav-slide next" @click="scrollSlider('next')">›</button>

                  <div class="gallery-track" ref="projectSlider">
                    <div class="gallery-slide"><img src="../assets/projects/project5/main.jpg" alt="Home Page Library"></div>
                    <div class="gallery-slide"><img src="../assets/projects/project5/1.jpg" alt="Movie Details View"></div>
                    <div class="gallery-slide"><img src="../assets/projects/project5/2.jpg" alt="Community Chat Interface"></div>
                    <div class="gallery-slide"><img src="../assets/projects/project5/3.jpg" alt="User History & Profile"></div>
                  </div>
                </div>
              </div> <div class="m-details-row extended">
              <div class="m-block description">
                <label>PLATFORM_CAPABILITIES</label>
                <p class="long-text">
                  Масштабный проект, включающий более <b>20+ страниц</b> уникальных шаблонов. Система объединяет онлайн-просмотр, социальное взаимодействие через Community Chat.
                </p>
                <ul class="compact-list">
                  <li>Movie Engine: Динамический каталог с фильтрацией по жанрам.</li>
                  <li>Social: Интерактивный чат на JSON-хранилище.</li>
                  <li>Profile: Кастомизация данных пользователя и аватаров.</li>
                </ul>
              </div>

              <div class="m-side-info">
                <div class="m-block stack">
                  <label>STREAMING_STACK</label>
                  <div class="stack-tags">
                    <span class="highlight-tag">Flask</span><span>SQLAlchemy</span>
                    <span>Jinja2</span><span>Python</span><span>JSON Logic</span>
                  </div>
                </div>

                <div class="m-block impact">
                  <label>SYSTEM_SCALE</label>
                  <div class="impact-content">
                    <div class="stat">20+</div>
                    <p>Страниц динамических шаблонов. Адаптивность под <b>Cinema Mode</b>.</p>
                  </div>
                </div>
              </div>
            </div>

              <div class="m-actions">
                <a href="https://github.com/kukakamakaka/viva-cine" target="_blank" class="btn-s full-width">
                  EXPLORE_FRONTEND_STRUCTURE <span>→</span>
                </a>
              </div>
            </div> </div>

          <div v-else-if="selectedProject === 7" class="modal-window showcase">
            <button class="close-x-btn" @click="closeProject" aria-label="Close">
              <div class="x-icon"><span class="line l1"></span><span class="line l2"></span></div>
              <span class="close-hint">ESC</span>
            </button>

            <div class="m-container">
              <div class="m-top">
                <div class="m-brand">
                  <span class="m-badge">HIGH_PERFORMANCE_API // CRUD_SYSTEM</span>
                  <h2 class="m-title">CAR GALLERY</h2>
                </div>
                <p class="m-tagline">Стильная галерея автомобилей на базе FastAPI и SQLAlchemy</p>
              </div>

              <div class="m-block slider-wrapper">
                <div class="gallery-viewport">
                  <button class="nav-slide prev" @click="scrollSlider('prev')">‹</button>
                  <button class="nav-slide next" @click="scrollSlider('next')">›</button>

                  <div class="gallery-track" ref="projectSlider">
                    <div class="gallery-slide"><img src="../assets/projects/project6/main.jpg" alt="Car Showcase UI"></div>
                    <div class="gallery-slide"><img src="../assets/projects/project6/1.jpg" alt="Swagger API Docs"></div>
                    <div class="gallery-slide"><img src="../assets/projects/project6/2.jpg" alt="Database Schema"></div>
                    <div class="gallery-slide"><img src="../assets/projects/project6/3.jpg" alt="Admin Dashboard"></div>
                  </div>
                </div>
              </div> <div class="m-details-row extended">
              <div class="m-block description">
                <label>BACKEND_ARCHITECTURE</label>
                <p class="long-text">
                  Проект демонстрирует реализацию полноценного <b>RESTful API</b>. Использование FastAPI обеспечивает высокую производительность.
                </p>
                <ul class="compact-list">
                  <li>Auto-Documentation: Полная поддержка Swagger UI и ReDoc.</li>
                  <li>Routing Logic: Четкое разделение бизнес-логики на модули.</li>
                  <li>CRUD Cycle: Реализован полный цикл управления контентом.</li>
                </ul>
              </div>

              <div class="m-side-info">
                <div class="m-block stack">
                  <label>API_TECH_STACK</label>
                  <div class="stack-tags">
                    <span class="highlight-tag">FastAPI</span><span class="highlight-tag">Uvicorn</span>
                    <span>SQLAlchemy</span><span>Jinja2</span><span>SQLite</span>
                  </div>
                </div>

                <div class="m-block impact">
                  <label>DEVELOPER_TOOLS</label>
                  <div class="impact-content">
                    <div class="stat">V.2</div>
                    <p>Разделение на <b>Routers</b> для масштабируемости API структуры.</p>
                  </div>
                </div>
              </div>
            </div>

              <div class="m-actions">
                <a href="https://github.com/kukakamakaka/cargallery" target="_blank" class="btn-s full-width">
                  VIEW_API_STRUCTURE <span>→</span>
                </a>
              </div>
            </div> </div>

          <div v-else-if="selectedProject === 8" class="modal-window showcase">
            <button class="close-x-btn" @click="closeProject" aria-label="Close">
              <div class="x-icon"><span class="line l1"></span><span class="line l2"></span></div>
              <span class="close-hint">ESC</span>
            </button>

            <div class="m-container">
              <div class="m-top">
                <div class="m-brand">
                  <span class="m-badge">HORECA_SOLUTION // VISUAL_CMS</span>
                  <h2 class="m-title">RESTAURANT WEB APP</h2>
                </div>
                <p class="m-tagline">Элегантная платформа для ресторанов с интерактивным меню и галереей</p>
              </div>

              <div class="m-block slider-wrapper">
                <div class="gallery-viewport">
                  <button class="nav-slide prev" @click="scrollSlider('prev')">‹</button>
                  <button class="nav-slide next" @click="scrollSlider('next')">›</button>

                  <div class="gallery-track" ref="projectSlider">
                    <div class="gallery-slide"><img src="../assets/projects/project4/main.jpg" alt="Main Landing Page"></div>
                    <div class="gallery-slide"><img src="../assets/projects/project4/1.jpg" alt="Interactive Menu View"></div>
                    <div class="gallery-slide"><img src="../assets/projects/project4/2.jpg" alt="Dish Gallery"></div>
                    <div class="gallery-slide"><img src="../assets/projects/project4/3.jpg" alt="PDF Menu Integration"></div>
                  </div>
                </div>
              </div> <div class="m-details-row extended">
              <div class="m-block description">
                <label>USER_EXPERIENCE</label>
                <p class="long-text">
                  Проект ориентирован на максимальную визуализацию бренда. Реализовано интерактивное меню с динамической подгрузкой блюд и цен.
                </p>
                <ul class="compact-list">
                  <li>Interactive Menu: Удобная навигация по категориям блюд.</li>
                  <li>Media Management: Оптимизированная галерея интерьера и кухни.</li>
                  <li>Scalability: Легкое добавление новых позиций через database.py.</li>
                </ul>
              </div>

              <div class="m-side-info">
                <div class="m-block stack">
                  <label>RESTO_STACK</label>
                  <div class="stack-tags">
                    <span class="highlight-tag">Flask</span><span>Jinja2</span>
                    <span>SQLite</span><span>Python</span><span>PDF_Integration</span>
                  </div>
                </div>

                <div class="m-block impact">
                  <label>FRONTEND_FLOW</label>
                  <div class="impact-content">
                    <div class="stat">UI</div>
                    <p>Чистый и современный дизайн с упором на <b>Conversion Rate</b> и эстетику.</p>
                  </div>
                </div>
              </div>
            </div>

              <div class="m-actions">
                <a href="https://github.com/kukakamakaka/restaurant" target="_blank" class="btn-s full-width">
                  EXPLORE_RESTAURANT_LOGIC <span>→</span>
                </a>
              </div>
            </div> </div>

          <div v-else-if="selectedProject === 9" class="modal-window showcase">
            <button class="close-x-btn" @click="closeProject" aria-label="Close">
              <div class="x-icon"><span class="line l1"></span><span class="line l2"></span></div>
              <span class="close-hint">ESC</span>
            </button>

            <div class="m-container">
              <div class="m-top">
                <div class="m-brand">
                  <span class="m-badge">CORPORATE_IDENTITY // BUSINESS_WEB</span>
                  <h2 class="m-title">SKT-ORKEN OFFICIAL</h2>
                </div>
                <p class="m-tagline">Профессиональный корпоративный сайт на базе Flask для промышленного сектора</p>
              </div>

              <div class="m-block slider-wrapper">
                <div class="gallery-viewport">
                  <button class="nav-slide prev" @click="scrollSlider('prev')">‹</button>
                  <button class="nav-slide next" @click="scrollSlider('next')">›</button>

                  <div class="gallery-track" ref="projectSlider">
                    <div class="gallery-slide"><img src="../assets/projects/project7/main.jpg" alt="Corporate Home Page"></div>
                    <div class="gallery-slide"><img src="../assets/projects/project7/1.jpg" alt="Services Section"></div>
                    <div class="gallery-slide"><img src="../assets/projects/project7/2.jpg" alt="Responsive Mobile View"></div>
                    <div class="gallery-slide"><img src="../assets/projects/project7/3.jpg" alt="Contact & Location Map"></div>
                  </div>
                </div>
              </div> <div class="m-details-row extended">
              <div class="m-block description">
                <label>BUSINESS_SOLUTION</label>
                <p class="long-text">
                  Разработка официального представительства компании SKT-Orken. Основной упор сделан на чистоту кода и строгий корпоративный стиль.
                </p>
                <ul class="compact-list">
                  <li>Custom Routing: Настройка маршрутизации через Flask.</li>
                  <li>Asset Management: Оптимизация статических ресурсов (CSS/JS).</li>
                  <li>Production Ready: Настройка конфигурации и окружения для деплоя.</li>
                </ul>
              </div>

              <div class="m-side-info">
                <div class="m-block stack">
                  <label>CORP_STACK</label>
                  <div class="stack-tags">
                    <span class="highlight-tag">Python 3.12</span><span class="highlight-tag">Flask</span>
                    <span>HTML5/CSS3</span><span>JavaScript</span><span>Virtualenv</span>
                  </div>
                </div>

                <div class="m-block impact">
                  <label>PROJECT_FOCUS</label>
                  <div class="impact-content">
                    <div class="stat">UX</div>
                    <p>Акцент на информативность и удобную навигацию для B2B сегмента.</p>
                  </div>
                </div>
              </div>
            </div>

              <div class="m-actions">
                <a href="https://github.com/kukakamakaka/skt-orken-site" target="_blank" class="btn-s full-width">
                  VIEW_CORPORATE_CODE <span>→</span>
                </a>
              </div>
            </div> </div>

        </div>
      </Transition>
    </Teleport>
  </section>
</template>
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
  overflow: hidden;

  box-shadow: 0 0 10px rgba(82, 93, 143, 0.5);
  animation: badge-glow 3s infinite ease-in-out;
}

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


@keyframes shimmer {
  0% { left: -100%; }
  20% { left: 100%; }
  100% { left: 100%; }
}

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
.m-title {
  font-family: 'Unbounded';
  font-size: 2.8rem;
  font-weight: 900;
  margin: 10px 0;
  display: table;
  width: fit-content;
  background: linear-gradient(
      120deg,
      #fff 0%,
      #525d8f 50%,
      #fff 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: titleGradientFlow 4s linear infinite;
  filter: drop-shadow(0 0 8px rgba(82, 93, 143, 0.2));
}

@keyframes titleGradientFlow {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}

@media (max-width: 768px) {
  .m-title {
    font-size: 1.8rem;
    line-height: 1.2;
    margin: 5px 0 15px 0;
  }
}
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

/* ESC */
.close-hint {
  font-family: 'Unbounded', sans-serif;
  font-size: 0.5rem;
  color: #525d8f;
  font-weight: 900;
  letter-spacing: 1px;
  opacity: 0.5;
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
  transform: rotate(90deg); /* 90 градус */
}

.close-x-btn:hover .close-hint {
  opacity: 1;
  color: #fff;
  transform: translateY(-2px);
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


/* PREVIEW PHOTO */
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


.m-main-grid.with-images {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 20px;
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


.modal-window.showcase {
  width: 100%;
  max-width: 1200px;
  max-height: 95vh;
  background: #050505;
  border: 1px solid #1a1a1a;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  z-index: 100;
}

/* КНОПКА ЗАКРЫТИЯ */
.close-x-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #525d8f;
  border-radius: 8px;
  cursor: pointer;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* БЛОК СЛАЙДЕРОВ */
.slider-wrapper {
  width: 100%;
  padding: 0 !important;
  background: transparent;
  border: none;
  margin: 40px 0 20px 0;
}


.gallery-track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 0;
}


.gallery-slide {
  flex: 0 0 100%;
  width: 100%;
  scroll-snap-align: center;
}

.gallery-slide img {
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: cover;
  border-radius: 4px;
}

/* ROUND NAVIGATION BUTTONS */
.nav-slide {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(82, 93, 143, 0.4);
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

.nav-slide:hover {
  background: #525d8f;
  border-color: #fff;
  box-shadow: 0 0 20px rgba(82, 93, 143, 0.5);
}

.nav-slide.prev { left: 20px; }
.nav-slide.next { right: 20px; }

/* EXTENDED INFO GRID */
.m-details-row.extended {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 20px;
}

.m-side-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.long-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #ccc;
  margin-bottom: 20px;
}

.compact-list {
  list-style: none;
  padding: 0;
}

.compact-list li {
  font-size: 0.85rem;
  color: #888;
  margin-bottom: 10px;
  border-left: 2px solid #525d8f;
  padding-left: 15px;
}

.highlight-tag {
  background: #525d8f !important;
  color: #fff !important;
  font-weight: 800;
}

/* Mobile Fix */
@media (max-width: 900px) {
  .m-details-row.extended { grid-template-columns: 1fr; }
  .nav-slide { width: 45px; height: 45px; font-size: 1.5rem; }
}
/* Live Demo Link Style */
.live-link {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: #525d8f;
  text-decoration: none;
  font-weight: 700;
  border-bottom: 1px dashed #525d8f;
  transition: 0.3s;
}

.live-link:hover {
  color: #fff;
  border-bottom-color: #fff;
}

/* Status Colors */
.pulse.green {
  background: #2ecc71;
  box-shadow: 0 0 10px #2ecc71;
}
/* --- UNIVERSAL PROJECT BADGE (STEEL GRAY STYLE) --- */
.project-badge {
  position: absolute;
  top: 15px;
  right: -35px;
  font-size: 0.6rem;
  font-weight: 900;
  padding: 5px 40px;
  transform: rotate(45deg);
  z-index: 5;
  letter-spacing: 1px;
  overflow: hidden;
  text-transform: uppercase;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);


  background: #1a1a1a;
  color: #888;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

/* (Silver Shimmer) */
.project-badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.1), /* Өте нәзік жылтыр */
      transparent
  );
  animation: shimmer 5s infinite linear;
}

.project-badge.commercial {
  background: #525d8f;
  color: #fff;
  animation: badge-glow-blue 3s infinite ease-in-out;
}

.project-badge.in-progress {
  background: #1a1a1a;
  color: #777;
  border: 1px solid #333;
  animation: badge-glow-gray 4s infinite ease-in-out;
}


@keyframes badge-glow-blue {
  0%, 100% { box-shadow: 0 0 10px rgba(82, 93, 143, 0.3); }
  50% { box-shadow: 0 0 20px rgba(82, 93, 143, 0.6); }
}


@keyframes badge-glow-gray {
  0%, 100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.05);
    border-color: #333;
  }
  50% {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
    border-color: #444;
    color: #999;
  }
}

@keyframes shimmer {
  0% { left: -100%; }
  15% { left: 100%; }
  100% { left: 100%; }
}

/* --- HOVER EFFECTS --- */
.p-card:hover .project-badge.in-progress {
  background: #888;
  color: #000;
  border-color: #fff;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.2);
}

.p-card:hover .project-badge.commercial {
  background: #fff;
  color: #525d8f;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.4);
}

/* --- MOBILE ADAPTIVE OPTIMIZATION --- */
@media (max-width: 768px) {

  .projects-wrapper {
    padding: 60px 15px;
  }

  .main-title {
    font-size: 2.2rem;
    line-height: 1.1;
  }


  .projects-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .p-card {
    height: 320px;
  }

  .card-content {
    padding: 25px;
  }

  .project-name {
    font-size: 1.4rem;
  }


  .modal-backdrop {
    padding: 10px;
  }

  .modal-window.dashboard,
  .modal-window.showcase {
    padding: 20px;
    height: 92vh;
    display: flex;
    flex-direction: column;
  }

  .m-title {
    font-size: 1.6rem;
    line-height: 1.2;
  }


  .gallery-slide img {
    max-height: 40vh;
  }

  .nav-slide {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .nav-slide.prev { left: 10px; }
  .nav-slide.next { right: 10px; }


  .m-main-grid,
  .m-details-row.extended {
    grid-template-columns: 1fr;
    gap: 15px;
  }


  .stat {
    font-size: 2.2rem;
  }

  .impact-content {
    gap: 10px;
  }


  .m-actions {
    flex-direction: column;
    gap: 8px;
  }

  .btn-p, .btn-s {
    padding: 15px;
    width: 100%;
  }


  .close-x-btn {
    top: 10px;
    right: 10px;
    width: 45px;
    height: 45px;
  }

  .close-hint {
    display: none;
  }
}
</style>
