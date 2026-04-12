import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.svoychat.app',
  appName: 'Свой чат',
  webDir: 'www',
  server: {
    url: 'https://your-chat990.netlify.app',
    cleartext: false
  }
};

export default config;
