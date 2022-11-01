<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue"
import { onMounted } from "vue"
import { storeToRefs } from 'pinia'
import { useUserStore } from 'stores/user'
import { useRouter } from 'vue-router'

export default defineComponent({

setup (props, { emit }) {

  //TODO DO SUSTITUIR METODO POR METATAG DE ROUTER VUE || PREGUNTAR A PABLO
  /* 
  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)
  const router = useRouter()
  onMounted(async () => {
    console.log('mounted')
    console.log(user.value)
    try {
      await userStore.fetchUser() // here we call fetch user
      if (!user.value) {
  
        // redirect them to logout if the user is not there
  
        console.log("No estas logeado")
  
        router.push({ path: '/SignIn' });
  
      } else {
  
        // continue to dashboard
  
        router.push({ path: '/Alt/User' });
  
      }
  
    } catch (e) {
  
      console.log(e)
  
    }
    
   }) */

}


  /* name: "App", */
});

    
 

</script>
