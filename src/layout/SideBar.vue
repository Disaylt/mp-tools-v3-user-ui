<template>
    <div class="p-2">
        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Select from 'primevue/select';


export default defineComponent({
    components:{
        Select
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
    }
});
</script>

<style>
</style>