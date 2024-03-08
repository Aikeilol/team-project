// ../client/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { buildSync } from "esbuild";
import { join } from "node:path";
import { splitVendorChunkPlugin } from "vite";
dotenv.config();
var vite_config_default = defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3e3
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT
  },
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    {
      name: "build-sw",
      apply(config, { command }) {
        return command === "build" && !config.build.ssr;
      },
      enforce: "post",
      transformIndexHtml() {
        buildSync({
          minify: true,
          bundle: true,
          entryPoints: [join(process.cwd(), "net-or-cache-sw.js")],
          outfile: join(process.cwd(), "dist", "net-or-cache-sw.js")
        });
      }
    }
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("@open-ish") || id.includes("tslib")) {
            return "@open-ish";
          }
          if (id.indexOf("node_modules") !== -1) {
            const basic = id.toString().split("node_modules/")[1];
            const sub1 = basic.split("/")[0];
            if (sub1 !== ".pnpm") {
              return sub1.toString();
            }
            const name2 = basic.split("/")[1];
            return name2.split("@")[name2[0] === "@" ? 1 : 0].toString();
          }
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vY2xpZW50L3ZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcV2ViU2l0ZXNcXFxcdGVhbS1wcm9qZWN0XFxcXHBhY2thZ2VzXFxcXGNsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcV2ViU2l0ZXNcXFxcdGVhbS1wcm9qZWN0XFxcXHBhY2thZ2VzXFxcXGNsaWVudFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovV2ViU2l0ZXMvdGVhbS1wcm9qZWN0L3BhY2thZ2VzL2NsaWVudC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcclxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnXHJcbmltcG9ydCB7IGJ1aWxkU3luYyB9IGZyb20gJ2VzYnVpbGQnXHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCB7IHNwbGl0VmVuZG9yQ2h1bmtQbHVnaW4gfSBmcm9tICd2aXRlJ1xyXG5cclxuZG90ZW52LmNvbmZpZygpXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHNlcnZlcjoge1xyXG4gICAgcG9ydDogTnVtYmVyKHByb2Nlc3MuZW52LkNMSUVOVF9QT1JUKSB8fCAzMDAwLFxyXG4gIH0sXHJcbiAgZGVmaW5lOiB7XHJcbiAgICBfX1NFUlZFUl9QT1JUX186IHByb2Nlc3MuZW52LlNFUlZFUl9QT1JULFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIHNwbGl0VmVuZG9yQ2h1bmtQbHVnaW4oKSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2J1aWxkLXN3JyxcclxuICAgICAgYXBwbHkoY29uZmlnLCB7IGNvbW1hbmQgfSkge1xyXG4gICAgICAgIC8vIGFwcGx5IG9ubHkgb24gYnVpbGQgYnV0IG5vdCBmb3IgU1NSXHJcbiAgICAgICAgcmV0dXJuIGNvbW1hbmQgPT09ICdidWlsZCcgJiYgIWNvbmZpZy5idWlsZC5zc3JcclxuICAgICAgfSxcclxuICAgICAgZW5mb3JjZTogJ3Bvc3QnLCAvLyBcdTA0MzJcdTA0NEJcdTA0MzdcdTA0NEJcdTA0MzJcdTA0MzBcdTA0NDJcdTA0NEMgXHUwNDNGXHUwNDNFXHUwNDQxXHUwNDNCXHUwNDM1IFZpdGUgY29yZSBwbHVnaW5zXHJcbiAgICAgIHRyYW5zZm9ybUluZGV4SHRtbCgpIHtcclxuICAgICAgICBidWlsZFN5bmMoe1xyXG4gICAgICAgICAgbWluaWZ5OiB0cnVlLFxyXG4gICAgICAgICAgYnVuZGxlOiB0cnVlLFxyXG4gICAgICAgICAgZW50cnlQb2ludHM6IFtqb2luKHByb2Nlc3MuY3dkKCksICduZXQtb3ItY2FjaGUtc3cuanMnKV0sXHJcbiAgICAgICAgICBvdXRmaWxlOiBqb2luKHByb2Nlc3MuY3dkKCksICdkaXN0JywgJ25ldC1vci1jYWNoZS1zdy5qcycpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgbWFudWFsQ2h1bmtzKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICAgIC8vIFJlZHVjaW5nIGNodW5rIHNpemVcclxuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnQG9wZW4taXNoJykgfHwgaWQuaW5jbHVkZXMoJ3RzbGliJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdAb3Blbi1pc2gnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoaWQuaW5kZXhPZignbm9kZV9tb2R1bGVzJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2ljID0gaWQudG9TdHJpbmcoKS5zcGxpdCgnbm9kZV9tb2R1bGVzLycpWzFdXHJcbiAgICAgICAgICAgIGNvbnN0IHN1YjEgPSBiYXNpYy5zcGxpdCgnLycpWzBdXHJcbiAgICAgICAgICAgIGlmIChzdWIxICE9PSAnLnBucG0nKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHN1YjEudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUyID0gYmFzaWMuc3BsaXQoJy8nKVsxXVxyXG4gICAgICAgICAgICByZXR1cm4gbmFtZTIuc3BsaXQoJ0AnKVtuYW1lMlswXSA9PT0gJ0AnID8gMSA6IDBdLnRvU3RyaW5nKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9ULFNBQVMsb0JBQW9CO0FBQ2pWLE9BQU8sV0FBVztBQUNsQixPQUFPLFlBQVk7QUFDbkIsU0FBUyxpQkFBaUI7QUFDMUIsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsOEJBQThCO0FBRXZDLE9BQU8sT0FBTztBQUdkLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLE1BQU0sT0FBTyxRQUFRLElBQUksV0FBVyxLQUFLO0FBQUEsRUFDM0M7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLGlCQUFpQixRQUFRLElBQUk7QUFBQSxFQUMvQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sdUJBQXVCO0FBQUEsSUFDdkI7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU0sUUFBUSxFQUFFLFFBQVEsR0FBRztBQUV6QixlQUFPLFlBQVksV0FBVyxDQUFDLE9BQU8sTUFBTTtBQUFBLE1BQzlDO0FBQUEsTUFDQSxTQUFTO0FBQUEsTUFDVCxxQkFBcUI7QUFDbkIsa0JBQVU7QUFBQSxVQUNSLFFBQVE7QUFBQSxVQUNSLFFBQVE7QUFBQSxVQUNSLGFBQWEsQ0FBQyxLQUFLLFFBQVEsSUFBSSxHQUFHLG9CQUFvQixDQUFDO0FBQUEsVUFDdkQsU0FBUyxLQUFLLFFBQVEsSUFBSSxHQUFHLFFBQVEsb0JBQW9CO0FBQUEsUUFDM0QsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sYUFBYSxJQUFZO0FBRXZCLGNBQUksR0FBRyxTQUFTLFdBQVcsS0FBSyxHQUFHLFNBQVMsT0FBTyxHQUFHO0FBQ3BELG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksR0FBRyxRQUFRLGNBQWMsTUFBTSxJQUFJO0FBQ3JDLGtCQUFNLFFBQVEsR0FBRyxTQUFTLEVBQUUsTUFBTSxlQUFlLEVBQUU7QUFDbkQsa0JBQU0sT0FBTyxNQUFNLE1BQU0sR0FBRyxFQUFFO0FBQzlCLGdCQUFJLFNBQVMsU0FBUztBQUNwQixxQkFBTyxLQUFLLFNBQVM7QUFBQSxZQUN2QjtBQUNBLGtCQUFNLFFBQVEsTUFBTSxNQUFNLEdBQUcsRUFBRTtBQUMvQixtQkFBTyxNQUFNLE1BQU0sR0FBRyxFQUFFLE1BQU0sT0FBTyxNQUFNLElBQUksR0FBRyxTQUFTO0FBQUEsVUFDN0Q7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
