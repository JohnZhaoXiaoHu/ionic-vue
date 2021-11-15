import { StatusBar, Style } from '@capacitor/status-bar';
import { canSetupNativePlugin } from '@/utils';

/** 状态栏插件 */
export default function setupStatusBar() {
  const canSetupPlugin = canSetupNativePlugin();
  if (canSetupPlugin) {
    StatusBar.setStyle({ style: Style.Light });
    StatusBar.setOverlaysWebView({ overlay: true });
  }
}
