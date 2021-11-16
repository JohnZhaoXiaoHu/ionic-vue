<template>
  <div class="vip-banner flex-y-center w-full h-118px pl-32px pr-16px rounded-12px">
    <Icon icon="ri:vip-crown-fill" class="text-64px text-[#dfc292]" />
    <div class="flex-1 flex-col-stretch justify-between h-60px pl-28px text-[#7d6240]">
      <h3 class="text-28px font-bold">VIP会员</h3>
      <h4 class="text-24px">开通vip会员可查看更多特权</h4>
    </div>
    <div class="flex items-end h-65px">
      <div class="flex-center text-[#c89d5f]" @click="handleAction">
        <span class="text-22px pr-8px">{{ actionText }}</span>
        <Icon icon="ph:caret-right-bold" class="text-24px text-[#dfc292]" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface Props {
  /** 动作文本 */
  actionText: string;
}

interface Emits {
  (e: 'action'): void;
}

defineProps<Props>();

const emit = defineEmits<Emits>();

function handleAction() {
  emit('action');
}
</script>
<style scoped>
.vip-banner {
  background: linear-gradient(261deg, #f7e7ce 0%, #ffeed8 38%, #f9e7cf 100%);
  box-shadow: 0px 2px 4px 0px #dfdfdf;
}
</style>
