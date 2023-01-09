<template>
<div class="q-pa-md q-ma-md glass fixed-center" style="min-width: 300px">
  <q-form
        @submit.prevent="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
       style="max-width: 400px">
          
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-input
          filled
          class="q-my-md"
          v-model="email"
          type="email"
          hint="Please insert a valid mail"
          label="E-mail"
        />
        <q-input
          v-model="password"
          filled
          label="Password"
          :type="isPwd ? 'password' : 'text'"
          hint="Please insert a valid password"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </div>

      <div class="q-pa-md q-gutter-sm">
        <q-btn type="submit" color="primary" class="full-width" label="Submit" />
      </div>
    </div>
  </q-form>
  
</div>
</template>
<script>
import { ref } from "vue";
/* import { onSubmit } from 'vue' */
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useUserStore } from './../stores/user.js'

export default {
  setup() {   
    const name = ref('')
    const lastName = ref ('')
    const isPwd = ref('')
    const email = ref('')
    const userName = ref('')
    const password = ref('') 
    
    const router = useRouter()
    
    const userStore = useUserStore()
    
    const { user } = storeToRefs(userStore)
    
    async function onSubmit() {
    
       await userStore.signUp ( email.value, password.value)
      try {
        $q.notify('Please check your mail')
        router.push({ path: '/User' });
    
      } catch (e) {
    
        console.log(e)
    
      }
    };  
      return {
        name,
        lastName,
        password,
        isPwd,
        email,
        userName,
        onSubmit
      };

  
  },
};


</script>
<style>

.signInForm {
  background-color: rgb(195, 216, 216);
  border-radius: 20px;
}
</style>
