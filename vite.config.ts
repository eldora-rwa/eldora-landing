import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const branch = process.env.AWS_BRANCH ?? "";
const siteEnv = process.env.VITE_SITE_ENV ?? "";
const isProduction =
  siteEnv === "production" || branch === "master" || branch === "main";

function searchEngineVisibility(): Plugin {
  return {
    name: "search-engine-visibility",
    transformIndexHtml(html) {
      if (isProduction) return html;
      return html.replace(
        "</head>",
        `  <meta name="robots" content="noindex, nofollow" />\n  </head>`
      );
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), searchEngineVisibility()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
