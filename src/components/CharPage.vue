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

              <q-item-section>
                Inbox
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Star
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Send
              </q-item-section>
            </q-item>

            <q-item 
            clickable 
            v-ripple
            @click='signOut'
            >
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>

              <q-item-section>
                log-out
              </q-item-section>
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
      <p
      class="text-h4 text-center text-white my-font"
      >Character Sheet</p>
      <div class=" row wrap justify-center items-center" >
        <div class="col-6">
          <q-img
            :src="url"
            style="height: 300px; max-width: 200px"
          >
            <template v-slot:loading>
              <q-spinner-gears color="white" />
            </template>
          </q-img>
        </div>    
        <div class="q-pa-md col-12-xs col-sm-6 q-pa-sm">
           
           <q-input 
            filled
            bg-color="secondary"
            v-model="newChar"
            @keyup.enter="addChar" 
            label="New Character Name"
            dense
            >

            <template v-slot:append>
              <q-btn
              @click="addChar" 
              round 
              dense 
              flat 
              icon="add" />
            </template>
            </q-input>
            <q-item
              v-for="(char, index) in Chars"
              :key="char.title"
              @click="char.deleteChar = !char.deleteChar"
              tag="label"
              v-ripple
            >
              <q-item-section avatar>
                <q-checkbox 
                v-model="char.deleteChar" 
                val="teal" 
                color="teal" 
                />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ char.Name }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-btn 
                  @click.stop="removeChar(index)"
                  round color="negative" 
                  icon="delete" 
                  size="xs" />
                </q-item-section>
            </q-item>
            
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
            <q-list 
            separator 
            bordered>

            <div>
              <q-btn 
              label="Submit" 
              type="submit" 
              color="teal"
              />
            </div>
              
            </q-list>
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
import { storeToRefs } from 'pinia'
import { useUserStore } from './../stores/user.js'

export default defineComponent({
  setup() {

    const $q = useQuasar()
    const router = useRouter()
    const miniState = ref(false);
    const url = ref('src/assets/placeholder.png')
    const userStore = useUserStore()
    const { user } = storeToRefs(userStore)
    const charClass = ref(null)
    const newChar = ref('')
    let Chars = reactive ([

      ],)


    watch(()=> charClass.value, (newValue, oldValue)=> {
      if (newValue) url.value = newValue.url
    })

    const signOut = async () => {
      try {
        await userStore.signOut ()
        userStore.user = null
      }
      catch (error) {
        console.log(error)
      }

      $q.notify({
            color: 'dark',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'You have succesfully logged out!'
          })

      router.push({ path: '/'})
          
    }   

    return {
      drawer: ref(false),
      miniState,
      signOut,
      url,
      strength: ref(''),
      dexterity: ref(''),
      constitution: ref(''),
      intelligence: ref(''),
      wisdom: ref(''),
      charisma: ref(''),
      charClass,
      newChar,
      addChar,
      removeChar,
      Chars,
  /*    imageChanger(charClass) {
          url.value = charClass.url
        console.log(charClass)
      }, */

      drawerClick (e) {
        if (miniState.value) {
          miniState.value = false
          e.stopPropagation()
        }
      },

      /* charClass: ref(null), */
      options: [
      { 
       label: 'Bard',
       url: 'src/assets/placeholder.png', 
      },
      { 
       label: 'Cleric',
       url: 'src/assets/quasar-logo-vertical.svg', 
      },
      { 
       label: 'Fighter',
       url: '', 
      },
      { 
       label: 'Ranger',
       url: '', 
      },
      { 
       label: 'Rogue',
       url: '', 
      },
      { 
       label: 'Wizard',
       url: '', 
      },   
      ],

      charRace: ref(null),
      races: [
        'Dwarf', 'Elf', 'Halfling', 'Human', 'Gnome'
      ]

    };
    function addChar() { 
      console.log(newChar.value)
      Chars.push({
        Name: newChar.value,
        deleteChar: false
      })
      newChar.value = ''
    };

    function removeChar(index) {

        this.$q.dialog({
          title: 'Confirm',
          message: 'Would you delete this character?',
          cancel: true,
          persistent: true
        }).onOk(() => {
          console.log(this.Chars)
          this.Chars.splice(index, 1)
          this.$q.notify('Deleted')
        })
        };




    
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

