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
        dear: 'Dear {nama},',
        invited: 'You are invited!',
        celebration: 'the wedding celebration of',
        savedate: 'On',
        savetime: 'At',
      }
    },
    'indonesia': {
      messages: {
        dear: 'Kepada {nama},',
        invited: 'Kami mengundang',
        celebration: 'pada perayaan pernikahan',
        savedate: 'Pada tanggal:',
        savetime: 'Pukul'
      }
    },
    'jawa': {
      messages: {
        dear: 'Punten {nama},',
        invited: 'Koe diundang!',
        celebration: 'neng nikahane',
        savedate: 'Pada',
        savetime: 'Pukul'
      }
    },
  }
})
