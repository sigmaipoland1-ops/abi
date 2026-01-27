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
</template>

<style scoped>
.contact-form {
    background: var(--color-white);
    border-radius: var(--radius-xl);
    padding: var(--space-2xl) var(--space-2xl);
    box-shadow: var(--shadow-lg);
}

.form-group {
    margin-bottom: var(--space-lg);
}

.form-label {
    display: block;
    font-weight: 500;
    color: var(--color-text);
    margin-bottom: var(--space-sm);
    font-size: 0.9375rem;
}

.form-input,
.form-textarea {
    width: 100%;
    padding: var(--space-md) var(--space-lg);
    font-family: var(--font-body);
    font-size: 1rem;
    border: 2px solid var(--color-beige);
    border-radius: var(--radius-md);
    background: var(--color-bg-warm);
    transition: all var(--transition-fast);
    color: var(--color-text);
}

.form-input:focus,
.form-textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    background: var(--color-white);
    box-shadow: 0 0 0 4px rgba(196, 149, 106, 0.1);
}

.form-input::placeholder,
.form-textarea::placeholder {
    color: var(--color-text-muted);
}

.form-textarea {
    min-height: 140px;
    resize: vertical;
}

.form-submit {
    width: 100%;
    margin-top: var(--space-sm);
}

.form-message {
    padding: var(--space-md) var(--space-lg);
    border-radius: var(--radius-md);
    margin-bottom: var(--space-lg);
    text-align: center;
    font-weight: 500;
}

.form-message.success {
    background: rgba(124, 185, 124, 0.15);
    color: var(--color-success);
    border: 1px solid var(--color-success);
}

.form-message.error {
    background: rgba(212, 123, 123, 0.15);
    color: var(--color-error);
    border: 1px solid var(--color-error);
}
</style>
