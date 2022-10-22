<template>
  <!-- <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      arrows
      height="300px"
      class="bg-grey-1 shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/cat.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/material.png" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div> -->
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <div class="col-12">
        <q-badge color="secondary" multi-line>
          Model: "{{ model }}"
        </q-badge>
      </div>

      <q-select
        filled
        v-model="model"
        :options="options"
        option-value="id"
        option-label="desc"
        option-disable="inactive"
        emit-value
        map-options
        style="min-width: 250px; max-width: 300px"
      />

      <q-select
        filled
        v-model="model"
        :options="options"
        :option-value="opt => Object(opt) === opt && 'id' in opt ? opt.id : null"
        :option-label="opt => Object(opt) === opt && 'desc' in opt ? opt.desc : '- Null -'"
        :option-disable="opt => Object(opt) === opt ? opt.inactive === true : true"
        emit-value
        map-options
        style="min-width: 250px; max-width: 300px"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1),
      model: ref(null),

      options: [
        {
          id: 'goog',
          desc: 'Google'
        },
        {
          id: 'fb',
          desc: 'Facebook'
        },
        {
          id: 'twt',
          desc: 'Twitter'
        },
        {
          id: 'app',
          desc: 'Apple'
        },
        {
          id: 'ora',
          desc: 'Oracle',
          inactive: true
        }
      ]
    }
   
  }
}
</script>
