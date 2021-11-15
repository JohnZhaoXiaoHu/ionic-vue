<template>
  <div
    class="safe-area__container h-full"
    :class="{ 'safe-area__padding-top': addSafeAreaTop, 'safe-area__padding-bottom': addSafeAreaBottom }"
  >
    <div class="h-full">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  /** 添加顶部安全区距离 */
  addSafeAreaTop?: boolean;
  /** 添加底部安全区距离 */
  addSafeAreaBottom?: boolean;
}

withDefaults(defineProps<Props>(), {
  addSafeAreaTop: true,
  addSafeAreaBottom: true
});
</script>
<style scoped>
.safe-area__container {
  padding-left: var(--ion-safe-area-left);
  padding-right: var(--ion-safe-area-right);
}

.safe-area__padding-top {
  padding-top: var(--ion-safe-area-top);
}
.safe-area__padding-bottom {
  padding-bottom: var(--ion-safe-area-bottom);
}
</style>
