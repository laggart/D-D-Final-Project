<template>
  <q-layout view="hHh LpR fFf">
    <q-header class="bg-primary text-white qmb-sm">
      <q-toolbar>
        <q-toolbar-title class="my-font">
          <q-avatar>
            <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          </q-avatar>
          PixelQuest
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="!drawer || miniState"
      @click.capture="drawerClick"
      :width="200"
      :breakpoint="500"
      bordered
      class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section> My Characters </q-item-section>
          </q-item>

          <q-item active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section> Favourites </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="signOut">
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

            <q-item-section> log-out </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
        <q-btn
          dense
          round
          unelevated
          color="secondary"
          icon="chevron_left"
          @click="miniState = true"
        />
      </div>
    </q-drawer>
    <q-page-container>
      <p class="text-h4 text-center text-white my-font">Character Sheet</p>
      <div class="row wrap justify-center items-center">
        <div class="q-pa-md row items-start q-gutter-md col-6">
          <q-card flat bordered class="my-card">
            <q-img :src="url" style="height: 300px; max-width: 300px">
              <template v-slot:loading>
                <q-spinner-gears color="white" />
              </template>
            </q-img>

            <q-card-section>
              <div class="text-h6">{{"new Char name"}}</div>
              <div class="text-subtitle2">by {{"user.id"}}</div>
              <q-list>
                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon color="primary" name="local_bar" />
                  </q-item-section>
  
                  <q-item-section>
                    <q-item-label>Race</q-item-label>
                    <q-item-label caption>{{Chars.race}}</q-item-label>
                  </q-item-section>
                </q-item>
  
                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon color="red" name="local_gas_station" />
                  </q-item-section>
  
                  <q-item-section>
                    <q-item-label>Str</q-item-label>
                    <q-item-label caption>{{Chars.strength}}</q-item-label>
                  </q-item-section>
                </q-item>
  
                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon color="amber" name="local_movies" />
                  </q-item-section>
  
                  <q-item-section>
                    <q-item-label>Dex</q-item-label>
                    <q-item-label caption>{{Chars.dexterity}}</q-item-label>
                  </q-item-section>
                </q-item>
  
                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon color="amber" name="local_movies" />
                  </q-item-section>
  
                  <q-item-section>
                    <q-item-label>Const</q-item-label>
                    <q-item-label caption>{{Chars.constitution}}</q-item-label>
                  </q-item-section>
                </q-item>
  
                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon color="amber" name="local_movies" />
                  </q-item-section>
  
                  <q-item-section>
                    <q-item-label>Int</q-item-label>
                    <q-item-label caption>{{Chars.intelligense}}</q-item-label>
                  </q-item-section>
                </q-item>
  
                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon color="amber" name="local_movies" />
                  </q-item-section>
  
                  <q-item-section>
                    <q-item-label>Wis</q-item-label>
                    <q-item-label caption>{{Chars.wisdom}}</q-item-label>
                  </q-item-section>
                </q-item>
  
                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon color="amber" name="local_movies" />
                  </q-item-section>
  
                  <q-item-section>
                    <q-item-label>Char</q-item-label>
                    <q-item-label caption>{{Chars.charisma}}</q-item-label>
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
              v-model="charRace"
              :options="races"
              label="Race"
            />
            <q-select
              @change="imageChanger()"
              class="col-12-xs col-sm-6 q-pa-sm bg-secondary"
              filled
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
import { ref, watch, defineComponent, reactive } from "vue";
import { useQuasar } from "quasar";
import { storeToRefs } from "pinia";
import { useUserStore } from "./../stores/user.js";
import { onMounted } from "vue";
import { useCharStore } from "./../stores/mychars.js";
/* import { useCharStore } from "./../stores/mychars.js" */

export default defineComponent({
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const miniState = ref(false);
    const url = ref("./src/assets/placeholder.png");
    const userStore = useUserStore();
    const charStore = useCharStore();
    const { user } = storeToRefs(userStore);
    const charName = ref("")
    const charClass = ref(null);
    const newChar = ref({});
    const charRace = ref(null);
    const strength = ref("")
    const dexterity = ref("")
    const constitution = ref("")
    const intelligence = ref("")
    const wisdom = ref("")
    const charisma = ref("")
    const addChar = async () => {
          const newChar = {
            user_id: user.value.id,
            name: charName.value,
            race: charRace.value,
            class: charClass.value,
            strength: strength.value,
            dexterity: dexterity.value, 
            constitution: constitution.value, 
            intelligence: intelligence.value,
            wisdom: wisdom.value,
            charisma: charisma.value,
            deleteChar: false,
          };
          try {
          await charStore.createChars (newChar);
          await charStore.fetchChars ();
          charName.value
        } catch (error) {
          console.log(error)
        };       
      };

    const removeChar = async(charId) => {
      try {
        await charStore.deleteChar(charId)
        await charStore.fetchChars()       
      } catch (error) {
        console.log(error)
      }
    };


    let Chars = reactive([]);

    watch(
      () => charClass.value,
      (newValue, oldValue) => {
        if (newValue) url.value = newValue.url;
      }
    );

    const signOut = async () => {
      try {
        await userStore.signOut();
        userStore.user = null;
      } catch (error) {
        console.log(error);
      }

      $q.notify({
        color: "dark",
        textColor: "white",
        icon: "cloud_done",
        message: "You have succesfully logged out!",
      });

      router.push({ path: "/" });
    };

    onMounted(async () => {
      try {
        await charStore.fetchChars()
      }
      catch(error){
        console.log(error)
      }
    });



    return {
      drawer: ref(false),
      miniState,
      signOut,
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
      removeChar,
      Chars,
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      /*    imageChanger(charClass) {
          url.value = charClass.url
        console.log(charClass)
      }, */

      drawerClick(e) {
        if (miniState.value) {
          miniState.value = false;
          e.stopPropagation();
        }
      },

      /* charClass: ref(null), */
      options: [
        {
          label: "Bard",
          url: "./src/assets/placeholder.png",
        },
        {
          label: "Cleric",
          url: "./src/assets/quasar-logo-vertical.svg",
        },
        {
          label: "Fighter",
          url: "",
        },
        {
          label: "Ranger",
          url: "",
        },
        {
          label: "Rogue",
          url: "",
        },
        {
          label: "Wizard",
          url: "",
        },
      ],

      charRace: ref(null),
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
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
  background-color: $dark
  color: white
</style>
