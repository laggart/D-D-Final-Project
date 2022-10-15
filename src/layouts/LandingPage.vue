<template>
    <q-layout 
    view="hHh lpR fFf"
    class="bg-dark"
    >
      <q-header elevated class="bg-primary text-white">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            prueba
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
  
      <q-page-container class="dark">
        <router-view />
      </q-page-container>
  
    </q-layout>
  </template>