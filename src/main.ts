import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import PrimeTheme from './presets/theme';

import './style.scss'
import '/node_modules/primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import primeVueComponentManager from './presets/PrimeVueComponentManager';

const app = createApp(App);

primeVueComponentManager.addTo(app);

app.use(PrimeVue, {
        theme: {
            preset: PrimeTheme,
            options: {
                darkModeSelector: ".prime-dark"
            }
        }
    }
);


app.mount('#app');
