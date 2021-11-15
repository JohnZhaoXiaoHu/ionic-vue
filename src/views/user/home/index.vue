<template>
  <basic-layout :show-back-btn="false">
    <template #bg>
      <div class="relative h-372px">
        <img :src="userBanner" alt="" class="w-full h-full" />
        <div class="absolute left-0 -bottom-64px px-32px">
          <action-card />
        </div>
      </div>
    </template>
    <template #toolbar>
      <div class="flex w-full px-32px pt-24px py-36px">
        <div class="flex-center w-120px h-120px bg-white rounded-full">
          <Icon icon="carbon:user-avatar-filled" class="text-120px text-[#afafaf]" />
        </div>
        <div class="flex-1"></div>
        <Icon icon="icon-park-outline:setting-one" class="text-48px text-white" />
      </div>
    </template>
    <div class="px-32px"></div>
  </basic-layout>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { BasicLayout } from '@/layouts';
import { userBanner } from '@/assets';
import { ActionCard } from './components';
</script>
<style scoped></style>
