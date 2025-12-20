<script setup>
const awards = [
  'Międzynarodowa Wystawa Psów Rasowych - Poznań',
  'Krajowa Wystawa Psów Rasowych - Gniezno',
  'Międzynarodowa Wystawa Psów Rasowych - Wrocław',
  'Ocena doskonała - Champion Polski'
]
</script>

<template>
  <section class="section awards">
    <div class="container">
      <div class="awards-content">
        <div class="awards-gallery">
          <div class="awards-image featured">
            <img src="/images/wystawa-poznan.png" alt="Wystawa Poznań - nagroda">
          </div>
          <div class="awards-image">
            <img src="/images/wystawa-gniezno.png" alt="Wystawa Gniezno - nagroda">
          </div>
          <div class="awards-image">
            <img src="/images/wroclaw.png" alt="Wystawa Wrocław - nagroda">
          </div>
        </div>
        
        <div class="awards-info">
          <h2>Wyróżnienia naszej suczki</h2>
          <p>Nasza suczka zdobyła liczne wyróżnienia na wystawach kynologicznych, potwierdzające wysoką jakość hodowli.</p>
          
          <ul class="awards-list">
            <li v-for="(award, index) in awards" :key="index">
              <span class="award-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>{{ award }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
