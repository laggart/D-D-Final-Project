<template>
  <div class="q-pa-md q-ma-md glass fixed-center" style="min-width: 300px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="email"
        label="User e-mail *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Password *"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your User Name',
          (val) => (val !== null && val !== '') || 'Invalid Password',
        ]"
      />

      <div class="row justify-center">
        <q-btn 
        label="Submit" 
        type="submit" 
        color="primary" 
        />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          outline
          class="q-ml-sm "
        />
      </div>
      <div>forgot your password</div>
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { defineComponent, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from './../stores/user.js'


  export default defineComponent ({
    setup () {
      const $q = useQuasar()
      const email = ref(null)
      const password = ref(null)
      const router = useRouter()
      const userStore = useUserStore()
      const { user } = storeToRefs(userStore)
      


      console.log(user)
      const onSubmit = async () => {
        try {
          await userStore.signIn ( email.value, password.value )
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
          
          router.push({ path: '/Alt/User'})
        }
        catch (error) {
          console.log(error)
        }


        }

      const onReset = () => {
        email.value = null
        password.value = null
      }

      return {
        email,
        password,
        onSubmit,
        onReset

      }

    }
  })
</script>
