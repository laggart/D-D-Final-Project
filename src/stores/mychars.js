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
        /* console.log(newChar) */
        const { data, error } = await supabase
        .from('characters')
        .insert({
          user_id: user_id,  
          name: newChar.charName, 
          race: newChar.charRace, 
          class: newChar.charClass, 
          strength: newChar.strength, 
          dexterity: newChar.dexterity, 
          constitution: newChar.constitution, 
          intelligence: newChar.intelligence,
          wisdom: newChar.wisdom,
          charisma: newChar.charisma,
          favourite: false,         
        })
        console.log(strength)
        .select()

      }
      catch (error) {
        console.log(error)
      }
    }

  }

});