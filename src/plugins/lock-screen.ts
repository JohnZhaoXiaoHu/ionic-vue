import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { canSetupNativePlugin } from '@/utils';

/** 锁定屏幕方向插件 */
export default function setupLockVerticalScreen() {
  const canSetupPlugin = canSetupNativePlugin();
  if (canSetupPlugin) {
    ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT);
  }
}
