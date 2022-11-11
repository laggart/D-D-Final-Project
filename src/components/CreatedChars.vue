<template>
  <q-card flat bordered class="my-card q-ma-sm q-pt-mxd">
    <q-img
      class="q-ma-sm"
      v-if="character.class === 'Bard'"
      :src="'https://dhgmmcwbveboncxmlqtd.supabase.co/storage/v1/object/sign/characters/bard.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjaGFyYWN0ZXJzL2JhcmQucG5nIiwiaWF0IjoxNjY4MTc2MDk5LCJleHAiOjE5ODM1MzYwOTl9.JnmrvBGDhye9GhaB0kjw7phn_evGvLFuQh423sGux5o'"
      style="height: 200px; max-width: 350px"
      fit="contain"
    >
    </q-img>
    <q-img
      class="q-ma-sm"
      v-else-if="character.class === 'Cleric'"
      :src="'https://dhgmmcwbveboncxmlqtd.supabase.co/storage/v1/object/sign/characters/cleric.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjaGFyYWN0ZXJzL2NsZXJpYy5wbmciLCJpYXQiOjE2NjgxNzYwOTgsImV4cCI6MTk4MzUzNjA5OH0.DuVQS9UtcgG062tCcFSWb0H9OwyR_JF7YVGJftniML4'"
      style="height: 200px; max-width: 350px"
      fit="contain"
    >
    </q-img>
    <q-img
      class="q-ma-sm"
      v-else-if="character.class === 'Fighter'"
      :src="'https://dhgmmcwbveboncxmlqtd.supabase.co/storage/v1/object/sign/characters/Fighter.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjaGFyYWN0ZXJzL0ZpZ2h0ZXIucG5nIiwiaWF0IjoxNjY4MTc2MTA0LCJleHAiOjE5ODM1MzYxMDR9.sebdGlX0XfyGoSF4ShBZuq4cxZxBcMb0n-lzrcvLpHQ'"
      style="height: 200px; max-width: 350px"
      fit="contain"
    >
    </q-img>
    <q-img
      class="q-ma-sm"
      v-else-if="character.class === 'Ranger'"
      :src="'https://dhgmmcwbveboncxmlqtd.supabase.co/storage/v1/object/sign/characters/Ranger.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjaGFyYWN0ZXJzL1Jhbmdlci5wbmciLCJpYXQiOjE2NjgxNzYxMDIsImV4cCI6MTk4MzUzNjEwMn0.vwV-pXQDiQE0Ga7GqZVh9wGeAoNJoIvpAOE2nnYFppQ'"
      style="height: 200px; max-width: 350px"
      fit="contain"
    >
    </q-img>
    <q-img
      class="q-ma-sm"
      v-else-if="character.class === 'Rogue'"
      :src="'https://dhgmmcwbveboncxmlqtd.supabase.co/storage/v1/object/sign/characters/rogue.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjaGFyYWN0ZXJzL3JvZ3VlLnBuZyIsImlhdCI6MTY2ODE3NjA5MSwiZXhwIjoxOTgzNTM2MDkxfQ.3UQELoJ_DbZo6g8WvGwnC4iV2F4qpXaUpn8faejrNyE'"
      style="height: 200px; max-width: 350px"
      fit="contain"
    >
    </q-img>
    <q-img
      class="q-ma-sm"
      v-else-if="character.class === 'Wizard'"
      :src="'https://dhgmmcwbveboncxmlqtd.supabase.co/storage/v1/object/sign/characters/Wizard.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjaGFyYWN0ZXJzL1dpemFyZC5wbmciLCJpYXQiOjE2NjgxNzYxMDEsImV4cCI6MTk4MzUzNjEwMX0.LPp2GPpb_AqQJIigV-iZwRFu8V_7LD8H90LRTgMUqF8'"
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
