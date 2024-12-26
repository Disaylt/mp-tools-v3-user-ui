import type { App } from "vue";
import Button from 'primevue/button';
import Select from 'primevue/select';

class PrimeVueComponentManager{
    addTo(app : App<Element>){
        app.component("Button", Button);
        app.component("Select", Select);
    }
}

export default new PrimeVueComponentManager();