<template>
  <q-layout view="hHh lpR fFf" class="bg-dark">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="my-font text-h3 center">
          <q-avatar>
            <p class="text-h6 text-weight-bold">PQ</p>
          </q-avatar>
          PixelQuest
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="justify my-font">
        <q-route-tab to="/DEMO" label="Demo" />
        <q-route-tab to="/SignUp" label="Create an account" />
        <q-route-tab to="/SignIn" label="Sign In" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script></script>
