<template>
  <header class="dm-nav">
    <div class="dm-nav-inner">
      <nav class="dm-nav-desktop">
        <a
          v-for="item in items"
          :key="item.href"
          :href="item.href"
          class="dm-nav-link"
        >
          {{ item.label }}
        </a>
      </nav>

      <button
        class="dm-nav-toggle"
        type="button"
        @click="isOpen = !isOpen"
        aria-label="Open menu"
      >
        &#9776;
      </button>
    </div>

    <div v-if="isOpen" class="dm-mobile-menu">
      <a
        v-for="item in items"
        :key="item.href"
        :href="item.href"
        class="dm-mobile-link"
        @click="isOpen = false"
      >
        {{ item.label }}
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

const isOpen = ref(false)
</script>