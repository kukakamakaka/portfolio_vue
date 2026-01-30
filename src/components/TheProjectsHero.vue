<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const images = [
  new URL('../assets/projects/p1.png', import.meta.url).href,
  new URL('../assets/projects/p2.png', import.meta.url).href,
  new URL('../assets/projects/p3.png', import.meta.url).href,
  new URL('../assets/projects/p4.png', import.meta.url).href,
  new URL('../assets/projects/p5.png', import.meta.url).href,
  new URL('../assets/projects/p6.png', import.meta.url).href,
  new URL('../assets/projects/p7.png', import.meta.url).href,
  new URL('../assets/projects/p8.png', import.meta.url).href,
  new URL('../assets/projects/p9.png', import.meta.url).href,
];

const containerRef = ref<HTMLElement | null>(null);
const textRef = ref<HTMLElement | null>(null);
const imgRefs = ref<HTMLElement[]>([]);

let mousePos = { x: 0, y: 0 };
let lastMousePos = { x: 0, y: 0 };
let cacheMousePos = { x: 0, y: 0 };
let imgPosition = 0;
let zIndexVal = 1;

const threshold = 110;
const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

const handleMouseMove = (e: MouseEvent) => {
  if (!containerRef.value) return;
  const rect = containerRef.value.getBoundingClientRect();
  mousePos.x = e.clientX - rect.left;
  mousePos.y = e.clientY - rect.top;

  // Параллакс текста (двигается слегка против мыши)
  if (textRef.value) {
    const moveX = (mousePos.x - rect.width / 2) * 0.03;
    const moveY = (mousePos.y - rect.height / 2) * 0.03;
    gsap.to(textRef.value, { x: -moveX, y: -moveY, duration: 1.2, ease: 'power2.out' });
  }
};

const showNextImage = () => {
  zIndexVal++;
  imgPosition = (imgPosition + 1) % images.length;

  const el = imgRefs.value[imgPosition];
  if (!el) return;

  const dx = mousePos.x - cacheMousePos.x;
  const dy = mousePos.y - cacheMousePos.y;

  // Вычисляем угол наклона в зависимости от скорости и направления
  const rotation = gsap.utils.clamp(-15, 15, dx * 0.2);

  gsap.killTweensOf(el);

  const tl = gsap.timeline();

  tl.fromTo(el, {
    opacity: 1,
    scale: 0.9,
    filter: 'blur(10px)', // Влетает из расфокуса
    zIndex: zIndexVal,
    x: cacheMousePos.x - el.offsetWidth / 2,
    y: cacheMousePos.y - el.offsetHeight / 2,
    rotationZ: rotation * 0.5
  }, {
    duration: 0.8,
    ease: 'power3.out',
    scale: 1,
    filter: 'blur(0px)',
    x: mousePos.x - el.offsetWidth / 2,
    y: mousePos.y - el.offsetHeight / 2,
    rotationZ: rotation
  }, 0)
      .to(el, {
        duration: 0.6,
        opacity: 0,
        scale: 0.8,
        filter: 'blur(20px)',
        ease: 'power2.inOut'
      }, 1.3) // Время жизни фото
      .to(el, {
        duration: 2,
        ease: 'expo.out',
        x: `+=${dx * 1.3}`,
        y: `+=${dy * 1.3}`,
      }, 0.1);
};

const render = () => {
  const distance = Math.hypot(mousePos.x - lastMousePos.x, mousePos.y - lastMousePos.y);
  cacheMousePos.x = lerp(cacheMousePos.x, mousePos.x, 0.1);
  cacheMousePos.y = lerp(cacheMousePos.y, mousePos.y, 0.1);

  if (distance > threshold) {
    showNextImage();
    lastMousePos = { ...mousePos };
  }
  requestAnimationFrame(render);
};

onMounted(() => render());
</script>

<template>
  <section class="projects-hero" ref="containerRef" @mousemove="handleMouseMove">
    <div class="noise"></div>

    <div class="hero-text-container" ref="textRef">
      <h2 class="main-title">
        <span class="row">SELECTED</span>
        <span class="row outline">WORKS</span>
      </h2>
      <p class="hint">VOL 2026 // PORTFOLIO</p>
    </div>

    <div class="images-layer">
      <div
          v-for="(img, i) in images"
          :key="i"
          ref="imgRefs"
          class="trail-img"
      >
        <div class="img-inner" :style="{ backgroundImage: `url(${img})` }"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-hero {
  height: 100vh;
  background: #020202;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-text-container {
  position: relative;
  z-index: 1;
  text-align: center;
  pointer-events: none;
  user-select: none;
  display: flex;
  flex-direction: column;
}

.main-title {
  font-size: clamp(5rem, 18vw, 15rem);
  font-weight: 900;
  line-height: 0.95;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: -0.04em;
}

.row.outline {
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.25);
}

.hint {
  margin-top: 2rem;
  letter-spacing: 0.6em;
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.7rem;
}

.images-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 10;
}

.trail-img {
  width: clamp(320px, 32vw, 520px);
  aspect-ratio: 16 / 9;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  will-change: transform, filter;
  border-radius: 4px; /* Оставил легкое закругление */
  overflow: hidden;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.9);
  /* Самый важный момент — фото без белого налета */
}

.img-inner {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transform: scale(1.05); /* Легкий кроп, чтобы избежать краев при анимации */
}

.noise {
  position: absolute;
  inset: 0;
  background: url("https://grainy-gradients.vercel.app/noise.svg");
  opacity: 0.05;
  pointer-events: none;
  z-index: 2;
}
</style>
