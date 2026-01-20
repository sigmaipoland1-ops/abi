<template>
  <div class="dogs-page">
    <div class="hero-small">
      <div class="container">
        <h1>Nasze Psy</h1>
      </div>
    </div>

    <div class="container content-section">
      <!-- Abi Section -->
      <section id="abi" class="dog-section">
        <div class="dog-header">
          <h2>ABI - Nasza Duma</h2>
          <span class="subtitle">Suka Hodowlana, Champion Polski</span>
        </div>
        
        <div class="dog-grid">
          <div class="dog-gallery">
            <img src="/images/dogs/abi/show-1.jpg" alt="Abi na wystawie w Kaliszu" class="main-photo">
            <div class="thumbnails">
              <img src="/images/dogs/abi/show-2.jpg" alt="Abi portret" class="thumb">
            </div>
          </div>
          
          <div class="dog-info">
            <h3>O Abi</h3>
            <p>
              Przybyła do nas 02.12.2023 r. ABI jest suczką wystawową o najwyższych ocenach.
              Jest wyjątkowo mądrą, pracowitą i szybko uczącą się suczką, a przy tym temperamentną, 
              lubiącą dużo ruchu, nie lękliwą i całkowicie pozbawioną agresji. Nasza "córeczka".
            </p>
            <p>
              Są także małe minusy: jest łakoma i chrapie, ale dla nas jest ideałem. PRAWDZIWY LABRADOR.
            </p>

            <h3>Zdrowie (Badania)</h3>
            <ul class="health-list">
              <li><strong>Dysplazja Biodrowa (HD):</strong> A/A (Całkowicie wolna)</li>
              <li><strong>Dysplazja Łokciowa (ED):</strong> 0/0 (Całkowicie wolna)</li>
              <li><strong>STGD-PRA:</strong> N/N (Wolna)</li>
              <li><strong>EIC (Zapaść wysiłkowa):</strong> N/N (Wolna)</li>
              <li><strong>HNPK (Parakeratoza nosa):</strong> N/N (Wolna) - <em>gwarantowane po rodzicach</em></li>
              <li><strong>Profil DNA:</strong> Wykonany</li>
            </ul>
          </div>
        </div>
      </section>

      <hr class="divider" />

      <!-- Amaro Section -->
      <section id="amaro" class="dog-section">
        <div class="dog-header">
          <h2>AMARO - W Naszej Pamięci</h2>
          <span class="subtitle">Champion Polski, Reproduktor, Terapeuta</span>
        </div>

        <div class="dog-grid">
          <div class="dog-image">
             <!-- reusing the image from about page as it's the best one we have -->
            <img src="/images/about/amaro-owner.jpg" alt="Amaro" />
          </div>
          
          <div class="dog-info">
            <p>
              <strong>Amaro na Spokojnej Fali (2011 - 2022)</strong>
            </p>
            <p>
              Amaro towarzyszył nam przez 11 wspaniałych lat. Był psem "orkiestrą" - pięknym eksterierowo Championem Polski, 
              ale przede wszystkim psem pracującym w dogoterapii z dziećmi i wolontariuszem WOŚP.
            </p>
            <p>
              Po mamie odziedziczył pasję do pracy z dziećmi. Był sprawdzonym reproduktorem, dając liczne i zdrowe potomstwo.
              Odszedł od nas 11 lutego 2022 r., pozostawiając po sobie pustkę, którą dopiero Abi zaczęła wypełniać.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.hero-small {
  background-color: var(--color-primary);
  color: white;
  padding: 4rem 1rem 2rem;
  text-align: center;
  margin-bottom: 3rem;
}

.hero-small h1 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin: 0;
}

.content-section {
  padding-bottom: 4rem;
}

.dog-section {
  margin-bottom: 4rem;
}

.dog-header {
  text-align: center;
  margin-bottom: 2rem;
}

.dog-header h2 {
  font-family: var(--font-heading);
  color: var(--color-text);
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: var(--color-primary);
  font-weight: 500;
  font-size: 1.1rem;
}

.dog-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 768px) {
  .dog-grid {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}

.dog-gallery img, .dog-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.thumbnails {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.thumb {
  width: 80px;
  height: 80px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid transparent;
}

.dog-info h3 {
  font-family: var(--font-heading);
  color: var(--color-text);
  margin-top: 0; 
  margin-bottom: 1rem;
}

.health-list {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid var(--color-primary);
}

.health-list li {
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.divider {
  border: 0;
  height: 1px;
  background: #eee;
  margin: 4rem 0;
}
</style>
