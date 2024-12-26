<template>
    <div class="header flex flex-row px-2">
        <div class="flex align-items-center gap-1" style="width: 230px;">
            <Button icon="pi pi-bars" aria-label="Filter" variant="outlined" severity="contrast" />
            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
        </div>
        <div class="flex flex-grow-1 flex flex-row-reverse align-items-center gap-1">
            <div class="hidden md:block">
                <div class="flex flex-row gap-1">
                    <Chip class="overflow-hidden" >
                        <i class="pi pi-wallet" style="font-size: 1rem"></i>
                        <span class="overflow-hidden text-overflow-clip">23,453.32</span>
                        <span>р.</span>
                    </Chip>
                    <Button @click="toggleTheme" :icon="isDarkMode ? 'pi pi-sun' : 'pi pi-moon'"  aria-label="Filter" variant="outlined" severity="contrast"  />
                    <Button icon="pi pi-bell" aria-label="Filter" variant="outlined" severity="contrast"  />
                    <Button icon="pi pi-user" aria-label="Filter" variant="outlined" severity="contrast"  />
                </div>
            </div>
            <div class="flex flex-row gap-1 block md:hidden">
                <Button @click="toggleTheme" :icon="isDarkMode ? 'pi pi-sun' : 'pi pi-moon'"  aria-label="Filter" variant="outlined" severity="contrast"  />
                <Button icon="pi pi-ellipsis-v" aria-label="Filter" variant="outlined" severity="contrast"  />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Select from 'primevue/select';
import Chip from 'primevue/chip';

export default defineComponent({
    components: {
        Select,
        Chip
    },
    data() {
        return {
            selectedCity: null,
            isDarkMode : true,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ]
        };
    },
    methods: {
        toggleTheme() {
            this.isDarkMode = !this.isDarkMode;
            document.documentElement.classList.toggle("prime-dark")
        }
    }
});

</script>

<style>
.brand-column {
    width: 250px;
}
</style>