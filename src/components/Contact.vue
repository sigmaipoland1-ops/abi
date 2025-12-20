<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const status = ref(null)
const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Symulacja wysyłki formularza
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  status.value = 'success'
  form.value = { name: '', email: '', message: '' }
  isSubmitting.value = false
  
  setTimeout(() => {
    status.value = null
  }, 5000)
}
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
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div v-if="status === 'success'" class="form-message success">
            Dziękujemy za wiadomość! Odpowiemy najszybciej jak to możliwe.
          </div>
          
          <div v-if="status === 'error'" class="form-message error">
            Wystąpił błąd podczas wysyłania wiadomości. Proszę spróbować ponownie.
          </div>
          
          <div class="form-group">
            <label for="name" class="form-label">Twoje imię</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name"
              class="form-input" 
              required 
              placeholder="Jan Kowalski"
            >
          </div>
          
          <div class="form-group">
            <label for="email" class="form-label">Adres email</label>
            <input 
              type="email" 
              id="email"
              v-model="form.email" 
              class="form-input" 
              required 
              placeholder="jan@example.com"
            >
          </div>
          
          <div class="form-group">
            <label for="message" class="form-label">Wiadomość</label>
            <textarea 
              id="message"
              v-model="form.message" 
              class="form-textarea" 
              required 
              placeholder="Napisz swoją wiadomość..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            class="btn btn-primary form-submit"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
