<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container">
      <nav class="nav">
        <a href="/" class="logo">
          <img src="/images/logo.png" alt="Abiria - Hodowla Labradorów">
        </a>
        
        <ul class="nav-menu" :class="{ open: isMenuOpen }">
          <li><a href="/" class="nav-link active">Strona główna</a></li>
          <li><a href="#o-nas" class="nav-link">O nas</a></li>
          <li><a href="#dlaczego-my" class="nav-link">Dlaczego my</a></li>
          <li><a href="#kontakt" class="nav-link">Kontakt</a></li>
        </ul>
        
        <a href="#kontakt" class="btn btn-primary nav-cta">Skontaktuj się</a>
        
        <button 
          class="nav-toggle" 
          :aria-expanded="isMenuOpen"
          @click="toggleMenu"
        >
          <span class="hamburger"></span>
        </button>
      </nav>
    </div>
  </header>
</template>
