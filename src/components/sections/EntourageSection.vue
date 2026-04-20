<template>
  <section id="entourage" class="section entourage-section">
    <div class="entourage-bg-layer"></div>

    <img
      :src="divider"
      alt="Floral divider"
      class="floral-divider floral-divider--between-sections"
    />

    <div class="entourage-title-block">
      <h2 class="entourage-couple-title">{{ entourage.coupleTitle }}</h2>
      <p class="entourage-subtitle">{{ entourage.subtitle }}</p>
    </div>

    <div class="entourage-content">
      <div class="entourage-parents-headings">
        <p>{{ entourage.parentsHeadingLeft }}</p>
        <p>{{ entourage.parentsHeadingRight }}</p>
      </div>

      <div class="entourage-two-col entourage-two-col--tight">
        <div>
          <p
            v-for="(name, index) in entourage.parentsLeft"
            :key="'pl-' + index"
            class="entourage-name"
          >
            {{ name }}
          </p>
        </div>

        <div>
          <p
            v-for="(name, index) in entourage.parentsRight"
            :key="'pr-' + index"
            class="entourage-name"
          >
            {{ name }}
          </p>
        </div>
      </div>

      <h3 class="entourage-section-title">{{ entourage.principalSponsorsTitle }}</h3>
      <p class="entourage-script-line">{{ entourage.principalSponsorsSubtitle }}</p>

      <div class="entourage-two-col">
        <div>
          <p
            v-for="(name, index) in entourage.principalSponsorsLeft"
            :key="'psl-' + index"
            class="entourage-name"
          >
            {{ name }}
          </p>
        </div>

        <div>
          <p
            v-for="(name, index) in entourage.principalSponsorsRight"
            :key="'psr-' + index"
            class="entourage-name"
          >
            {{ name }}
          </p>
        </div>
      </div>

      <p class="entourage-script-line entourage-bestmaid-title">
        {{ entourage.bestManMaidTitle }}
      </p>

      <div class="entourage-two-col entourage-two-col--tight">
        <div>
          <p
            v-for="(name, index) in entourage.bestManMaidLeft"
            :key="'bml-' + index"
            class="entourage-name"
          >
            {{ name }}
          </p>
        </div>

        <div>
          <p
            v-for="(name, index) in entourage.bestManMaidRight"
            :key="'bmr-' + index"
            class="entourage-name"
          >
            {{ name }}
          </p>
        </div>
      </div>

      <h3 class="entourage-section-title">{{ entourage.secondarySponsorsTitle }}</h3>
      <p class="entourage-script-line">{{ entourage.secondarySponsorsSubtitle }}</p>

      <div class="entourage-two-col">
        <div>
          <p
            v-for="(name, index) in entourage.secondarySponsorsLeft"
            :key="'ssl-' + index"
            class="entourage-name"
          >
            {{ name }}
          </p>
        </div>

        <div>
          <p
            v-for="(name, index) in entourage.secondarySponsorsRight"
            :key="'ssr-' + index"
            class="entourage-name"
          >
            {{ name }}
          </p>
        </div>
      </div>

          <div class="entourage-bottom-grid">
        <div class="entourage-bottom-block">
          <p class="entourage-script-line small">{{ entourage.lightTitle }}</p>
          <p
            v-for="(name, index) in entourage.lightLeft"
            :key="'light-' + index"
            class="entourage-name"
          >
            {{ name }}
          </p>
        </div>

        <div class="entourage-bottom-block">
          <p class="entourage-script-line small">{{ entourage.cordTitle }}</p>
          <p
            v-for="(name, index) in entourage.cordCenter"
            :key="'cord-' + index"
            class="entourage-name"
          >
            {{ name }}
          </p>
        </div>

        <div class="entourage-bottom-block">
          <p class="entourage-script-line small">{{ entourage.veilTitle }}</p>
          <p
            v-for="(name, index) in entourage.veilRight"
            :key="'veil-' + index"
            class="entourage-name"
          >
            {{ name }}
          </p>
        </div>
      </div>

      <div class="entourage-flowergirls" v-if="entourage.flowerGirls?.length">
        <p class="entourage-script-line small">{{ entourage.flowerGirlsTitle }}</p>
        <p
          v-for="(name, index) in entourage.flowerGirls"
          :key="'flower-' + index"
          class="entourage-name"
        >
          {{ name }}
        </p>
      </div>
    </div>

    <img
      :src="divider"
      alt="Floral divider"
      class="floral-divider floral-divider--between-sections"
    />
  </section>
</template>

<script setup>
import divider from '../../assets/images/decor/floral-divider.png'

defineProps({
  entourage: {
    type: Object,
    required: true
  }
})
</script>