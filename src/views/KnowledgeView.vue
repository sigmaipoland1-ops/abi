<template>
  <div class="knowledge-page">
    <div class="hero-small">
      <div class="container">
        <h1>Warto Wiedzieć</h1>
      </div>
    </div>

    <div class="container content-section">
      
      <div class="tabs">
        <button 
          :class="['tab-btn', { active: activeTab === 'breed' }]" 
          @click="activeTab = 'breed'"
        >
          Opis Rasy
        </button>
        <button 
          :class="['tab-btn', { active: activeTab === 'test' }]" 
          @click="activeTab = 'test'"
        >
          Czy to pies dla mnie? (TEST)
        </button>
        <button 
          :class="['tab-btn', { active: activeTab === 'home' }]" 
          @click="activeTab = 'home'"
        >
          W Nowym Domu
        </button>
      </div>

      <div class="tab-content">
        
        <!-- Breed Description -->
        <div v-if="activeTab === 'breed'" class="content-block">
          <h2>Labrador Retriever - Opis Rasy</h2>
          <p>
            Labrador retriever – rasa psów należąca do grupy psów aportujących, płochaczy i psów wodnych. 
            Nazwa rasy pochodzi od półwyspu Labrador w Kanadzie. W rzeczywistości rasa pochodzi z południa Nowej Fundlandii. 
            Nazywane były psami św. Jana.
          </p>
          
          <h3>Wygląd i wielkość</h3>
          <p>
            Labrador to pies średnio duży, silnie zbudowany, proporcjonalny. Ma szeroką czaszkę, 
            umięśnioną szyję, charakterystyczny „wydrowaty” ogon i krótką, gęstą sierść z podszerstkiem.
          </p>

          <h3>Charakter i temperament</h3>
          <p>
            Labrador jest przyjacielski, łagodny, inteligentny i chętny do współpracy. 
            Ma silny instynkt aportowania i potrzebę bliskości z człowiekiem. Źle znosi samotność. 
            To pies aktywny i żywiołowy.
          </p>

          <div class="pros-cons-grid">
            <div class="pros">
              <h4>Zalety Rasy</h4>
              <ul>
                <li>Bardzo przyjazny wobec ludzi i zwierząt</li>
                <li>Cierpliwy i łagodny wobec dzieci</li>
                <li>Inteligentny i chętny do nauki</li>
                <li>Świetny pies rodzinny i terapeutyczny</li>
                <li>Doskonały pływak i aporter</li>
              </ul>
            </div>
            <div class="cons">
              <h4>Wady Rasy</h4>
              <ul>
                <li>Silna potrzeba ruchu i zajęcia</li>
                <li>Skłonność do nadwagi i łakomstwa</li>
                <li>Wymaga regularnego treningu</li>
                <li>Intensywnie linieje</li>
                <li>Źle znosi samotność</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Test -->
        <div v-if="activeTab === 'test'" class="content-block">
          <h2>10 Pytań do przyszłego właściciela psa</h2>
          <p class="intro">
            Kupno psa to kwestia, którą należy dokładnie przemyśleć. Poniższe pytania pomogą w podjęciu odpowiedzialnej decyzji.
          </p>
          
          <ol class="test-questions">
            <li>
              <strong>Czy na pewno chcę mieć psa?</strong>
              <p>Pies to nie zabawka na chwilę. Jeśli to kaprys lub chęć dopełnienia wizerunku - zrezygnuj.</p>
            </li>
            <li>
              <strong>Czy ktoś w naszej rodzinie ma alergie?</strong>
              <p>Jeśli dziecko ma katar przy psie sąsiada - zakup psa to zły pomysł.</p>
            </li>
            <li>
              <strong>Czy wszyscy członkowie rodziny zgadzają się na posiadanie psa?</strong>
              <p>Pies musi być akceptowany przez wszystkich domowników.</p>
            </li>
            <li>
              <strong>Czy mogę go wychować?</strong>
              <p>Labrador wymaga konsekwencji. Niewychowany pies staje się uciążliwy.</p>
            </li>
            <li>
              <strong>Czy będę miał na to czas?</strong>
              <p>Pies żyje 10-15 lat. Czy masz czas na spacery, zabawę, opiekę przez tyle lat?</p>
            </li>
            <li>
              <strong>Kto z nim wyjdzie?</strong>
              <p>Spacer jest potrzebny codziennie, w deszczu, w mrozie, gdy jesteś zmęczony.</p>
            </li>
            <li>
              <strong>Jak wygląda sytuacja z mieszkaniem?</strong>
              <p>Czy masz warunki? Zgoda właściciela mieszkania? Sąsiedzi?</p>
            </li>
            <li>
              <strong>Dokąd z nim w wakacje?</strong>
              <p>Czy zabierzesz go ze sobą? Masz z kim zostawić?</p>
            </li>
            <li>
              <strong>Czy podołam finansowo?</strong>
              <p>Karma, weterynarz (szczepienia, choroby), akcesoria - to stałe koszty.</p>
            </li>
            <li>
              <strong>Czy będę mógł pozwolić psu być psem?</strong>
              <p>Nie uczłowieczaj psa na siłę. To zwierzę, które ma swoje naturalne potrzeby.</p>
            </li>
          </ol>
        </div>

        <!-- New Home -->
        <div v-if="activeTab === 'home'" class="content-block">
          <h2>W Nowym Domu</h2>
          <p>
            Pierwsze dni szczeniaka w nowym domu są kluczowe. Pamiętaj, że dla niego to ogromna zmiana - 
            został zabrany od matki i rodzeństwa.
          </p>
          
          <h3>Wyprawka</h3>
          <p>
            Przygotuj miski, legowisko, smycz, obrożę i karmę (najlepiej taką samą, jaką jadł w hodowli).
            Zabezpiecz mieszkanie - schowaj kable, buty, cenne przedmioty.
          </p>

          <h3>Pierwsza Noc</h3>
          <p>
            Może być trudna. Szczeniak może piszczeć z tęsknoty. Bądź przy nim, ale nie bierz do łóżka, 
            jeśli nie chcesz, by spał tam zawsze.
          </p>

          <h3>Nauka Czystości</h3>
          <p>
            Wyprowadzaj szczeniaka po każdym jedzeniu, spaniu i zabawie. Nagradzaj za załatwienie się na dworze.
            Bądź cierpliwy - wpadki będą się zdarzać.
          </p>
          
          <h3>Socjalizacja</h3>
          <p>
             Zapoznawaj szczeniaka z różnymi dźwiękami, ludźmi, powierzchniami. Ale rób to stopniowo, by go nie wystraszyć.
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('breed')
</script>

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

.tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.tab-btn {
  background: white;
  border: 1px solid #ddd;
  padding: 0.75rem 1.5rem;
  font-family: var(--font-heading);
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 50px;
}

.tab-btn:hover {
  background: #f0f0f0;
}

.tab-btn.active {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.content-block {
  animation: fadeIn 0.5s ease;
}

.content-block h2 {
  font-family: var(--font-heading);
  color: var(--color-text);
  margin-top: 0;
  border-bottom: 2px solid #eee;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

.content-block h3 {
  font-family: var(--font-heading);
  color: var(--color-primary);
  margin-top: 2rem;
}

.pros-cons-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

@media(min-width: 768px) {
  .pros-cons-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.pros h4, .cons h4 {
  font-family: var(--font-heading);
  text-align: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
}

.pros h4 {
  background-color: #d1e7dd;
  color: #0f5132;
}

.cons h4 {
  background-color: #f8d7da;
  color: #842029;
}

.pros ul, .cons ul {
  list-style: none;
  padding: 0;
}

.pros ul li, .cons ul li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.pros ul li::before {
  content: "✓";
  color: green;
  margin-right: 0.5rem;
  font-weight: bold;
}

.cons ul li::before {
  content: "✕";
  color: red;
  margin-right: 0.5rem;
  font-weight: bold;
}

.test-questions {
  padding-left: 1.5rem;
}

.test-questions li {
  margin-bottom: 1.5rem;
}

.test-questions strong {
  font-size: 1.1rem;
  color: var(--color-text);
}

.test-questions p {
  margin-top: 0.5rem;
  color: #555;
  font-style: italic;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
