<template>
  <overlay-layout overlay-area-class="h-440px px-32px bg-[#f4f7f7]" :add-safe-area-bottom="false">
    <template #overlay>
      <img :src="userBanner" alt="" class="absolute-lt w-full h-372px -z-1" />
      <user-header />
    </template>
    <div class="min-h-full bg-[#f4f7f7]"></div>
  </overlay-layout>
</template>

<script setup lang="ts">
import { OverlayLayout } from '@/layouts';
import { userBanner } from '@/assets';
import { UserHeader } from './components';
</script>
<style scoped></style>
