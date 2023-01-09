<template>
  <q-layout view="hHh lpR fFf" class="bg-dark">
    <q-header
      reveal
      elevated
      class="bg-primary text-white text-center"
      height-hint="98"
    >
      <q-toolbar>
        <q-toolbar-title class="my-font text-h3">
          <q-avatar>
            <p class="text-h6 text-weight-bold"></p>
          </q-avatar>
          PixelQuest
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs dense align="justify my-font">
        <q-route-tab to="/SignUp" label="Create an account" />
        <q-route-tab to="/SignIn" label="Sign In" />
      </q-tabs>
    </q-header>
    <q-page-container>
      <div class="q-pa-md">
        <q-img
          src="https://dhgmmcwbveboncxmlqtd.supabase.co/storage/v1/object/sign/characters/startyoujourney2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjaGFyYWN0ZXJzL3N0YXJ0eW91am91cm5leTIucG5nIiwidHJhbnNmb3JtYXRpb25zIjoiIiwiaWF0IjoxNjczMjcxODUzLCJleHAiOjE5ODg2MzE4NTN9.9yHUzeehjD6s_SdBEi4ZehpjmIcrRP_rXR_FGEUvZkc&t=2023-01-09T13%3A44%3A13.362Z"
          style="min-width: 300px"
          fit="scale down"
        >
          <h4 class="absolute-bottom text-center text-white my-font">
            Here begins your journey...
          </h4>
        </q-img>
      </div>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script></script>
