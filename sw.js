// Service worker mínimo: solo hace la app instalable. No guarda nada en caché para que las actualizaciones se vean al momento.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
