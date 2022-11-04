import { defineStore } from 'pinia';
import { supabase } from '../supabase';

export const useCharStore = defineStore("characters", {
  state: () => ({
    characters: null,
    charToEdit: null,
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
        console.log(newChar)
        const { data, error } = await supabase
        .from('characters')
        .insert({
          user_id: newChar.user_id,  
          name: newChar.charName, 
          race: newChar.charRace, 
          class: newChar.class, 
          strength: newChar.strength, 
          dexterity: newChar.dexterity, 
          constitution: newChar.constitution, 
          intelligence: newChar.intelligence,
          wisdom: newChar.wisdom,
          charisma: newChar.charisma,
          favourite: false,         
        })
        
        .select()

      }
      catch (error) {
        console.log(error)
      }
    },
    async deleteChar(id) {
      try {
        const { data, error } = await supabase
        .from('characters')
        .delete()
        .eq('id', id)
      }
      catch (error) {
        console.log(error)
      }
    },

    async fetchCharsById (id) {
      const { data: characters } = await supabase
      .from('characters')
      .select('*')
      .eq('id',id);

      this.charToEdit = characters;

    },

    async editChar(id) {
      const { data: characters } = await supabase
      .from('characters')
      .update({ /*poner aqui todo el objeto y actualizar? o un watch a solo los cambios???*/ })
      .eq('id', id)
    }

  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "characters",
        storage: localStorage,
      },
    ],
  },

});

