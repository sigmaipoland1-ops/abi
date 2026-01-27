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
          <li><RouterLink to="/" class="nav-link" active-class="active">Strona główna</RouterLink></li>
          <li><RouterLink to="/o-nas" class="nav-link" active-class="active">O nas</RouterLink></li>
          <li><RouterLink to="/nasze-psy" class="nav-link" active-class="active">Nasza Suczka</RouterLink></li>
          <li><RouterLink to="/szczenieta" class="nav-link" active-class="active">Szczenięta</RouterLink></li>
          <li><RouterLink to="/warto-wiedziec" class="nav-link" active-class="active">Warto wiedzieć</RouterLink></li>
          <li><RouterLink to="/kontakt" class="nav-link" active-class="active">Kontakt</RouterLink></li>
        </ul>
        
        <RouterLink to="/kontakt" class="btn btn-primary nav-cta">Skontaktuj się</RouterLink>
        
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
