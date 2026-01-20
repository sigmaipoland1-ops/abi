<template>
  <div class="puppies-page">
    <div class="hero-small">
      <div class="container">
        <h1>Szczenięta</h1>
      </div>
    </div>

    <div class="container content-section">
      
      <!-- Current Litter -->
      <section id="current-litter" class="litter-section">
        <div class="section-header">
          <span class="tag">Obecny Miot</span>
          <h2>Miot "New" - Urodzone 23.10.2025</h2>
        </div>

        <div class="litter-details">
          <div class="parents-info">
            <h3>Rodzice</h3>
            <p><strong>Matka:</strong> ABI (XXXX FCI)</p>
            <p><strong>Ojciec:</strong> BAZYL (Dolbia EVER SO CLEVER)</p>
            <p class="description">
              Młoda mama spisała się wzorowo otaczając maluchy od pierwszych chwil życia miłością.
              Szczeniaczki będą gotowe do zmiany domu od około 20 lutego 2026 r.
            </p>
          </div>

          <div class="puppy-list">
            <h3>Lista Szczeniąt</h3>
            <div class="puppy-grid">
              <div class="puppy-card female">
                <h4>Suczki</h4>
                <ul>
                  <li>New Alaska</li>
                  <li>New Florida</li>
                  <li>New Nevada</li>
                  <li>New Virginia</li>
                  <li>New Oklahoma</li>
                  <li>New Montana</li>
                  <li>New Nebraska</li>
                  <li>New Alabama</li>
                </ul>
              </div>
              <div class="puppy-card male">
                <h4>Pieski</h4>
                <ul>
                  <li>New Kansas</li>
                  <li>New Texas</li>
                  <li>New Idaho</li>
                  <li>New Kentucky</li>
                  <li>New Oregon</li>
                  <li>New Colorado</li>
                  <li>New Michigan</li>
                  <li>New Ohio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr class="divider" />

      <!-- Planned Litter -->
      <section id="planned-litter" class="litter-section">
        <div class="section-header">
           <span class="tag secondary">Plany Hodowlane</span>
           <h2>Zapowiedź Miotu</h2>
        </div>
        <div class="litter-details">
          <p>
            Oczekujemy biszkoptowych szczeniaczków Labrador Retriever (ZKwP/FCI).
          </p>
          <p>
            Planowany termin: <strong>Styczeń 2026</strong>.
          </p>
          <p>
            Rodzice są wolni od dysplazji biodrowej i łokciowej (HD-A, ED-0/0) oraz przebadani genetycznie.
            Gwarantujemy, że żaden ze szczeniaczków nie zachoruje na typowe choroby genetyczne rasy (PRCD-PRA, EIC, HNPK).
          </p>
          <div class="cta-box">
             <h3>Zapraszamy do Rezerwacji</h3>
             <p>
               Przed decyzją prosimy o zapoznanie się z informacjami w dziale 
               <RouterLink to="/knowledge">Warto Wiedzieć</RouterLink>.
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

.litter-section {
  margin-bottom: 4rem;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.tag {
  display: inline-block;
  background-color: var(--color-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.tag.secondary {
  background-color: #6c757d;
}

.section-header h2 {
  font-family: var(--font-heading);
  font-size: 2rem;
  color: var(--color-text);
  margin: 0;
}

.litter-details {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  padding: 2rem;
}

.parents-info {
  margin-bottom: 2rem;
}

.parents-info h3, .puppy-list h3 {
  font-family: var(--font-heading);
  color: var(--color-primary);
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.puppy-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .puppy-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.puppy-card {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
}

.puppy-card h4 {
  margin-top: 0;
  color: var(--color-text);
}

.puppy-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.puppy-card ul li {
  padding: 0.5rem 0;
  border-bottom: 1px dashed #e0e0e0;
}

.puppy-card ul li:last-child {
  border-bottom: none;
}

.divider {
  border: 0;
  height: 1px;
  background: #eee;
  margin: 4rem 0;
}

.cta-box {
  background-color: #effbf5;
  border: 1px solid #c3e6cb;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 2rem;
}

.cta-box h3 {
  color: #155724;
  margin-top: 0;
}

.cta-box a {
  color: #155724;
  font-weight: bold;
  text-decoration: underline;
}
</style>
