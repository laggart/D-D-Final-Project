// /store/user.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) this.user = user;
    },
    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    async signIn ( email, password ) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        })
        if (data) this.user = data.user 
        console.log(data)
        if (error) console.log(error)      
      }
      catch (error) {
        console.log(error)
      }
    },
    async signOut() {
      const { error } = await supabase.auth.signOut()
      if (error) console.log(error)
      /* else this.user = null */

    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
  },
});
