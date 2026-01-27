<template>
  <div class="about-page">

    
    <div class="container content-section">
      <div class="about-grid">
        <div class="about-image">
          <img src="/images/about/amaro-owner.jpg" alt="Hodowca z psem Amaro" />
        </div>
        <div class="about-text">
          <h2>Trochę o mnie</h2>
          <p>
            Miło mi zaprosić na stronę poświęconą domowej hodowli labradorów retriverów w kolorze żółtym (biszkoptowym).
          </p>
          <p>
            Moja przygoda z labradorami trwa już 15 lat. Prawie zawsze w moim życiu były psy: u dziadków była kochana MRÓWKA, u rodziców DINO i BOLO. Swoją miłość i przygodę z labradorami zaczęłam w 2011 r. gdy do mojej rodziny trafił piesek AMARO (pełne imię „Amaro na Spokojnej Fali”).
          </p>
          <p>
            AMARO po mamie odziedziczył między innymi pasję do pracy z dziećmi, co wykorzystaliśmy podczas zajęć w zakresie dogoaktywności. Odwiedzaliśmy systematycznie przez wiele lat żłobki i przedszkola oraz uczestniczyliśmy w piknikach i eventach dla dzieci. Przez wiele lat był także wolontariuszem w WOŚP.
          </p>
          <p>
            Poza tym był wyjątkowo pięknym psem wystawowym, co potwierdził tytuł CHAMPIONA POLSKI. Ale przede wszystkim i ponad wszystko był 100% CZŁONKIEM RODZINY – ZAWSZE RAZEM. Odejście od nas 11 lutego 2022 r. ukochanego psa było dla nas wielką tragedią.
          </p>
          <p>
            Dopiero w 2023 r. zdecydowałam się na kolejnego labradora. Wiedziałam, że jeżeli będzie to pies, to zawsze będzie porównywany do AMARO, dlatego zdecydowałam się na suczkę. Tak trafiła do nas 02.12.2023 r. ABI.
          </p>
        </div>
      </div>

      <div class="breeding-philosophy">
        <h2>O Hodowli "XXXX FCI"</h2>
        <p>
          Jeżeli planujecie Państwo zakup szczeniaka, warto sprawdzić hodowlę. Nasza hodowla jest zarejestrowana pod przydomkiem „XXXX FCI”, co można sprawdzić w bazie Związku Kynologicznego w Polsce.
        </p>
        <p>
          Naszym celem hodowlanym jest hodowanie labradorów o stabilnym, przyjaznym i inteligentnym usposobieniu, idealnych dla rodzin. Zapewniamy, że psy są zdrowe i długowieczne, z doskonałym eksterierem i temperamentem.
        </p>
        <p>
          Nasza hodowla nie jest projektem biznesowym. Domowa hodowla wg mnie oznacza, że suczka jest członkiem rodziny - wspólna praca, wspólny dom, wspólne wakacje i wycieczki, ale także obowiązki.
        </p>
        
        <h3>Jak chcemy to osiągnąć:</h3>
        <ul class="values-list">
          <li>
            <strong>Uroda (Eksterier)</strong>: ABI jest suczką wystawową o najwyższych ocenach i tytule CHAMPIONA POLSKI. Reproduktorzy również są psami wyjątkowej urody.
          </li>
          <li>
            <strong>Zdrowie</strong>: ABI ma komplet badań (dysplazja, genetyczne) potwierdzających idealne zdrowie.
          </li>
          <li>
            <strong>Mądrość</strong>: Stawiamy na psy mądre, pracowite, szybko uczące się, a przy tym pozbawione agresji.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>


.content-section {
  padding-top: 120px;
  padding-bottom: 4rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

@media (min-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
}

.about-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.about-text h2, .breeding-philosophy h2 {
  font-family: var(--font-heading);
  color: var(--color-text);
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

.about-text p, .breeding-philosophy p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.values-list {
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
}

.values-list li {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
}

.values-list li::before {
  content: "•";
  color: var(--color-primary);
  font-weight: bold;
  position: absolute;
  left: 0;
}

h3 {
  font-family: var(--font-heading);
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>
