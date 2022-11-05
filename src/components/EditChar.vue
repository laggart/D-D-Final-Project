<template>
   
  <div class="q-pa-md flex flex-center"
  style="min-width: 400px"
  >
    <q-form @submit="editChar">
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
          <q-btn 
          label="Update" 
          type="submit" 
          color="teal" 
          />
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

    const route = useRoute();
    const charEdited = ref({});
    const charName = ref(charToEdit.name);
    const charClass = ref(null);
    const charRace = ref(null);
    const strength = ref("");
    const dexterity = ref("");
    const constitution = ref("");
    const intelligence = ref("");
    const wisdom = ref("");
    const charisma = ref("");
    const charId = ref("")

    const fetchChars = async() => {
      await charStore.fetchChars()
    };

    const editCharId = route.params.edit
    console.log(editCharId)

    const getChar = async() => {
      await charStore.fetchCharsById(editCharId)
      charName.value = charToEdit._object.charToEdit[0].name
      charClass.value = charToEdit._object.charToEdit[0].class
      charRace.value = charToEdit._object.charToEdit[0].race
      strength.value = charToEdit._object.charToEdit[0].strength
      dexterity.value = charToEdit._object.charToEdit[0].dexterity
      constitution.value = charToEdit._object.charToEdit[0].constitution
      intelligence.value = charToEdit._object.charToEdit[0].intelligence
      wisdom.value = charToEdit._object.charToEdit[0].wisdom
      charisma.value = charToEdit._object.charToEdit[0].charisma
      charId.value = charToEdit._object.charToEdit[0].id
      console.log(charToEdit.value)
    }

    onMounted(()=> getChar())

    const editChar = async () => {
      const charEdited = {
        user_id: user.value.id,
        id: charId.value,
        charName: charName.value,
        charRace: charRace.value,
        class: charClass.value.label,
        strength: strength.value,
        dexterity: dexterity.value,
        constitution: constitution.value,
        intelligence: intelligence.value,
        wisdom: wisdom.value,
        charisma: charisma.value,
        deleteChar: false,
      };
      try {
        await charStore.editChar(charId.value, charEdited);
        await charStore.fetchChars();
        $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Update Submitted'
          })
      } catch (error) {
        console.log(error)
      }
    };

    fetchChars()

    return {
      strength,
      dexterity,
      constitution,
      intelligence,
      wisdom,
      charisma,
      charClass,
      charName,
      charRace,
      charToEdit,
      editChar,
      charEdited,

      options: ["Bard", "Cleric", "Fighter", "Ranger", "Rogue", "Wizard"],
      races: ["Dwarf", "Elf", "Halfling", "Human", "Gnome"],
    };
  },
});
</script>
