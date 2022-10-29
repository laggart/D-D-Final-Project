

import { defineStore } from 'pinia';
import { supabase } from '../supabase';
 

export const useCharStore = defineStore("chars", {
  state: () => ({
    tasks: null
  }),

  actions: {
    async fetchTasks () {
      const { data: tasks } = await supabase

        .from('tasks')

        .select('*')

        .order('id', { ascending: false });

      this.tasks = tasks;

    }

  }

});