<script setup>
import ContactForm from './ContactForm.vue'
</script>

<template>
  <section id="kontakt" class="section contact">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Skontaktuj się z nami</h2>
        <p class="section-subtitle">
          Masz pytania o naszą hodowlę lub planujesz adopcję szczeniaka? Napisz do nas!
        </p>
      </div>
      
      <div class="contact-wrapper">
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Consolidating styles for the wrapper mostly, form styles are now in ContactForm */
.contact {
    background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-bg-dark) 100%);
    color: var(--color-white);
    position: relative;
    overflow: hidden;
}

.contact::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 60%;
    height: 200%;
    background: radial-gradient(ellipse, rgba(196, 149, 106, 0.1) 0%, transparent 70%);
    pointer-events: none;
}

.contact .section-title {
    color: var(--color-white);
}

.contact .section-title::after {
    background: linear-gradient(90deg, var(--color-primary-light), var(--color-warm));
}

.contact .section-subtitle {
    color: rgba(255, 255, 255, 0.75);
}

.contact-wrapper {
    max-width: 560px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}
</style>
