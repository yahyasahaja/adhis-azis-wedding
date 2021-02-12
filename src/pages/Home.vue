<template>
  <main class="min-h-screen">
    <section class="bg-pastel text-center flex justify-center items-center min-h-screen px-5">
      <div class="detail text-xl font-thin p-5 max-w-lg m-auto detail">
        <div>Assalamualaikum Wr. Wb.</div>
        <div>
          {{ $t('messages.opening') }} <span class="font-bold">{{ $t('messages.dear', { nama }) }}</span>
        </div>
        <div>
          {{ $t('messages.invited') }}
        </div>
        <div class="wedding-font text-5xl my-5 flex items-center justify-center" >
          Adhis <div class="text-2xl mx-3">{{$t('messages.with')}}</div> Azis
        </div>
        <div>
          {{$t('messages.savedate')}}
        </div>
        <div>
          <span class="font-normal">{{ date1 }}</span>
        </div>
        <div v-if="jam" class="font-normal">
          {{$t('messages.savetime')}} {{ jam }}:00
        </div>
        <div class="mt-5">
          <div class="mb-3">
            <svg class="w-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Jl. Cempaka 1, Rt 06, Rw 04, No. 90, Perum. Karang Asri, Kec. Sokaraja, Kab. Banyumas
          </div>

          <!-- <div class="m-auto">
            <button
              class="text-sm bg-none py-2 px-5 border border-black rounded-xl"
              @click="openMap"
            >
              Open Maps
            </button>
          </div> -->
        </div>
      </div>
    </section>

    <section class="bg-flower text-center p-10 font-thin">
      <div class="w-full h-full top-0 left-0 absolute" style="background: rgb(0 0 0 / 62%)"/>
      <div class="text-center text-white relative max-w-xl m-auto" style="z-index: 10">
        <div class="pt-5 pb-5">
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya dan Dia menjadikan di antara kamu
          rasa kasih dan sayang. Sungguh, pada demikian itu benar-benar terdapat
          tanda-tanda (kebesaran Allah) bagi kaum yang berfikir."
        </div>
        <div>
          ( QS. Ar- Rum 21 )
        </div>
      </div>
    </section>

    <section class="text-center p-10 font-thin bg-wall-pink">
      <!-- <div class="w-full h-full top-0 left-0 absolute" style="background: rgb(180 213 243 / 74%);" /> -->
      <div class="max-w-2xl m-auto relative">
        <div class="flex justify-end mb-10">
          <div class="text-right w-96 rounded-lg flex overflow-hidden bg-adhis">
            <div class="relative w-full h-full p-5">
              <!-- <div class="bg-pink-flower opacity-30 w-full h-full absolute top-0 left-0" /> -->
              <div class="mr-3 flex-1 relative">
                <div class="wedding-font text-3xl">
                  Adhis Fajriana
                </div>
                <div class="text-xs md:text-base">
                  <span class="font-bold">Putri dari</span>
                  <div>
                    Bapak Tri Agus Haryanto <br/>
                    & Ibu Nursabiha
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-start">
          <div class="text-right w-96 rounded-lg flex overflow-hidden bg-azis">
            <div class="relative w-full h-full p-5">
              <!-- <div class="bg-pink-flower opacity-50 w-full h-full absolute top-0 left-0" /> -->
              <div class="mr-3 flex-1 relative">
                <div class="wedding-font text-3xl">
                  Abdul Azis
                </div>
                <div class="text-xs md:text-base">
                  <span class="font-bold">Putra dari</span>
                  <div>
                    Bapak Alm. Muhammad Zein<br/>
                    & Ibu Emnah
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="text-right w-96 p-5 rounded-lg flex bg-azis">
            <div class="ml-3 flex-1">
              <div class="wedding-font text-3xl">
                Abdul Azis
              </div>
              <div class="text-sm md:text-base">
                <span class="font-bold">Putra dari</span>
                <div>
                  Bapak Alm. Muhammad Zein<br/>
                  & Ibu Emnah
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </section>
    <section class="p-5 bg-flower">
      <div class="w-full h-full top-0 left-0 absolute" style="background: rgb(0 0 0 / 62%)"/>
      <div class="m-auto text-center relative text-white">
        <div class="wedding-font text-4xl py-5 font-bold">
          Map Location
        </div>
        <a
          href="https://goo.gl/maps/6TggezHKK2uge3KY9"
          target="_blank"
          class="max-w-2xl m-auto relative block rounded-lg overflow-hidden"
        >
          <div class="absolute w-full h-full" style="z-index: 10" />
          <map-view class="w-full" />
        </a>
      </div>
    </section>
  </main>
</template>

<script>
import MapView from '../components/MapView';

export default {
  name: 'Home',
  components: {
    MapView,
  },
  computed: {
    nama() {
      const { nama = 'Bapak/Ibu' } = this.$route.query || {};
      return nama;
    },
    bahasa() {
      const { bahasa = 'indonesia' } = this.$route.query || {}; // indonesia english jawa
      return bahasa;
    },
    tanggal() {
      const { tanggal } = this.$route.query || {}; // indonesia english jawa
      return tanggal;
    },
    jam() {
      const { jam } = this.$route.query || {}; // indonesia english jawa
      return jam;
    },
    date1() {
      const tanggal = this.tanggal || 12;
      return this.formatDate(new Date(`2021-3-${tanggal} ${this.jam || 10}:00:00`));
    },
    date2() {
      const tanggal = 13;
      return this.formatDate(new Date(`2021-3-${tanggal} ${this.jam || 10}:00:00`));
    }
  },
  watch: {
    bahasa: {
      immediate: true,
      handler(next) {
        this.$i18n.locale = next;
      }
    }
  },
  methods: {
    openMap() {
      window.location.href = ''
    },
    formatDate(date) {
      const month = date.getMonth();
      const formattedMonth = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember',
      ][month];

      const day = date.getDay();
      const formattedDay = [
        'Minggu',
        'Senin',
        'Selasa',
        'Rabu',
        'Kamis',
        'Jumat',
        'Sabtu',
      ][day]

      return `${formattedDay}, ${date.getDate()} ${formattedMonth} ${date.getFullYear()}`
    }
  }
}
</script>

<style scoped>
.detail {
  border: 1px dashed #70bec7;
  border-radius: 30px;
  background: #dbe9f961;
}
</style>
