<template>
  <OpeningScreen
    v-if="!invitationOpened"
    @open="handleOpenInvitation"
  />

  <div v-else class="site-shell">
    <TopNav :items="navItems" />
    <MusicToggle :playing="musicPlaying" @toggle="toggleMusic" />

    <main>
      <HeroSection :site="site" />
      <CountdownSection :wedding-date="site.weddingDate" />
      <PrenupGallery :images="site.prenupImages" />
      <VenueSection :ceremony="site.ceremony" :reception="site.reception" />
      <EntourageSection :entourage="site.entourage" />
      <PhotoCarousel :images="site.carouselImages" />
      <AttireGuide :attire="site.attire" />
      <GiftGuide :gift="site.gift" />
      <FaqSection :faqs="site.faqs" />
      <RsvpSection :rsvp="site.rsvp" />
      <FooterSection :site="site" />
    </main>

    <audio ref="bgMusic" loop>
      <source src="/src/assets/audio/wedding-theme.mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import OpeningScreen from './components/opening/OpeningScreen.vue'
import TopNav from './components/layout/TopNav.vue'
import MusicToggle from './components/layout/MusicToggle.vue'
import HeroSection from './components/sections/HeroSection.vue'
import CountdownSection from './components/sections/CountdownSection.vue'
import PrenupGallery from './components/sections/PrenupGallery.vue'
import VenueSection from './components/sections/VenueSection.vue'
import EntourageSection from './components/sections/EntourageSection.vue'
import PhotoCarousel from './components/sections/PhotoCarousel.vue'
import AttireGuide from './components/sections/AttireGuide.vue'
import GiftGuide from './components/sections/GiftGuide.vue'
import FaqSection from './components/sections/FaqSection.vue'
import RsvpSection from './components/sections/RsvpSection.vue'
import FooterSection from './components/sections/FooterSection.vue'
import { site } from './data/siteData'

const invitationOpened = ref(false)
const musicPlaying = ref(false)
const bgMusic = ref(null)

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Photos', href: '#photos' },
  { label: 'Venue', href: '#venue' },
  { label: 'Entourage', href: '#entourage' },
  { label: 'Dress Code', href: '#attire' },
  { label: 'Gift Guide', href: '#gift' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'RSVP', href: '#rsvp' },
  { label: 'Countdown', href: '#countdown' }
]

const handleOpenInvitation = async () => {
  invitationOpened.value = true
  await nextTick()

  if (bgMusic.value) {
    try {
      await bgMusic.value.play()
      musicPlaying.value = true
    } catch (error) {
      console.log('Autoplay blocked.', error)
    }
  }
}

const toggleMusic = async () => {
  if (!bgMusic.value) return

  if (musicPlaying.value) {
    bgMusic.value.pause()
    musicPlaying.value = false
  } else {
    await bgMusic.value.play()
    musicPlaying.value = true
  }
}
</script>