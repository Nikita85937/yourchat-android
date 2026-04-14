import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.svoychat.app',
  appName: 'Свой чат',
  webDir: 'www',
  server: {
    hostname: 'chats-f2c9f.firebaseapp.com',
    androidScheme: 'https'
  }
};
