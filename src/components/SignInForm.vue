<template>
  <div class="q-pa-md q-ma-md signInForm" style="max-width: 400px">
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

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
      <div>forgot your password</div>
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { supabase } from 'src/supabase'
import { defineComponent, ref } from 'vue'


  export default defineComponent ({
    setup () {
      const $q = useQuasar()

      const email = ref(null)
      const password = ref(null)
      const router = useRouter()


      const onSubmit = async () => {
          const { data, error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
          })
          if (data) console.log(data)
          if (error) console.log(error)
        

          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })

          router.push({ path: '/Alt/User'})

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
<style>
.signInForm {
  background-color: rgb(195, 216, 216);
  border-radius: 20px;
}
</style>
