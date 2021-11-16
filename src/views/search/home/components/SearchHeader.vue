<template>
  <div class="flex flex-col-reverse wh-full">
    <div class="flex-y-center h-80px">
      <img class="w-53px h-37px mr-24px" :src="searchHotSearchTitle" alt="" />
    </div>
    <div class="flex-y-center h-100px px-24px bg-white text-30px text-[#999] rounded-10px" @click="toSearchDetail">
      <Icon icon="ic:round-search" class="text-40px" />
      <span class="pl-18px">输入公司名称关键字</span>
    </div>
    <div class="flex-center pb-40px">
      <img class="w-75px h-70px" :src="logoWhite" alt="" />
      <img class="w-453px h-52px ml-16px" :src="searchBannerTitle" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useRouterChange } from '@/hooks';
import { logoWhite, searchBannerTitle, searchHotSearchTitle } from '@/assets';

const { toSearchDetail } = useRouterChange();
</script>
<style scoped></style>
