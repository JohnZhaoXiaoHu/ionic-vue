<template>
  <ion-page>
    <ion-content :force-overscroll="false" :fullscreen="true">
      <div class="layout-content h-full">
        <div>
          <slot></slot>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';

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
<style scoped></style>
