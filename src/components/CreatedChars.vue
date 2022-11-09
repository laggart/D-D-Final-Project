<template>
  <q-card flat bordered class="my-card q-ma-sm q-pt-mxd">
    <q-img
      class="q-ma-sm"
      v-if="character.class === 'Bard'"
      :src="'/src/assets/bard.png'"
      style="height: 200px; max-width: 350px"
      fit="contain"
    >
    </q-img>
    <q-img
      class="q-ma-sm"
      v-else-if="character.class === 'Cleric'"
      :src="'/src/assets/cleric.png'"
      style="height: 200px; max-width: 350px"
      fit="contain"
    >
    </q-img>
    <q-img
      class="q-ma-sm"
      v-else-if="character.class === 'Fighter'"
      :src="'/src/assets/fighter.png'"
      style="height: 200px; max-width: 350px"
      fit="contain"
    >
    </q-img>
    <q-img
      class="q-ma-sm"
      v-else-if="character.class === 'Ranger'"
      :src="'/src/assets/ranger.png'"
      style="height: 200px; max-width: 350px"
      fit="contain"
    >
    </q-img>
    <q-img
      class="q-ma-sm"
      v-else-if="character.class === 'Rogue'"
      :src="'/src/assets/rogue.png'"
      style="height: 200px; max-width: 350px"
      fit="contain"
    >
    </q-img>
    <q-img
      class="q-ma-sm"
      v-else-if="character.class === 'Wizard'"
      :src="'/src/assets/wizard.png'"
      style="height: 200px; max-width: 350px"
      fit="contain"
    >
    </q-img>
    <q-card-section>
      <div class="text-h6">{{ character.name }}</div>
      <div class="text-subtitle2">by {{ user.email }}</div>
      <q-list class="fit row wrap justify-start items-start content-start">
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="dark" name="las la-atom" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Race</q-item-label>
            <q-item-label caption>{{ character.race }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="dark" name="las la-dumbbell" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Str</q-item-label>
            <q-item-label caption>{{ character.strength }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="dark" name="las la-fist-raised" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Dex</q-item-label>
            <q-item-label caption>{{ character.dexterity }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="dark" name="lar la-heart" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Const</q-item-label>
            <q-item-label caption>{{ character.constitution }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="dark" name="las la-brain" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Int.</q-item-label>
            <q-item-label caption>{{ character.intelligence }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="dark" name="las la-lightbulb" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Wis</q-item-label>
            <q-item-label caption>{{ character.wisdom }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="dark" name="las la-laugh-beam" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Char</q-item-label>
            <q-item-label caption>{{ character.charisma }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="dark" name="lar la-star" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Fav</q-item-label>
            <q-item-label caption>{{ character.favourite }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn
        dense
        flat
        round
        color="dark"
        icon="las la-edit"
        :to="{ name: 'edit', params: { edit: character.id?.toString() || '' } }"
      />
      <q-btn
        dense
        flat
        round
        color="dark"
        icon="las la-trash"
        @click="removeChar(character.id)"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "./../stores/user.js";
import { useCharStore } from "./../stores/mychars.js";
export default defineComponent({
  props: {
    character: Object,
  },
  setup(props) {
    const userStore = useUserStore();
    const { user } = storeToRefs(userStore);
    const charStore = useCharStore();
    const removeChar = async (charId) => {
      try {
        await charStore.deleteChar(charId);
        await charStore.fetchChars();
      } catch (error) {
        console.log(error);
      }
    };

    return {
      user,
      removeChar,
    };
  },
});
</script>
