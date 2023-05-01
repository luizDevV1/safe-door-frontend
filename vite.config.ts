import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {quasar, transformAssetUrls} from '@quasar/vite-plugin'
import {unplugin} from '@intlify/unplugin-vue-i18n';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'url';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    return {
        resolve: {
            alias: {
                '~@': resolve(__dirname, './src'),
            },
        },
        plugins: [
            vue({
                template: {transformAssetUrls}
            }),
            quasar({
                sassVariables: 'src/assets/quasar/_variables.sass',
            }),
            unplugin.vite({
                runtimeOnly: false,
                include: resolve(
                    dirname(fileURLToPath(import.meta.url)),
                    'src/config/plugins/i18n/locales/**',
                ),
                fullInstall: true,
            }),
        ],
        esbuild: {
            drop: mode !== 'development' ? ['console', 'debugger'] : [],
        },
    }
})
