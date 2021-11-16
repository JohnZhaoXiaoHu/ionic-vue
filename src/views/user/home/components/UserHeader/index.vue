<template>
  <div class="flex flex-col-reverse h-full">
    <action-card />
    <div class="flex pb-36px">
      <div class="flex-center w-120px h-120px bg-white rounded-full">
        <Icon icon="carbon:user-avatar-filled" class="text-120px text-[#afafaf]" />
      </div>
      <div class="flex-1"></div>
      <Icon icon="icon-park-outline:setting-one" class="text-48px text-white" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ActionCard } from './components';
</script>
<style scoped></style>
