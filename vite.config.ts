import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // تعطيل خيار تجميع الخادم الموجه لـ Cloudflare / Nitro الذي يسبب مشكلة البناء على Vercel
  tanstackStart: false,
  vite: {
    build: {
      target: "esnext",
    },
  },
});