<template>
    <div v-if="isLoad" class="flex align-content-center justify-content-center flex-wrap flex-grow-1 p-2">
        <ProgressSpinner />
    </div>
    <div v-else class="flex flex-column justify-content-between flex-wrap flex-grow-1 p-2">
        <div class="flex flex-column gap-1">
            <InputText @click="clearEmailErrors()" id="email" type="text" placeholder="Почта" v-model="data.email" class="w-full" />
            <Message v-for="errorMessage in errors.email" severity="error" variant="simple" size="small">{{ errorMessage }}</Message>
            <Password @click="clearPasswordErrors()" v-model="data.password" id="password" type="password" inputClass="w-full" placeholder="Пароль" toggleMask :feedback="false" />
            <Message v-for="errorMessage in errors.password" severity="error" variant="simple" size="small">{{ errorMessage }}</Message>
        </div>
        <div class="">
            <Button :loading="isLoadLoginButton" @click="login()" class="w-full mt-2" label="Войти" raised />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import userService from "../../services/user.service";
import { useUserStore } from "../../store/user.store";
import { useRouter } from "vue-router";
import type { Login, LoginErrorMessages } from "../../models/user.model";
import type { ParamHttpErrorBody } from "../../models/http-request.model";
import type { AxiosError } from "axios";

export default defineComponent({
    data:() => {
        return{
            isLoad : false,
            isLoadLoginButton : false,
            errors: {
                password: [] as string[],
                email: [] as string[]
            },
            data: {
                email : "",
                password : ""
            } as Login
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
        async login(){
            this.isLoadLoginButton = true;

            await userService.login(this.data)
                .then((resp) => {
                    this.userStorage.set(resp.data.identityDetails);
                    this.router.push("/panel")
                })
                .catch((error : AxiosError<ParamHttpErrorBody<LoginErrorMessages>>) => {
                    if(error.response){
                        this.errors.email = error.response.data.errors.Email
                        this.errors.password = error.response.data.errors.Password
                    }
                })
                .finally(() => {
                    this.isLoadLoginButton = false;
                });
        },
        async loadUserDetails(){
            await userService.getInfo()
            .then((response => {
                this.userStorage.set(response.data);
                this.router.push("/panel")
            }))
            .catch((_er) => {

            })
        },
        setDefaultErrors(){
            this.errors = {
                password: [] as string[],
                email: [] as string[]
            }
        },
        clearEmailErrors(){
            this.errors.email = []
        },
        clearPasswordErrors(){
            this.errors.password = []
        }
    },
    computed:{
        errorsGreaterThanZero(){
            return this.errors.email.length > 0 || this.errors.password.length > 0;
        }
    }
});
</script>

<style lang="scss">

</style>