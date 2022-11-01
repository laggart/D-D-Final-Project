<template>
    <q-layout class="flex flex-center">
          <CreatedChars v-for="character in characters" :character="character" :key="character.id"/>
    </q-layout>
</template>

<script>
import { useRouter } from "vue-router"
import { ref, watch, defineComponent, reactive, onMounted } from "vue";
import { useQuasar } from "quasar";
import { storeToRefs } from "pinia";
import { useUserStore } from "./../stores/user.js";
import { useCharStore } from "./../stores/mychars.js";
import CreatedChars from './CreatedChars.vue'


export default defineComponent({
  components: {
    CreatedChars
  },
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const userStore = useUserStore();
    const { user } = storeToRefs(userStore);
    
    const charStore = useCharStore();
    const { characters } = storeToRefs(charStore);

    const fetchChars = async() => {
      await charStore.fetchChars()
    }
    fetchChars()

    const removeChar = async (charId) => {
      try {
        await charStore.deleteChar(charId);
        await charStore.fetchChars();
      } catch (error) {
        console.log(error);
      }
    };

    return {
      drawer: ref(false),
      removeChar,
      characters,
    };
  },
});
</script>
<style></style>
