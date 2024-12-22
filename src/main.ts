import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import PrimeTheme from './presets/theme';

import './style.scss'
import '/node_modules/primeflex/primeflex.css'
import 'primeicons/primeicons.css'

createApp(App)
.use(PrimeVue, {
        theme: {
            preset: PrimeTheme,
            options: {
                darkModeSelector: ".prime-dark"
            }
        }
    }
)
.mount('#app')
