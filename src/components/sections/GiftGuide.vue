<template>
  <section id="gift" class="section gift-section">
    <div class="gift-bg-layer"></div>

    <div class="gift-title-wrap">
      <span class="gift-script">gift</span>
      <h2 class="gift-title">GUIDE</h2>
    </div>

    <p class="gift-text">
      {{ gift.intro }}
    </p>

    <div class="gift-envelope">
      <img src="/src/assets/images/decor/envelope.png" alt="Envelope" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  gift: Object
})
</script>