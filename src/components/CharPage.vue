<template>
  <q-layout view="hHh LpR fFf">
    <q-header class="bg-primary text-white qmb-sm">
      <q-toolbar>
        <q-toolbar-title class="my-font">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
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

    <q-page-container class="column">
      <p
      class="text-h4 text-center text-white my-font"
      >Character Sheet</p>
      <div class="row q-pa-sm bg-primary">
        <q-input 
        class="col"
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
      </div>
      <q-select filled v-model="charRace" 
      :options="options" 
      label="Race" />
      <q-list 
      separator 
      bordered>
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
      </q-list>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import router from "src/router";
import { ref } from "vue";

export default {
  setup() {
    const miniState = ref(false);
    
    const signOut = async () => {
      const { error } = await supabase.auth.signOut()
      console.log('log Out')
      if (error) console.log(error)
      console.log(signOut)
      router.push({ path: '/' })
    } 
    

    return {
      drawer: ref(false),
      miniState,

      drawerClick (e) {
        if (miniState.value) {
          miniState.value = false
          e.stopPropagation()
        }
      },

      charRace: ref(null),
      options: [
        'Human', 'Dwarf', 'Elf', 'Halfling', 'Gnome' 
      ]
    };

  },
  data() {
    return {
      newChar: '',
      Chars: [
    
      ],
    };
  },
  methods: {
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
    
  }
};
</script>

