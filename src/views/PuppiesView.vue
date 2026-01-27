<script setup>
import ContactForm from '../components/ContactForm.vue'
</script>

<template>
  <div class="puppies-page">

    <div class="container content-section">
      
      <!-- Announcement Section -->
      <section class="announcement-section">
        <h1 class="announcement-title">ZAPOWIEDŹ MIOTU</h1>
        <p class="announcement-subtitle">Spodziewamy się szczeniąt w Styczniu 2026!</p>
        
        <div class="parents-container">
          <!-- Mother -->
          <div class="parent-card female">
            <div class="parent-image">
               <img src="/images/dogs/abi/show-1.jpg" alt="Matka Abi" />
            </div>
            <div class="parent-info">
              <h3>Matka</h3>
              <h2 class="dog-name">ABI</h2>
              <p class="kennel-name">XXXX FCI</p>
              <ul class="achievements">
                <li>Suka Hodowlana</li>
                <li>Champion Polski</li>
                <li>HDA / ED 0/0</li>
              </ul>
            </div>
          </div>

          <!-- Divider -->
          <div class="parents-divider">
            <span class="x-mark">X</span>
          </div>

          <!-- Father -->
          <div class="parent-card male">
             <div class="parent-image">
               <!-- Using Amaro image as placeholder for Bazyl as discussed -->
               <img src="/images/about/amaro-owner.jpg" alt="Ojciec Bazyl" />
            </div>
             <div class="parent-info">
              <h3>Ojciec</h3>
              <h2 class="dog-name">BAZYL</h2>
              <p class="kennel-name">Dolbia EVER SO CLEVER</p>
              <ul class="achievements">
                <li>Reproduktor</li>
                <li>Champion Polski</li>
                <li>HDA / ED 0/0</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="litter-info">
          <p>
            Oczekujemy szczeniąt w kolorze biszkoptowym (żółtym). 
            Rodzice są przebadani genetycznie, co gwarantuje zdrowie maluchów (wolne od PRA, EIC, HNPK).
          </p>
        </div>
      </section>

      <!-- Integrated Contact Section -->
      <section class="integrated-contact">
        <div class="contact-grid">
          <!-- Left: Contact Details -->
          <div class="contact-details">
            <h2>Skontaktuj się z nami</h2>
            <p class="contact-intro">
              Jesteśmy tu, aby odpowiedzieć na Twoje pytania, porozmawiać o rasie i pomóc Ci w wyborze idealnego członka rodziny. 
            </p>
            
            <div class="contact-methods">
              <div class="method-item">
                <div class="icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div class="method-info">
                  <span class="label">Zadzwoń do nas</span>
                  <a href="tel:+48123456789" class="value">+48 123 456 789</a>
                </div>
              </div>

              <div class="method-item">
                <div class="icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div class="method-info">
                  <span class="label">Napisz maila</span>
                  <a href="mailto:kontakt@abiria.pl" class="value">kontakt@abiria.pl</a>
                </div>
              </div>

              <div class="method-item">
                <div class="icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div class="method-info">
                  <span class="label">Lokalizacja</span>
                  <span class="value">Poznań, Polska</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Form -->
          <div class="contact-form-wrapper">
             <ContactForm />
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped>
.content-section {
  padding-top: 120px;
  padding-bottom: 4rem;
}

.announcement-section {
  text-align: center;
  margin-bottom: 6rem;
}

.announcement-title {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: var(--color-primary-dark);
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.announcement-subtitle {
  font-size: 1.5rem;
  color: var(--color-text-light);
  margin-bottom: 4rem;
  font-weight: 300;
}

.parents-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  margin-bottom: 4rem;
  position: relative;
}

@media (min-width: 900px) {
  .parents-container {
    grid-template-columns: 1fr auto 1fr;
    gap: 1rem;
  }
}

.parent-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.parent-image {
  width: 100%;
  max-width: 400px;
  height: 400px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  margin-bottom: 2rem;
  border: 4px solid white;
}

.parent-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.parent-card:hover .parent-image img {
  transform: scale(1.05);
}

.parent-info h3 {
  color: var(--color-primary);
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

.dog-name {
  font-size: 2.5rem;
  font-family: var(--font-heading);
  color: var(--color-text);
  margin: 0 0 0.5rem 0;
}

.kennel-name {
  font-style: italic;
  color: var(--color-text-light);
  margin-bottom: 1.5rem;
}

.achievements {
  list-style: none;
  padding: 0;
  color: var(--color-secondary);
}

.achievements li {
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.parents-divider {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
}

.x-mark {
  font-family: var(--font-heading);
  font-size: 5rem;
  color: var(--color-primary-light);
  font-weight: bold;
  opacity: 0.5;
}

.litter-info {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--color-bg-warm);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-soft);
}

.litter-info p {
  font-size: 1.2rem;
  color: var(--color-text);
  margin: 0;
}

/* Integrated Contact Styles */
.integrated-contact {
  background: #fff;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  border: 1px solid var(--color-beige);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.contact-details {
  padding: 3rem;
  background-color: var(--color-bg-warm);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-details h2 {
  font-family: var(--font-heading);
  font-size: 2rem;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.contact-intro {
  color: var(--color-text-light);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.method-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  box-shadow: var(--shadow-soft);
}

.method-info {
  display: flex;
  flex-direction: column;
}

.method-info .label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-text-muted);
  font-weight: 600;
}

.method-info .value {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  color: var(--color-primary-dark);
  font-weight: 500;
  text-decoration: none;
}

.contact-form-wrapper {
  padding: 3rem;
  background-color: white;
}
</style>
