<template>
  <div>
    <ion-slides :options="slideOptions">
      <ion-slide v-for="item in carousel" :key="item.id">
        <img :src="item.img" alt="" class="w-659px h-272px" />
      </ion-slide>
    </ion-slides>
  </div>
</template>

<script setup lang="ts">
import { IonSlides, IonSlide } from '@ionic/vue';
import { searchCarousel01, searchCarousel02, searchCarousel03, searchCarousel04 } from '@/assets';

interface Carousel {
  id: number;
  img: string;
}

const carousel: Carousel[] = [
  { id: 0, img: searchCarousel01 },
  { id: 1, img: searchCarousel02 },
  { id: 2, img: searchCarousel03 },
  { id: 3, img: searchCarousel04 }
];

const slideOptions = {
  loop: true,
  speed: 400,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
};
</script>
<style scoped></style>
