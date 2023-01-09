<template>
    <q-layout 
    view="hHh lpR fFf"
    class="bg-dark"
    >
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
          <q-item to="./mycharacters" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section> My Characters </q-item-section>
          </q-item>

          <q-item to="./User" active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="las la-magic" />
            </q-item-section>

            <q-item-section> Create New </q-item-section>
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
      <q-page-container class="dark bg-land">
        <router-view />
      </q-page-container>
  
    </q-layout>
  </template>

<script>
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import {ref, watch, defineComponent} from "vue"
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";


export default defineComponent({
  setup() {
    const userStore = useUserStore();
    const { user } = storeToRefs(userStore);
    const $q = useQuasar();
    const router = useRouter();
    const miniState = ref(false);
    const signOut = async () => {
      try {
        await userStore.signOut();
        userStore.user = null;
      } catch (error) {
        console.log(error);
      }

      $q.notify({
        color: 'green-4',
        textColor: "white",
        icon: "cloud_done",
        message: "You have succesfully logged out!",
      });

      router.push({ path: "/" });
    };

    return{
      drawer: ref(false),
      miniState,
      signOut,

      drawerClick(e) {
        if (miniState.value) {
          miniState.value = false;
          e.stopPropagation();
        }
      },
    }
  }
})
</script>