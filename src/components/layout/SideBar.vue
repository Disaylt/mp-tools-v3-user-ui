<template>
    <div class="flex flex-column gap-2 p-2">
        <div v-for="item in 30">{{ item }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {

        };
    },
    computed:{
    },
    methods:{
    }
});
</script>

<style>
</style>