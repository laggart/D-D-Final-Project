<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
/* import { onMounted } from "vue"; */

export default defineComponent({
  name: "App",
});

/* async function onMounted() {
    
   try {
 
     await userStore.fetchUser() // here we call fetch user
 
     if (!user.value) {
 
       // redirect them to logout if the user is not there

       console.log("")
 
       router.push({ path: '/auth' });
 
     } else {
 
       // continue to dashboard
 
       router.push({ path: '/' });
 
     }
 
   } catch (e) {
 
     console.log(e)

      }
  }
  return {
    
  } */


</script>
