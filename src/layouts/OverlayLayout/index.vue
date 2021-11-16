<template>
  <ion-page>
    <ion-content :force-overscroll="false" :fullscreen="true">
      <safe-area-container :add-safe-area-top="false" :add-safe-area-bottom="addSafeAreaBottom">
        <div class="flex-col-stretch h-full">
          <div
            class="overlay__top-area_height relative z-2"
            :class="[overlayAreaClass, isNativeApple ? 'safe-area__padding-top' : 'pt-80px']"
          >
            <slot name="overlay"></slot>
          </div>
          <main class="relative flex-1-hidden z-2">
            <div class="h-full overflow-y-auto">
              <slot></slot>
            </div>
          </main>
        </div>
      </safe-area-container>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { SafeAreaContainer } from '@/components';
import { getIsNativeApple } from '@/utils';

interface Props {
  /** 沉浸状态栏顶部区域的样式class */
  overlayAreaClass?: string;
  /** 添加底部安全区距离 */
  addSafeAreaBottom?: boolean;
}

withDefaults(defineProps<Props>(), {
  overlayAreaClass: '',
  addSafeAreaBottom: true
});

const isNativeApple = getIsNativeApple();
</script>
<style scoped>
.safe-area__padding-top {
  padding-top: var(--ion-safe-area-top);
}
</style>
