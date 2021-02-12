import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// const dateTimeFormats = {
//   indonesia: {
//     short: {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric'
//     },
//     long: {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       weekday: 'long',
//       hour: 'numeric',
//       minute: 'numeric'
//     }
//   },
// }

const locale = 'indonesia' // default locale

export default new VueI18n({
  locale,
  messages: {
    'english': {
      messages: {
        opening: '',
        dear: 'Dear {nama},',
        invited: 'You are invited on the wedding celebration of',
        with: '&',
        savedate: 'On',
        savetime: 'At',
      }
    },
    'indonesia': {
      messages: {
        opening: 'Dengan memohon rahmat dan ridho Allah SWT,',
        dear: 'kami mengundang {nama}',
        invited: 'untuk menghadiri acara pernikahan anak kami',
        with: 'dengan',
        savedate: 'Pada hari / tanggal:',
        savetime: 'Pukul'
      }
    },
    'jawa': {
      messages: {
        opening: '',
        dear: 'Punten {nama},',
        invited: 'Koe diundang!',
        with: 'karo',
        savedate: 'Pada',
        savetime: 'Pukul'
      }
    },
  }
})
