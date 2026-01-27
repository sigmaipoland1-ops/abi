<script setup>
</script>

<template>
  <section class="hero">
    <div class="hero-bg">
      <img src="/images/hero-bg.jpg" alt="Labrador retriever ze szczeniętami">
    </div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          Domowa hodowla labradorów <span>Abiria FCI</span>
        </h1>
        <p class="hero-description">
          Twój przyszły przyjaciel rośnie w naszym domu. Wychowujemy z miłością, hodujemy z odpowiedzialnością.
        </p>
        <div class="hero-buttons">
          <RouterLink to="/szczenieta" class="btn btn-primary">
            Zyskaj członka rodziny
          </RouterLink>
          <RouterLink to="/o-nas" class="btn btn-secondary">
            Poznaj naszą historię
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
