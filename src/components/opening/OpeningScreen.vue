<template>
  <section class="opening-screen" :style="bgStyle">
    <div class="opening-overlay">
      <p class="opening-kicker">YOU ARE</p>
      <h1 class="opening-script">
        cordially<br />
        invited!
      </h1>

      <button class="open-btn" @click="$emit('open')">
        OPEN INVITATION
      </button>
    </div>
  </section>
</template>

<script setup>
import heroImage from '../../assets/images/placeholders/hero-1.jpg'

const bgStyle = {
  backgroundImage: `linear-gradient(rgba(244,230,233,0.78), rgba(244,230,233,0.78)), url(${heroImage})`
}

defineEmits(['open'])
</script>