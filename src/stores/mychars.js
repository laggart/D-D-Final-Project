

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
          user_id: user_id,  
          name: charName, 
          race: charRace, 
          class: charClass, 
          strength: strength, 
          dexterity: dexterity, 
          constitution: constitution, 
          intelligence: intelligence,
          wisdom: wisdom,
          charisma: charisma,
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