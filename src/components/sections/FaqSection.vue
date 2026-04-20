<template>
  <section id="faqs" class="section faq-section">
    <div class="faq-inner">
      <h2 class="faq-title">
        <span class="faq-script">Your Questions,</span>
        <span class="faq-bold">ANSWERED</span>
      </h2>

      <div class="faq-list">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="faq-item"
          :class="{ active: openIndex === index }"
        >
          <button class="faq-question" @click="toggleFaq(index)">
            <span class="faq-question-left">
              <img :src="item.icon" :alt="item.question" class="faq-question-icon" />
              <span class="faq-question-text">{{ item.question }}</span>
            </span>

            <span class="faq-icon-toggle">
              {{ openIndex === index ? '−' : '+' }}
            </span>
          </button>

          <transition name="faq-dropdown">
            <div v-if="openIndex === index" class="faq-answer">
              <p
                v-for="(paragraph, pIndex) in item.answer"
                :key="pIndex"
                :class="{ 'faq-subtitle': paragraph.type === 'subtitle' }"
              >
                {{ paragraph.text }}
              </p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import clockIcon from '../../assets/images/icons/clock.png'
import ringsIcon from '../../assets/images/icons/rings.png'
import cameraIcon from '../../assets/images/icons/no-camera.png'
import wineIcon from '../../assets/images/icons/wine.png'
import coffeeIcon from '../../assets/images/icons/coffee.png'

const openIndex = ref(0)

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  {
    question: 'What time should I arrive?',
    icon: clockIcon,
    answer: [
      {
        text: 'Help us get the party started as scheduled! We recommend that you arrive an hour or 30 minutes before the start of the ceremony to make sure everyone is seated on time. We encourage you to consider travel time and traffic going to the venue.'
      }
    ]
  },
  {
    question: 'Can I bring someone with me?',
    icon: ringsIcon,
    answer: [
      {
        text: 'Unfortunately, due to space and seating constraints, our guest list is under strict limitations. As our event operates on an exclusive RSVP basis, we can only accommodate those who have formally confirmed their presence.'
      },
      {
        text: 'We kindly ask for your understanding in adhering to our policy of not bringing uninvited guests. Your cooperation in this matter is greatly appreciated, as it ensures that every guest has a comfortable and enjoyable experience.'
      }
    ]
  },
  {
    question: 'What happens during the ceremony?',
    icon: cameraIcon,
    answer: [
      {
        text: 'UNPLUGGED CEREMONY',
        type: 'subtitle'
      },
      {
        text: 'We’ve hired the services of skilled photographers to capture the cherished moments of our day, allowing you to unwind, immerse yourself in the experience, and share it alongside us.'
      },
      {
        text: 'Our photos will be available once the wedding is over.'
      },
      {
        text: 'Please ensure the aisle remains unobstructed as the bridal entrance takes place.'
      },
      {
        text: 'Rest assured, after the ceremony and throughout the entire reception, feel free to capture as many photos and videos as you’d like. Your memories are important to us, and we encourage you to preserve them.'
      },
      {
        text: 'Kindly ensure that all children remain quiet and respectful throughout the wedding ceremony to maintain a serene and meaningful atmosphere.'
      }
    ]
  },
  {
    question: 'What happens after the ceremony?',
    icon: wineIcon,
    answer: [
      {
        text: 'After the ceremony, the bridal party will be taking pictures nearby for around an hour. Guests can proceed directly to the reception venue, where they can share their memories with us by visiting the photobooth.'
      }
    ]
  },
  {
    question: 'When is the appropriate time to leave?',
    icon: coffeeIcon,
    answer: [
      {
        text: 'Having you here with us is the most precious gift of all. We kindly request your presence throughout the entirety of our reception program.'
      }
    ]
  }
]
</script>