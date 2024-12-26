import type { App } from "vue";
import Button from 'primevue/button';
import Select from 'primevue/select';
import Chip from 'primevue/chip';

class PrimeVueComponentManager{
    addTo(app : App<Element>){
        app.component("Button", Button);
        app.component("Select", Select);
        app.component("Chip", Chip);
    }
}

export default new PrimeVueComponentManager();