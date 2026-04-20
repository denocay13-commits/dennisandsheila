<template>
  <section id="home" class="section hero-section">
    <div class="hero-wrapper">
      <div class="hero-poster">
        <img :src="site.heroImage" alt="Wedding hero" class="hero-main-image" />

        <div class="hero-top-fade"></div>
        <div class="hero-bottom-fade"></div>

        <p class="hero-top-text">{{ site.coupleLabel }}</p>

        <div class="hero-center-text">
          <h1>{{ site.groom }}</h1>
          <span>&</span>
          <h1>{{ site.bride }}</h1>
        </div>
      </div>

      <div class="hero-date-row">
        <div class="hero-date-side">
          <span>{{ formattedWeekday }}</span>
        </div>

        <div class="hero-date-middle">
          <span class="month">{{ formattedMonth }}</span>
          <span class="day">{{ formattedDay }}</span>
          <span class="year">{{ formattedYear }}</span>
        </div>

        <div class="hero-date-side">
          <span>{{ formattedTime }}</span>
        </div>
      </div>

      <img :src="divider" alt="Floral divider" class="floral-divider floral-divider--hero" />

      <p class="hero-invite-text">
        We request the honor of your presence for a celebration
        of love, friendship, laughter, and family as we unite
        ourselves in The Sacrament of Matrimony.
      </p>

      <a href="#rsvp" class="hero-rsvp-btn">RSVP NOW</a>

      <div class="hero-hashtag-block">
        <p class="hero-hashtag-title">Help us capture the love!</p>
        <p class="hero-hashtag-subtitle">
          Please tag us and use our hashtags.
        </p>
        <p class="hero-hashtag">{{ site.hashtag }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import divider from '../../assets/images/decor/floral-divider.png'

const props = defineProps({
  site: {
    type: Object,
    required: true
  }
})

const weddingDate = computed(() => new Date(props.site.weddingDate))

const formattedWeekday = computed(() =>
  weddingDate.value.toLocaleDateString('en-US', { weekday: 'long' })
)

const formattedMonth = computed(() =>
  weddingDate.value.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
)

const formattedDay = computed(() => weddingDate.value.getDate())

const formattedYear = computed(() => weddingDate.value.getFullYear())

const formattedTime = computed(() =>
  weddingDate.value.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })
)
</script>