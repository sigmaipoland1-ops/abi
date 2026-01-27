<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)
const selectedImageIndex = ref(0) // Use index tracking

const galleryImages = [
  { src: '/images/dogs/abi/show-1.jpg', alt: 'Abi na wystawie w Kaliszu' },
  { src: '/images/dogs/abi/show-2.jpg', alt: 'Abi portret' },
  { src: '/images/dogs/abi/exhibitions/kalisz-1.jpg', alt: 'Wystawa Kalisz 1' },
  { src: '/images/dogs/abi/exhibitions/kalisz-2.jpg', alt: 'Wystawa Kalisz 2' },
  { src: '/images/dogs/abi/exhibitions/gniezno-1.jpg', alt: 'Wystawa Gniezno 1' },
  { src: '/images/dogs/abi/exhibitions/gniezno-2.jpg', alt: 'Wystawa Gniezno 2' },
  { src: '/images/dogs/abi/exhibitions/wroclaw-1.jpg', alt: 'Wystawa Wrocław 1' },
  { src: '/images/dogs/abi/exhibitions/wroclaw-2.jpg', alt: 'Wystawa Wrocław 2' },
  { src: '/images/dogs/abi/exhibitions/poznan-1.jpg', alt: 'Wystawa Poznań' }
]

const openModal = (index) => {
  selectedImageIndex.value = index
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', handleKeydown)
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = 'auto'
  window.removeEventListener('keydown', handleKeydown)
}

const nextImage = () => {
  selectedImageIndex.value = (selectedImageIndex.value + 1) % galleryImages.length
}

const prevImage = () => {
  selectedImageIndex.value = (selectedImageIndex.value - 1 + galleryImages.length) % galleryImages.length
}

const handleKeydown = (e) => {
  if (!isModalOpen.value) return
  
  if (e.key === 'ArrowRight') {
    nextImage()
  } else if (e.key === 'ArrowLeft') {
    prevImage()
  } else if (e.key === 'Escape') {
    closeModal()
  }
}
</script>

<template>
  <div class="dogs-page">
    <!-- Lightbox Modal -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">&times;</button>
        <button class="modal-prev" @click="prevImage">&lsaquo;</button>
        <img :src="galleryImages[selectedImageIndex].src" :alt="galleryImages[selectedImageIndex].alt" class="modal-image">
        <button class="modal-next" @click="nextImage">&rsaquo;</button>
      </div>
    </div>


    <div class="container content-section">
      <!-- Abi Section -->
      <section id="abi" class="dog-section">
        <div class="dog-header">
          <span class="subtitle">Suka Hodowlana, Champion Polski</span>
          <h2>ABI - Nasza Duma</h2>
        </div>
        
        <div class="dog-hero">
           <!-- Main Featured Gallery (Awards Style) -->
          <div class="dog-hero-gallery">
            <div class="hero-image featured">
              <img src="/images/dogs/abi/show-1.jpg" alt="Abi - Portret Główny" @click="openModal(0)">
            </div>
            <div class="hero-image">
               <img src="/images/dogs/abi/show-2.jpg" alt="Abi - Portret" @click="openModal(1)">
            </div>
             <div class="hero-image">
               <img src="/images/dogs/abi/exhibitions/kalisz-1.jpg" alt="Abi - Wystawa" @click="openModal(2)">
            </div>
          </div>
          
          <!-- Bio & Health -->
          <div class="dog-content">
            <div class="bio-card">
               <h3>O Abi</h3>
               <p>
                Przybyła do nas 02.12.2023 r. ABI jest suczką wystawową o najwyższych ocenach.
                Jest wyjątkowo mądrą, pracowitą i szybko uczącą się suczką, a przy tym temperamentną, 
                lubiącą dużo ruchu, nie lękliwą i całkowicie pozbawioną agresji. Nasza "córeczka".
              </p>
              <p>
                Są także małe minusy: jest łakoma i chrapie, ale dla nas jest ideałem. <strong>PRAWDZIWY LABRADOR.</strong>
              </p>
            </div>


          </div>
        </div>


        <!-- Full Width Health Section -->
        <div class="health-section-full">
            <h3 class="section-title-center">Zdrowie i Badania</h3>
            <div class="health-grid-detailed">
              
              <div class="health-card-detailed">
                <div class="health-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18.6 9.6c1.2-1.2 1.2-3.1 0-4.3s-3.1-1.2-4.3 0l-9.3 9.3c-1.2 1.2-1.2 3.1 0 4.3s3.1 1.2 4.3 0l9.3-9.3Z"/><path d="M14.35 12.55 11.5 15.4"/><path d="M5.36 12.57c-1.23-.42-2.33-.26-3.05.46-.92.91-.73 2.65.42 3.8l.06.06c1.15 1.15 2.89 1.34 3.8.42.72-.72.88-1.82.46-3.05"/><path d="M11.43 18.64c-.42 1.23-.26 2.33.46 3.05.91.92 2.65.73 3.8-.42l.06-.06c1.15-1.15 1.34-2.89.42-3.8-.72-.72-1.82-.88-3.05-.46"/></svg>
                </div>
                <h4>Stawy i Kościec</h4>
                <ul class="health-details">
                   <li>
                    <span class="test-name">HD (Dysplazja Biodrowa)</span>
                    <span class="test-result">A/A</span>
                    <span class="test-desc">Stawy biodrowe idealne, wolne od dysplazji.</span>
                  </li>
                  <li>
                    <span class="test-name">ED (Dysplazja Łokciowa)</span>
                    <span class="test-result">0/0</span>
                    <span class="test-desc">Stawy łokciowe idealne, wolne od dysplazji.</span>
                  </li>
                   <li>
                    <span class="test-name">DS2 (Nieproporcjonalna karłowatość)</span>
                    <span class="test-result">N/N</span>
                    <span class="test-desc">Wolna - prawidłowy rozwój kośćca.</span>
                  </li>
                </ul>
              </div>

               <div class="health-card-detailed">
                <div class="health-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h4>Oczy i Wzrok</h4>
                <ul class="health-details">
                   <li>
                    <span class="test-name">prcd-PRA (Postępujący Zanik Siatkówki)</span>
                    <span class="test-result">N/N</span>
                    <span class="test-desc">Wolna - nie zachoruje ani nie przekaże wadliwego genu.</span>
                  </li>
                  <li>
                    <span class="test-name">STGD-PRA (Choroba Stargardta)</span>
                    <span class="test-result">N/N</span>
                    <span class="test-desc">Wolna od genetycznej choroby plamki żółtej.</span>
                  </li>
                  <li>
                    <span class="test-name">OSD (Dysplazja Siatkówki)</span>
                    <span class="test-result">N/N</span>
                    <span class="test-desc">Wolna od wrodzonych wad siatkówki.</span>
                  </li>
                </ul>
              </div>

               <div class="health-card-detailed">
                <div class="health-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6"/><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"/><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"/><path d="M17 17l-5-5"/><path d="M12 12l-5-5"/></svg>
                </div>
                <h4>Ogólne i Metaboliczne</h4>
                <ul class="health-details">
                   <li>
                    <span class="test-name">EIC (Zapaść Wysiłkowa)</span>
                    <span class="test-result">N/N</span>
                    <span class="test-desc">Wolna - bezpieczna przy intensywnym wysiłku.</span>
                  </li>
                  <li>
                    <span class="test-name">HNPK (Parakeratoza Nosa)</span>
                    <span class="test-result">N/N (po rodzicach)</span>
                    <span class="test-desc">Wolna - brak problemów z rogowaceniem naskórka nosa.</span>
                  </li>
                   <li>
                    <span class="test-name">CNM (Dziedziczna Miopatia)</span>
                    <span class="test-result">N/N</span>
                    <span class="test-desc">Wolna od chorób zaniku mięśni.</span>
                  </li>
                   <li class="highlight">
                    <span class="test-name">Profil DNA</span>
                    <span class="test-result">Wykonany</span>
                    <span class="test-desc">Potwierdzona tożsamość genetyczna (ZKwP).</span>
                  </li>
                </ul>
              </div>

            </div>
        </div>

        <!-- Full Width Content -->
        <div class="full-width-section">
            <h3 class="section-title-center">Osiągnięcia Wystawowe</h3>
            <div class="exhibitions-table-wrapper">
              <table class="exhibitions-table">
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Wystawa</th>
                    <th>Ranga</th>
                    <th>Sędzia</th>
                    <th>Klasa</th>
                    <th>Wynik</th>
                  </tr>
                </thead>
                <tbody>
                   <tr>
                    <td>10.08.2025</td>
                    <td>48 Wystawa Psów Rasowych w Kaliszu</td>
                    <td>Krajowa</td>
                    <td>Piotr Król</td>
                    <td>Pośrednia</td>
                    <td><strong>2 miejsce</strong>, Srebrny Medal, Ocena Doskonała</td>
                  </tr>
                   <tr>
                    <td>13.09.2025</td>
                    <td>III Wystawa Psów Rasowych w Gnieźnie</td>
                    <td>Krajowa</td>
                    <td>Agnieszka Wojtala</td>
                    <td>Pośrednia</td>
                    <td><strong>CVC, BOB, BOG III</strong>, Ocena Doskonała</td>
                  </tr>
                  <tr>
                    <td>13.09.2025</td>
                    <td>II Królewska Wystawa Psów Rasowych w Gnieźnie</td>
                    <td>Krajowa</td>
                    <td>Joanna Dąbrowska</td>
                    <td>Pośrednia</td>
                    <td><strong>CVC, BOB</strong>, Ocena Doskonała</td>
                  </tr>
                  <tr>
                    <td>27.09.2025</td>
                    <td>XXXIII MWPR Wrocław</td>
                    <td>Międzynarodowa</td>
                    <td>Katarzyna Szutkiewicz</td>
                    <td>Pośrednia</td>
                    <td><strong>CVC</strong>, Ocena Doskonała</td>
                  </tr>
                   <tr>
                    <td>27.09.2025</td>
                    <td>XXXIV MWPR Wrocław</td>
                    <td>Międzynarodowa</td>
                    <td>Heath Cox (IE)</td>
                    <td>Pośrednia</td>
                    <td><strong>2 miejsce</strong>, Srebrny Medal, Ocena Doskonała</td>
                  </tr>
                  <tr>
                    <td>09.11.2025</td>
                    <td>MWPR Poznań</td>
                    <td>Międzynarodowa</td>
                    <td>Zeferino Silva (PT)</td>
                    <td>Otwarta</td>
                    <td><strong>3 miejsce</strong>, Brązowa Rozeta, Ocena Doskonała</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 class="section-title-center mt-5">Galeria Zdjęć</h3>
            <div class="exhibition-gallery">
              <img 
                v-for="(image, index) in galleryImages" 
                :key="index"
                :src="image.src" 
                :alt="image.alt" 
                loading="lazy" 
                @click="openModal(index)"
              >
            </div>
        </div>
      </section>

      <hr class="divider" />

      <!-- Amaro Section -->
      <section id="amaro" class="dog-section">
        <div class="dog-header">
           <span class="subtitle">Champion Polski, Reproduktor, Terapeuta</span>
           <h2>AMARO - W Naszej Pamięci</h2>
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
.content-section {
  padding-top: 120px;
  padding-bottom: 4rem;
}

.dog-section {
  margin-bottom: 6rem;
}

.dog-header {
  text-align: center;
  margin-bottom: 3rem;
}

.dog-header h2 {
  font-family: var(--font-heading);
  color: var(--color-text);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}

.subtitle {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* New Hero Layout */
.dog-hero {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

@media (min-width: 900px) {
  .dog-hero {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }
}

.dog-hero-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.hero-image {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
  border: 3px solid var(--color-white);
  aspect-ratio: 1;
}

.hero-image.featured {
  grid-column: span 2;
  aspect-ratio: 16/9;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.hero-image:hover {
  transform: scale(1.02) rotate(1deg);
  box-shadow: var(--shadow-lg);
}

.dog-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.bio-card {
  background: white;
  padding: 2rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-soft);
  border: 1px solid var(--color-bg-warm);
}

.bio-card h3 {
  font-size: 1.5rem;
  margin-top: 0;
  color: var(--color-primary-dark);
}

/* New Health Layout */
.health-section-full {
  margin-bottom: 4rem;
}

.health-grid-detailed {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 900px) {
  .health-grid-detailed {
     grid-template-columns: repeat(3, 1fr);
  }
}

.health-card-detailed {
  background: white;
  padding: 2rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-soft);
  border-top: 5px solid var(--color-primary);
  display: flex;
  flex-direction: column;
}

.health-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.health-card-detailed h4 {
  text-align: center;
  color: var(--color-primary-dark);
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
}

.health-details {
  list-style: none;
  padding: 0;
  margin: 0;
}

.health-details li {
  margin-bottom: 1.5rem;
  border-bottom: 1px dashed #f0f0f0;
  padding-bottom: 1rem;
}

.health-details li:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.test-name {
  display: block;
  font-weight: 700;
  color: var(--color-text);
  font-size: 0.95rem;
}

.test-result {
  display: inline-block;
  background-color: #e6f4ea;
  color: #1e8e3e;
  font-weight: bold;
  font-size: 0.85rem;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  margin: 0.25rem 0;
}

.test-desc {
  display: block;
  font-size: 0.85rem;
  color: var(--color-text-light);
  line-height: 1.4;
  margin-top: 0.25rem;
}

.highlight .test-result {
  background-color: #e8f0fe;
  color: #1967d2;
}

/* Legacy & Shared */
.dog-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
}

@media (min-width: 768px) {
    .dog-grid {
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }
}
.dog-image img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}


.divider {
  border: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #ddd, transparent);
  margin: 6rem 0;
}

.full-width-section {
  margin-top: 4rem;
}

.section-title-center {
  text-align: center;
  font-family: var(--font-heading);
  color: var(--color-text);
  font-size: 2rem;
  margin-bottom: 2.5rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.section-title-center::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: var(--color-primary);
    margin: 1rem auto 0;
    border-radius: 2px;
}

.mt-5 {
  margin-top: 6rem;
}

.exhibitions-table-wrapper {
  overflow-x: auto;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  background: white;
}

.exhibitions-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
}

.exhibitions-table th {
  background-color: var(--color-secondary);
  color: white;
  padding: 1.25rem;
  text-align: left;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.exhibitions-table td {
  padding: 1.25rem;
  border-bottom: 1px solid #f0f0f0;
  color: var(--color-text);
}

.exhibitions-table tr:last-child td {
  border-bottom: none;
}

.exhibitions-table tr:hover {
  background-color: #fcfcfc;
}

.exhibition-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.exhibition-gallery img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
  filter: grayscale(20%);
}

.exhibition-gallery img:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  filter: grayscale(0%);
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  backdrop-filter: blur(5px);
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.modal-image {
  max-width: 100%;
  max-height: 90vh;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(0,0,0,0.5);
  display: block;
}

.modal-close {
  position: absolute;
  top: -40px;
  right: -40px;
  background: transparent;
  border: none;
  color: rgba(255,255,255,0.7);
  font-size: 2.5rem;
  cursor: pointer;
  line-height: 1;
  transition: color 0.3s;
  padding: 0;
}

.modal-close:hover {
  color: white;
}

.modal-prev,
.modal-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  color: rgba(255,255,255,0.5);
  border: none;
  font-size: 4rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  user-select: none;
  line-height: 1;
}

.modal-prev:hover,
.modal-next:hover {
  color: white;
  transform: translateY(-50%) scale(1.1);
}

.modal-prev {
  left: -80px;
}

.modal-next {
  right: -80px;
}

@media (max-width: 768px) {
  .modal-close {
    right: 0;
    top: -40px;
  }
  .modal-prev {
    left: -20px;
    font-size: 3rem;
  }
  .modal-next {
    right: -20px;
    font-size: 3rem;
  }
}
</style>
