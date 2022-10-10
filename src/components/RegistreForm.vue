<template>
  <div class="signInForm q-ma-md" style="max-width: 400px">
    <div class="q-pa-md">
      <div class="q-gutter-md row items-start">
        <q-input filled class="text-h5 q-my-md" v-model="text" label="Name" />
        <q-input
          filled
          class="text-h5 q-my-md"
          v-model="text"
          label="Last Name"
        />
      </div>
      <div class="q-gutter-md row items-start">
        <q-input
          filled
          class="q-my-md"
          v-model="email"
          type="email"
          hint="Please insert a valid mail"
          label="E-mail"
        />
        <q-input
          filled
          class="text-h5 q-my-md"
          v-model="text"
          label="User Name"
        />
        <q-input
          v-model="password"
          filled
          label="Password"
          :type="isPwd ? 'password' : 'text'"
          hint="Please insert a valid password"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </div>

      <div class="q-pa-md q-gutter-sm">
        <q-btn color="primary" class="full-width" label="Submit" />
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      password: ref(""),
      isPwd: ref(true),
      email: ref(""),
    };
  },
};
</script>
<style>
.signInForm {
  background-color: rgb(195, 216, 216);
  border-radius: 20px;
}
</style>
