<template>
   
  <div class="q-pa-md flex flex-center"
  style="min-width: 400px"
  >
    <q-form @submit="addChar">
      <q-input
        class="col-12-xs col-sm-6 q-pa-sm bg-secondary"
        filled
        clearable
        dense
        bg-color="secondary"
        v-model="charName"
        label="New Character Name"
      >
      </q-input>
      <q-select
        class="col-12-xs col-sm-6 q-pa-sm bg-secondary"
        filled
        clearable
        v-model="charRace"
        :options="races"
        label="Race"
      />
      <q-select
        class="col-12-xs col-sm-6 q-pa-sm bg-secondary"
        filled
        clearable
        v-model="charClass"
        :options="options"
        label="Class"
      />
      <q-input
        class="col-12-xs col-sm-6 q-pa-sm bg-secondary"
        clearable
        dense
        hint="Insert value betwewn 8-15"
        v-model="strength"
        label="Strength"
      />
      <q-input
        class="col-12-xs col-sm-6 q-pa-sm bg-secondary"
        clearable
        dense
        hint="Insert value betwewn 8-15"
        v-model="dexterity"
        label="Dexterity"
      />
      <q-input
        class="col-12-xs col-sm-3 q-pa-sm bg-secondary"
        clearable
        dense
        hint="Insert value betwewn 8-15"
        v-model="constitution"
        label="Constitution"
      />
      <q-input
        class="col-12-xs col-sm-3 q-pa-sm bg-secondary"
        clearable
        dense
        hint="Insert value betwewn 8-15"
        v-model="intelligence"
        label="Intelligence"
      />
      <q-input
        class="col-12-xs col-sm-3 q-pa-sm bg-secondary"
        clearable
        dense
        hint="Insert value betwewn 8-15"
        v-model="wisdom"
        label="Wisdom"
      />
      <q-input
        class="col-12-xs col-sm-3 q-pa-sm bg-secondary"
        clearable
        dense
        v-model="charisma"
        label="Charisma"
      />
      <q-list separator bordered>
        <div>
          <q-btn label="Update" type="submit" color="teal" />
        </div>
      </q-list>
    </q-form>
   
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { ref, watch, defineComponent, reactive, onMounted } from "vue";
import { useQuasar } from "quasar";
import { storeToRefs } from "pinia";
import { useUserStore } from "./../stores/user.js";
import { useCharStore } from "./../stores/mychars.js";

export default defineComponent({
  
  setup() {
    const $q = useQuasar();
    const userStore = useUserStore();
    const charStore = useCharStore();
    const { user } = storeToRefs(userStore);
    const { charToEdit } = storeToRefs(charStore);
    const charName = ref("");
    const charClass = ref(null);
    const charRace = ref(null);
    const strength = ref("");
    const dexterity = ref("");
    const constitution = ref("");
    const intelligence = ref("");
    const wisdom = ref("");
    const charisma = ref("");
    const fetchCharsById = async() => {
      await charStore.fetchCharsById()
    };
    
    const route = useRoute();
    const editCharId = route.params.edit 
    console.log(editCharId)

    const getChar = async() => {
      await charStore.fetchCharsById(editCharId)
      console.log(charToEdit.value)
    }

    onMounted(()=> getChar())
    
    const editChar = async (charId) => {
      try {
        await charStore.editChar(charId);
        await charStore.fetchChars();   
      } catch (error) {
        console.log(error);
        $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
      }



    };

   /* 
      1. RECOGER EL ID DEL PERSONAJE POR ROUTER PARAMS
       {{ $route.params.id }}
      2. HACER EL FETCH POR ID EN EL STORE DE mychars.js ## importante
      3. IMPLEMENTAR LA FUNCION DE FETCH POR ID EN ESTA VISTA 
      4. IGUALAR LOS ATRIBUTOS DE LPERSONAJE EN LAS VARIABLES REFERENCIADAS 
      5. IGUALARLAS A LOS VMODELS  (QUE CREO QUE YA LO TIENES PLANTEADO ASI)
      6. HACER FUNCION DE EDITAR (VERBO PUT) EN EL STORE DEL PERSONAJE mychars.js
      7. LLAMARLA EN ESTA VISTA AL CLICKEAR EL BOTON DE ACTUALIZAR 
      8. HACER UN FETCH GLOBAL AL CLICKEAR EN ESE MISMO BOTON PARA TRAERTE TODO ACTUALIZADO.
      9. ENJOY
   */

    fetchChars()
    

    return {
      strength,
      dexterity,
      constitution,
      intelligence,
      wisdom,
      charisma,
      charClass,
      characters,
      charName,
      charRace,
      editChar,

      options: ["Bard", "Cleric", "Fighter", "Ranger", "Rogue", "Wizard"],
      races: ["Dwarf", "Elf", "Halfling", "Human", "Gnome"],
    };
  },
});
</script>
