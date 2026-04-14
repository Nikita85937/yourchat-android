import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.svoychat.app',
  appName: 'Свой чат',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;