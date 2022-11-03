<template>
  <q-layout view="hHh LpR fFf">
    <q-page-container>
      <p class="text-h4 text-center text-white my-font">Character Sheet</p>
      <div class="row justify-around items-start">
        <div class="q-pa-md row q-gutter-md col-auto">
          <q-card flat bordered class="my-card q-pt-md">
            <q-img
              :src="url"
              style="height: 200px; max-width: 350px"
              fit="contain"
            >
              <template v-slot:loading>
                <q-spinner-gears color="white" />
              </template>
            </q-img>

            <q-card-section>
              <div class="text-h6">{{ charName }}</div>
              <div class="text-subtitle2">by {{ "user.email" }}</div>
              <q-list
                class="fit row wrap justify-start items-start content-start"
              >
                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon color="dark" name="las la-atom" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Race</q-item-label>
                    <q-item-label caption>{{ charRace }}</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon color="dark" name="las la-dumbbell" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Str</q-item-label>
                    <q-item-label caption>{{ strength }}</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon color="dark" name="las la-fist-raised" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Dex</q-item-label>
                    <q-item-label caption>{{ dexterity }}</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon color="dark" name="lar la-heart" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Const</q-item-label>
                    <q-item-label caption>{{ constitution }}</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon color="dark" name="las la-brain" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Int.</q-item-label>
                    <q-item-label caption>{{ intelligence }}</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon color="dark" name="las la-lightbulb" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Wis</q-item-label>
                    <q-item-label caption>{{ wisdom }}</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon color="dark" name="las la-laugh-beam" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Char</q-item-label>
                    <q-item-label caption>{{ charisma }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
        <div class="q-pa-md col-12-xs col-sm-6 q-pa-sm">
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
              <!-- <template v-slot:append>
                <q-btn @click="charName" round dense flat icon="add" />
              </template> -->
            </q-input>
            <!--  <q-item
              v-for="(char, index) in Chars"
              :key="char.title"
              @click="char.deleteChar = !char.deleteChar"
              tag="label"
              v-ripple
            >
              <q-item-section avatar>
                <q-checkbox v-model="char.deleteChar" val="teal" color="teal" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ char.name }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  @click.stop="removeChar(index)"
                  round
                  color="negative"
                  icon="delete"
                  size="xs"
                />
              </q-item-section>
            </q-item> -->

            <q-select
              class="col-12-xs col-sm-6 q-pa-sm bg-secondary"
              filled
              clearable
              v-model="charRace"
              :options="races"
              label="Race"
            />
            <q-select
              @change="imageChanger()"
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
                <q-btn label="Submit" type="submit" color="teal" />
              </div>
            </q-list>
          </q-form>
        </div>
      </div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, watch, defineComponent, reactive, onMounted } from "vue";
import { useQuasar } from "quasar";
import { storeToRefs } from "pinia";
import { useUserStore } from "./../stores/user.js";
import { useCharStore } from "./../stores/mychars.js";

export default defineComponent({
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const url = ref("./../src/assets/placeholder.png");
    const userStore = useUserStore();
    const charStore = useCharStore();
    const { user } = storeToRefs(userStore);
    const { characters } = storeToRefs(charStore);
    const charName = ref("");
    const charClass = ref(null);
    const newChar = ref({});
    const charRace = ref(null);
    const strength = ref("");
    const dexterity = ref("");
    const constitution = ref("");
    const intelligence = ref("");
    const wisdom = ref("");
    const charisma = ref("");
    const addChar = async () => {
      const newChar = {
        user_id: user.value.id,
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
        await charStore.createChars(newChar);
        await charStore.fetchChars();
        charName.value = "";
      } catch (error) {
        console.log(error);
      }
    };

    let Chars = reactive([]);

    watch(
      () => charClass.value,
      (newValue, oldValue) => {
        if (newValue) url.value = newValue.url;
      }
    );

    onMounted(async () => {
      try {
        await charStore.fetchChars();
      } catch (error) {
        console.log(error);
      }
    });

    return {
      url,
      strength,
      dexterity,
      constitution,
      intelligence,
      wisdom,
      charisma,
      charClass,
      newChar,
      addChar,
      Chars,
      characters,
      charName,
      charRace,

      options: [
        {
          label: "Bard",
          url: "./src/assets/bard.png",
        },
        {
          label: "Cleric",
          url: "./src/assets/cleric.png",
        },
        {
          label: "Fighter",
          url: "./src/assets/fighter.png",
        },
        {
          label: "Ranger",
          url: "./src/assets/ranger.png",
        },
        {
          label: "Rogue",
          url: "./src/assets/rogue.png",
        },
        {
          label: "Wizard",
          url: "./src/assets/wizard.png",
        },
      ],
      races: ["Dwarf", "Elf", "Halfling", "Human", "Gnome"],
    };
    /* function addChar() {
      
      console.log(newChar.value);
      Chars.push({
        name: newChar.value,
        race: charRace.value,
        class: charClass.value,
        strength: strength.value,
        dexterity: dexterity.value, 
        constitution: constitution.value, 
        intelligence: intelligence.value,
        wisdom: wisdom.value,
        charisma: charisma.value,
        deleteChar: false,
      });
      newChar.value = "";
    } */

    /*  function removeChar(index) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you delete this character?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          console.log(this.Chars);
          this.Chars.splice(index, 1);
          this.$q.notify("Deleted");
        });
    } */
  },
  /*   data() {
    return {
      newChar: '',
      Chars: [
    
      ],
    }; */
  /*  }, */
  /* methods: {
    removeChar(index) {

      this.$q.dialog({
        title: 'Confirm',
        message: 'Would you delete this character?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.Chars.splice(index, 1)
        this.$q.notify('Deleted')
      })
    },
    addChar(){
      this.Chars.push({
        Name: this.newChar,
        deleteChar: false
      })
      this.newChar = ''
    },
    
  } */
});
</script>
<style lang="sass" scoped></style>
