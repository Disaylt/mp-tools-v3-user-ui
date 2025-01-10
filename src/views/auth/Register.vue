<template>
 <div class="flex flex-column justify-content-between flex-wrap flex-grow-1 p-2">
        <div class="flex flex-column gap-1">
            <InputText @click="clearLoginErrors" id="username" placeholder="Логин" v-model="newUser.login" class="w-full" />
            <Message v-for="errorMessage in errors.login" severity="error" variant="simple" size="small">{{ errorMessage }}</Message>

            <InputText @click="clearEmailErrors" id="email" placeholder="Почта" v-model="newUser.email" class="w-full" />
            <Message v-for="errorMessage in errors.email" severity="error" variant="simple" size="small">{{ errorMessage }}</Message>
            
            <Password @click="clearPasswordErrors" class="mt-2" :invalid="checkEqualsPasswrod" v-model="newUser.password" type="password" placeholder="Пароль" inputClass="w-full" toggleMask promptLabel="Введите пароль" weakLabel="Слишком легкий"
                mediumLabel="Средней сложности" strongLabel="Надежный" />
            <Message v-for="errorMessage in errors.password" severity="error" variant="simple" size="small">{{ errorMessage }}</Message>
            <Message v-if="checkEqualsPasswrod" severity="error" variant="simple" size="small">Пароли не совпадают.</Message>
            
            <Password v-model="repeatPassword" inputClass="w-full" placeholder="Повторите пароль" toggleMask :feedback="false" />
        </div>
        <div class="mt-2 gap-2 flex flex-column gap-1">
            <Button :disabled="checkEqualsPasswrod" :loading="isLoadRegisterButton" @click="register()" class="w-full" label="Зарегистрироваться" raised />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { NewUser, RegisterErrorMessages } from "../../models/user.model";
import userService from "../../services/user.service";
import { useRouter } from "vue-router";
import type { AxiosError } from "axios";
import type { ParamHttpErrorBody } from "../../models/http-request.model";
import { useAuthTabStore } from "../../store/auth-tab.store";
import authTabService from "../../services/auth-tab.service";

export default defineComponent({
    setup() {
        const router = useRouter();
        const authTabStore = useAuthTabStore();

        return{
            router,
            authTabStore,
            authTabService
        }
    },
    data: () => {
        return{
            isLoadRegisterButton: false as boolean,
            repeatPassword: "" as string,
            errors: {
                login: [] as string[],
                password: [] as string[],
                email: [] as string[]
            },
            newUser : {
                login: "",
                email: "",
                password: ""
            } as NewUser
        }
    },
    methods:{
        async register(){
            this.isLoadRegisterButton = true;
            this.setDefaultErrors();
            await userService.register(this.newUser)
                .then(() => {

                    const routeTab = this.authTabService.getLogin();
                    this.authTabStore.set(routeTab.route);
                    this.router.push(routeTab.route)
                })
                .catch((er : AxiosError<ParamHttpErrorBody<RegisterErrorMessages>>) => {
                    if(er.response){
                        this.errors.email = er.response.data.errors.Email;
                        this.errors.login = er.response.data.errors.Login;
                        this.errors.password = er.response.data.errors.Password;
                    }
                })
                .finally(()=> {
                    this.isLoadRegisterButton = false;
                });
        },
        setDefaultErrors(){
            this.errors = {
                login: [] as string[],
                password: [] as string[],
                email: [] as string[]
            }
        },
        clearLoginErrors(){
            this.errors.login = []
        },
        clearEmailErrors(){
            this.errors.email = []
        },
        clearPasswordErrors(){
            this.errors.password = []
        }
    },
    computed: {
        checkEqualsPasswrod() : boolean{
            return this.repeatPassword !== this.newUser.password && this.repeatPassword.length > 0;
        }
    }});
</script>

<style lang="scss">
</style>