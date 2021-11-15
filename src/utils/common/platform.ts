import { getPlatforms } from '@ionic/vue';

/** 判断是安卓设备或ios设备才安装插件 */
export function canSetupNativePlugin() {
  const platforms = getPlatforms();
  const canSetupPlugin = !platforms.includes('mobileweb') && !platforms.includes('desktop');
  return canSetupPlugin;
}

/** 判断是否是苹果设备 */
export function getIsNativeApple() {
  const platforms = getPlatforms();
  const applePlatforms: ['ios', 'iphone', 'ipad'] = ['ios', 'iphone', 'ipad'];

  const isApple = applePlatforms.some(item => platforms.includes(item)) && !platforms.includes('mobileweb');

  return isApple;
}
