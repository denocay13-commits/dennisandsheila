<template>
  <div class="music-floating">
    <button class="music-btn" @click="$emit('toggle')">
      {{ playing ? 'Pause Music 🎵' : 'Play Music 🎵' }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  playing: Boolean
})

defineEmits(['toggle'])
</script>