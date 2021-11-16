<template>
  <ion-page>
    <ion-content :force-overscroll="false" :fullscreen="true">
      <safe-area-container>
        <div class="flex-col-stretch h-full">
          <header class="flex-y-center min-h-88px z-2" :class="{ 'pt-80px': !isNativeApple }">
            <template v-if="!hasToolbarSlot">
              <div class="flex-y-center w-120px">
                <ion-back-button v-if="showBackBtn" mode="ios" default-href="/" text="返回" class="text-[#666]" />
              </div>
              <h3 class="ellipsis-text flex-1 text-center leading-44px text-36px font-bold text-[#333]">
                {{ toolbarTitle }}
              </h3>
              <div class="flex-y-center w-120px">
                <slot name="toolbar-extral"></slot>
              </div>
            </template>
            <slot name="toolbar"></slot>
          </header>
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
import { useSlots, computed } from 'vue';
import { IonContent, IonPage, IonBackButton } from '@ionic/vue';
import { SafeAreaContainer } from '@/components';
import { getIsNativeApple } from '@/utils';

interface Props {
  /** 顶部工具栏标题 */
  toolbarTitle?: string;
  /** 是否显示返回按钮 */
  showBackBtn?: boolean;
}

withDefaults(defineProps<Props>(), {
  toolbarTitle: '',
  showBackBtn: true
});

const slots = useSlots();

/** 是否有toolbar插槽 */
const hasToolbarSlot = computed(() => Object.keys(slots).includes('toolbar'));

const isNativeApple = getIsNativeApple();
</script>
<style scoped></style>
