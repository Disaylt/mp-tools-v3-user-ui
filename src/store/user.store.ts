import { defineStore, acceptHMRUpdate } from 'pinia'

interface IUserDetails{
    login : string;
    email: string;
}

export const useAppThemeStore = defineStore("user", {
    state: () => ({
        user : null as null | IUserDetails
    }),
    actions: {
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAppThemeStore, import.meta.hot))
  }