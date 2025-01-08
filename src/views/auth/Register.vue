<template>
 <div class="flex flex-column justify-content-between flex-wrap flex-grow-1 p-2">
        <div class="flex flex-column gap-1">
            <InputText id="username" placeholder="Логин" v-model="value" class="w-full" />
            <InputText id="email" placeholder="Почта" v-model="value" class="w-full mb-2" />
            <Password v-model="value" type="password" placeholder="Пароль" inputClass="w-full" toggleMask promptLabel="Введите пароль" weakLabel="Слишком легкий"
                mediumLabel="Средней сложности" strongLabel="Надежный" />
            <Password v-model="value" inputClass="w-full" placeholder="Повторите пароль" toggleMask :feedback="false" />
        </div>
        <div class="">
            <Button class="w-full" label="Зарегистрироваться" raised />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data: () => {
        return{
            value : ""
        }
    },
    components: {
    }});
</script>

<style lang="scss">
</style>