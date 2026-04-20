import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useCountdown(targetDate) {
  const timeLeft = ref({ days: '00', hours: '00', minutes: '00', seconds: '00' })
  let timer = null

  const updateCountdown = () => {
    const now = new Date().getTime()
    const target = new Date(targetDate).getTime()
    const diff = Math.max(target - now, 0)

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    timeLeft.value = {
      days: String(days).padStart(2, '0'),
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0')
    }
  }

  onMounted(() => {
    updateCountdown()
    timer = setInterval(updateCountdown, 1000)
  })

  onBeforeUnmount(() => {
    if (timer) clearInterval(timer)
  })

  return { timeLeft }
}