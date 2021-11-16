<template>
  <overlay-layout overlay-area-class="h-400px px-32px" :add-safe-area-bottom="false">
    <template #overlay>
      <img :src="searchBanner" alt="" class="absolute-lt w-full h-full -z-1" />
      <search-header />
    </template>
    <div></div>
  </overlay-layout>
</template>

<script setup lang="ts">
import { OverlayLayout } from '@/layouts';
import { searchBanner } from '@/assets';
import { SearchHeader } from './components';
</script>
<style scoped></style>
