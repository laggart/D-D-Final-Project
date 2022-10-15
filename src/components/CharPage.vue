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

        <q-btn 
        dense 
        flat 
        round 
        icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
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
import { ref } from "vue";

export default {
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
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
       /*  {
          Name: "Char 1",
          deleteChar: false,
        },
        {
          Name: "Char 2",
          deleteChar: false,
        },
        {
          Name: "Char 3",
          deleteChar: false,
        }, */
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
    }


  }
};
</script>
