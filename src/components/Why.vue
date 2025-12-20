<script setup>
const cards = [
  {
    number: '01',
    title: 'Staranna socjalizacja',
    text: 'Od pierwszych dni życia nasze szczenięta mają kontakt z różnymi bodźcami, dźwiękami i ludźmi, co zapewnia im pewność siebie.'
  },
  {
    number: '02',
    title: 'Wczesna stymulacja neurologiczna',
    text: 'Stosujemy program Early Neurological Stimulation (ENS), który wspiera rozwój neurologiczny szczeniąt w pierwszych tygodniach życia.'
  },
  {
    number: '03',
    title: 'Domowe wychowanie',
    text: 'Nasze psy żyją z nami w domu, nie w kojcach. Dzięki temu są przyzwyczajone do życia w rodzinie i codziennych domowych sytuacji.'
  },
  {
    number: '04',
    title: 'Pasja i doświadczenie',
    text: 'Hodowla labradorów to nasza pasja. Lata doświadczenia pozwalają nam zapewnić najlepszą opiekę każdemu szczeniakowi.'
  }
]
</script>

<template>
  <section id="dlaczego-my" class="section why">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Dlaczego warto wybrać naszą hodowlę?</h2>
        <p class="section-subtitle">Każde szczenię jest dla nas wyjątkowe i traktowane jak członek rodziny</p>
      </div>
      
      <div class="why-grid">
        <div v-for="(card, index) in cards" :key="index" class="why-card">
          <div class="why-number">{{ card.number }}</div>
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
