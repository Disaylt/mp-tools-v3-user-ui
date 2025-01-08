<template>
    <div class="flex flex-column justify-content-between flex-wrap flex-grow-1 p-2">
        <div class="flex flex-column gap-1">
            <InputText id="email" placeholder="Почта" v-model="value" class="w-full" />
            <Password v-model="value" inputClass="w-full" placeholder="Пароль" toggleMask :feedback="false" />
        </div>
        <div class="">
            <Button class="w-full" label="Войти" raised />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        return {
            value: ""
        }
    },
    components: {
    }
});
</script>

<style lang="scss"></style>