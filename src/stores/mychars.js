

import { defineStore } from 'pinia';
import { supabase } from '../supabase';


export const useCharStore = defineStore("characters", {
  state: () => ({
    characters: null,
  }),

  actions: {
    async fetchChars () {
      const { data: characters } = await supabase
        .from('characters')
        .select('*')
        .order('id', { ascending: false });

      this.characters = characters;
    },

    async createChars () {
      try {
        const { error } = await supabase
        .from('characters')
        .insert({user_id: user.value.id, £ 
          name: charName.value, 
          race: charRace.value, 
          class: charClass.value, 
          strength: strength.value, 
          dexterity: dexterity.value, 
          constitution: constitution.value, 
          intelligence: intelligence.value,
          wisdom: wisdom.value,
          charisma: charisma.value,
          favourite: false,
        })

      }
      catch (error) {
        console.log(error)
      }
    }

  }

});