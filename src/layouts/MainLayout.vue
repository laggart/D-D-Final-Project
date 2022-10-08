<template>
  <q-layout view="hHh lpR fFf" class="bg-dark">

    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="my-font text-h1">
          <q-avatar>
          <p class=" text-h6 text-weight-bold"> D&D</p>  
          </q-avatar>
          Iron D&D
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="justify my-font">
        <q-route-tab to="/page1" label="Demo" />
        <q-route-tab to="/SignIn" label="Create an account" />
        <q-route-tab to="/page3" label="Log In" />
      </q-tabs>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div class="my-font">Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>

</script>
