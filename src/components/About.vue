<script setup>
const cards = [
  {
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />`,
    title: 'Rodowodowe szczenięta',
    text: 'Wszystkie nasze szczenięta posiadają pełną dokumentację rodowodową potwierdzoną przez Związek Kynologiczny w Polsce.'
  },
  {
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />`,
    title: 'Hodowla zarejestrowana w FCI',
    text: 'Jesteśmy oficjalnie zarejestrowaną hodowlą w Międzynarodowej Federacji Kynologicznej (FCI), co gwarantuje najwyższe standardy.'
  },
  {
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />`,
    title: 'Międzynarodowe standardy',
    text: 'Hodowla prowadzona zgodnie z międzynarodowymi standardami rasy Labrador Retriever, dbając o zdrowie i temperament.'
  }
]
</script>

<template>
  <section id="o-nas" class="section about">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Domowa hodowla labradorów</h2>
        <p class="section-subtitle">Wychowujemy z miłością, hodujemy z odpowiedzialnością</p>
      </div>
      
      <div class="about-grid">
        <div v-for="(card, index) in cards" :key="index" class="about-card">
          <div class="about-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-html="card.icon"></svg>
          </div>
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
