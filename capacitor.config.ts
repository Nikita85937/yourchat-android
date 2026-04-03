import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.svoychat.app',
  appName: 'Свой чат',
  server: {
    url: 'https://your-chat990.netlify.app',
    cleartext: true
  },
  webDir: 'www'
};

export default config;
