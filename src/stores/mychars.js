

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

    async createChars(newChar) {
      try {
        const { error } = await supabase
        .from('characters')
        .insert({
          user_id: newChar.user_id,  
          name: newChar.charName.value, 
          race: newChar.charRace.value, 
          class: newChar.charClass.value, 
          strength: newChar.strength.value, 
          dexterity: newChar.dexterity.value, 
          constitution: newChar.constitution.value, 
          intelligence: newChar.intelligence.value,
          wisdom: newChar.wisdom.value,
          charisma: newChar.charisma.value,
          favourite: false,         
        })
        .select()

      }
      catch (error) {
        console.log(error)
      }
    }

  }

});