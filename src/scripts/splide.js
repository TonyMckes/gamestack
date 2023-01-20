import Splide from '@splidejs/splide'

new Splide('.splide', {
  type: 'loop',
  perPage: 3,
  gap: '3rem',
  padding: '3rem',
  breakpoints: {
    640: {
      perPage: 1,
    },
    768: {
      perPage: 2,
    },
  },
}).mount()
