<template>
  <section id="venue" class="section venue-section">
    <div class="venue-title-wrap">
      <span class="venue-script">the</span>
      <h2 class="venue-title">VENUE</h2>
    </div>

    <div class="venue-cards">
      <div
        class="venue-card venue-card-overlay"
        :style="{ backgroundImage: `linear-gradient(rgba(255,255,255,0.72), rgba(255,255,255,0.72)), url(${ceremony.background})` }"
      >
        <p class="venue-kicker">the ceremony will commence at 03:00 in the afternoon</p>
        <h3 class="venue-name">{{ ceremony.title }}</h3>
        <p class="venue-address">{{ ceremony.address }}</p>
        <a href="#" class="venue-btn">{{ ceremony.mapLabel }}</a>
      </div>

      <div
        class="venue-card venue-card-overlay"
        :style="{ backgroundImage: `linear-gradient(rgba(255,255,255,0.72), rgba(255,255,255,0.72)), url(${reception.background})` }"
      >
        <p class="venue-kicker">reception to follow at</p>
        <h3 class="venue-name">{{ reception.title }}</h3>
        <p class="venue-address">{{ reception.address }}</p>
        <a href="#" class="venue-btn">{{ reception.mapLabel }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  ceremony: {
    type: Object,
    required: true
  },
  reception: {
    type: Object,
    required: true
  }
})
</script>