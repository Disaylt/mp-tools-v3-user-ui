<template>
    <div v-if="isLoad" class="flex align-content-center justify-content-center flex-wrap flex-grow-1 p-2">
        <ProgressSpinner />
    </div>
    <div v-else class="flex flex-column justify-content-between flex-wrap flex-grow-1 p-2">
        <div class="flex flex-column gap-1">
            <InputText id="email" type="text" placeholder="Почта" v-model="value" class="w-full" />
            <Password v-model="value" id="password" type="password" inputClass="w-full" placeholder="Пароль" toggleMask :feedback="false" />
        </div>
        <div class="">
            <Button class="w-full mt-2" label="Войти" raised />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import userService from "../../services/user.service";
import { useUserStore } from "../../store/user.store";
import { useRouter } from "vue-router";

export default defineComponent({
    data:() => {
        return{
            isLoad : false,
            value : ""
        }
    },
    setup() {
        const userStorage = useUserStore();
        const router = useRouter();
        
        return {
            router,
            userStorage
        }
    },
    async mounted() {
        this.isLoad = true;
        await this.loadUserDetails();
        this.isLoad = false;
    },
    methods:{
        async loadUserDetails(){
            await userService.getInfo()
            .then((response => {
                const user = {
                    login: response.data.name,
                    email: response.data.email
                }
                this.userStorage.set(user);
                this.router.push("/panel")
            }))
            .catch((_er) => {

            })
        }
            
    },
    computed:{
    }
});
</script>

<style lang="scss">

</style>