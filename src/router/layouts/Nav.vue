<template>
  <v-navigation-drawer permanent app>
    <v-list-item link>
      <v-list-item-content>
        <v-list-item-title class="title">
          <router-link to="/">Home</router-link>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          <router-link to="/devices">Devices</router-link>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
  nav {
    background-color: #0D0716 !important;
  }
</style>
