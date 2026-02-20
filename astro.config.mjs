// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
      SUPABASE_URL: envField.string({ context: "server", access: "secret" }),
      SUPABASE_ROLE_KEY: envField.string({ context: "server", access: "secret" }),
    }
  },

  integrations: [react()]
});