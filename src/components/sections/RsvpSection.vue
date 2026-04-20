<template>
  <section id="rsvp" class="section rsvp-section">
    <p class="script-title">{{ rsvp.title }}</p>
    <p>{{ rsvp.note }}</p>

    <form class="rsvp-form" @submit.prevent="submitForm">
      <input v-model="form.name" type="text" placeholder="Your full name" required />
      <input v-model="form.email" type="email" placeholder="Email address" />
      <select v-model="form.attendance" required>
        <option disabled value="">Will you attend?</option>
        <option value="yes">Yes, I will attend</option>
        <option value="no">Sorry, I can't attend</option>
      </select>
      <input v-model="form.guests" type="number" min="1" max="5" placeholder="Number of guests" />
      <textarea v-model="form.message" rows="5" placeholder="Message for the couple"></textarea>
      <button type="submit" class="primary-btn">Submit RSVP</button>
    </form>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

defineProps({
  rsvp: Object
})

const form = reactive({
  name: '',
  email: '',
  attendance: '',
  guests: 1,
  message: ''
})

const submitForm = () => {
  alert('RSVP submitted! Later we will connect this to Google Sheets or Firebase.')
}
</script>