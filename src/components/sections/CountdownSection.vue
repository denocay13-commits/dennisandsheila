<template>
  <section id="countdown" class="section countdown-section">
    <div class="countdown-wrapper">
      <img :src="divider" class="floral-divider" />

      <p class="countdown-heading">Countdown to forever!</p>

      <div class="countdown-grid">
        <div class="count-box">
          <strong>{{ timeLeft.days }}</strong>
          <span>DAYS</span>
        </div>

        <div class="count-box">
          <strong>{{ timeLeft.hours }}</strong>
          <span>HOURS</span>
        </div>

        <div class="count-box">
          <strong>{{ timeLeft.minutes }}</strong>
          <span>MINUTES</span>
        </div>

        <div class="count-box">
          <strong>{{ timeLeft.seconds }}</strong>
          <span>SECONDS</span>
        </div>
      </div>
<img :src="divider" alt="Floral divider" class="floral-divider floral-divider--between-sections" />
    </div>
  </section>
</template>

<script setup>
import { useCountdown } from '../../composables/useCountdown'
import divider from '../../assets/images/decor/floral-divider.png'

const props = defineProps({
  weddingDate: {
    type: String,
    required: true
  }
})

const { timeLeft } = useCountdown(props.weddingDate)
</script>