import { defineStore, acceptHMRUpdate } from 'pinia'

interface IUserDetails{
    login : string;
    email: string;
}

export const useUserStore = defineStore("user", {
    state: () => ({
        user : null as null | IUserDetails
    }),
    actions: {
        set(value : IUserDetails){
            this.user = value;
        },
        clear(){
            this.user = null;
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
  }