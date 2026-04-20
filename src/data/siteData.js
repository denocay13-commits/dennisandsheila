import hero1 from '../assets/images/placeholders/hero-1.jpg'
import gallery1 from '../assets/images/placeholders/gallery-1.jpg'
import gallery2 from '../assets/images/placeholders/gallery-2.jpg'
import gallery3 from '../assets/images/placeholders/gallery-3.jpg'
import gallery4 from '../assets/images/placeholders/gallery-4.jpg'
import gallery5 from '../assets/images/placeholders/gallery-5.jpg'
import ceremonyBg from '../assets/images/placeholders/venue-1.jpg'
import receptionBg from '../assets/images/placeholders/venue-2.jpg'

import carousel1 from '../assets/images/carousel/1.jpg'
import carousel2 from '../assets/images/carousel/2.jpg'
import carousel3 from '../assets/images/carousel/3.jpg'
import carousel4 from '../assets/images/carousel/4.jpg'
import carousel5 from '../assets/images/carousel/5.jpg'

export const site = {
  guestName: 'You are cordially invited!',
  coupleLabel: 'THE WEDDING OF',
  bride: 'Sheila',
  groom: 'Dennis',
  hashtag: '#DennisAndSheilaForever',
  weddingDate: '2026-05-20T14:00:00',
  heroImage: hero1,

  prenupImages: [gallery1, gallery2, gallery3, gallery4, gallery5],

  carouselImages: [carousel1, carousel2, carousel3, carousel4, carousel5],

  ceremony: {
    title: 'Vista Villa DSB',
    address: 'Don Salvador Benedicto, Negros Occidental',
    mapLabel: 'Open ceremony map',
    background: ceremonyBg
  },

  reception: {
    title: 'The Glass House @ Vista Villa DSB',
    address: 'Don Salvador Benedicto, Negros Occidental',
    mapLabel: 'Open reception map',
    background: receptionBg
  },

  entourage: {
    coupleTitle: 'CABALIDA - CARWANA',
    subtitle: 'NUPTIALS',

    parentsHeadingLeft: 'Parent of the Groom',
    parentsHeadingRight: 'Parents of the Bride',
    parentsLeft: ['VIRGINIA CABALIDA', 'DIOMEDES CABALIDA'],
    parentsRight: ['MARCELINA CARWANA', 'LUCERINO CARWANA'],

    principalSponsorsTitle: 'PRINCIPAL SPONSORS',
    principalSponsorsSubtitle: 'To stand as witness to our vows',
    principalSponsorsLeft: [
      'MR. LAZAGA',
      'MR. SUPANGAN',
      'MR. ESPARTERO',
      'MR. OGATIS',
      
    ],
    principalSponsorsRight: [
      'MRS. LAZAGA',
      'MRS. SUPANGAN',
      'MRS. ESPARTERO',
      'MRS. OGATIS',
     
    ],

    bestManMaidTitle: 'Best Man  Maid of Honor',
    bestManMaidLeft: ['CHRIST VEIN CABALIDA', 'GUILBERTO MAASIN JR'],
    bestManMaidRight: ['CRYZEL SY', 'MONALIZA BARING','MELANIE CABALIDA'],

    secondarySponsorsTitle: 'SECONDARY SPONSORS',
    secondarySponsorsSubtitle: 'Groomsmen  Bridesmaids',
    secondarySponsorsLeft: [
      'KENS HENRY PIALA',
      'RJ LANGGA',
      'JOE AEM CABALIDA',
      'ANDREW CABALIDA',
      'REYMART ESPARTERO'
    ],
    secondarySponsorsRight: [
      'HAILEY JADE CABALIDA',
      'PRINCESS LJ BACALSO',
      
    ],
    flowerGirlsTitle: 'FLOWER GIRLS',
    flowerGirls: ['ciday birado', 'baby Baring'],

    lightTitle: 'To light our path',
    lightLeft: ['MR. JOEL CABALIDA', 'MRS. MARGIE CABALIDA'],

    cordTitle: 'BIBLE BEARER',
    cordCenter: ['PRINCE ITEZA CABALIDA'],

    veilTitle: 'COIN BEARER',
    veilRight: ['CIDY BIRAO']
    
  },

  attire: {
    ninongs: 'Black suit and black pants',
    ninangs: 'Formal dress',
    guestsMale: 'Gray or taupe long sleeves, polo, pants, or suit',
    guestsFemale: 'Long dress or cocktail dress'
  },

  gift: {
    intro: 'Your presence is the greatest gift. But if you wish to bless us, a monetary gift is sincerely appreciated.'
  },

  faqs: [
    {
      question: 'What time should I arrive?',
      answer: 'Please arrive 30 minutes to 1 hour before the ceremony.'
    },
    {
      question: 'Can I bring someone with me?',
      answer: 'Only guests listed in the RSVP invitation can be accommodated.'
    },
    {
      question: 'What happens during the ceremony?',
      answer: 'We encourage an unplugged ceremony so everyone can be fully present.'
    },
    {
      question: 'What happens after the ceremony?',
      answer: 'Guests may proceed to the reception while the bridal party finishes the photo session.'
    }
  ],

  rsvp: {
    title: 'RSVP Now',
    note: 'Please let us know if you will attend.'
  }
}