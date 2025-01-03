import type { App } from "vue";
import Button from 'primevue/button';
import Select from 'primevue/select';
import Chip from 'primevue/chip';
import Menu from 'primevue/menu';
import Popover from 'primevue/popover';
import InputNumber from 'primevue/inputnumber';

class PrimeVueComponentManager{
    addTo(app : App<Element>){
        app.component("Button", Button);
        app.component("Select", Select);
        app.component("Chip", Chip);
        app.component("Menu", Menu);
        app.component("Popover", Popover);
        app.component("InputNumber", InputNumber);
    }
}

export default new PrimeVueComponentManager();