<template>
  <footer class="section footer-section">
    <p class="footer-script">Reminders</p>
    <p>BE ON TIME | FINISH THE EVENT | ENJOY AND HAVE FUN</p>
    <p class="footer-script">Snap & Share</p>
    <p>{{ site.hashtag }}</p>
  </footer>
</template>

<script setup>
defineProps({
  site: Object
})
</script>