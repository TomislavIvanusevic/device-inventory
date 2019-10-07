
<template>
  <div>
    <Nav />
    <v-content>
      <v-container fluid>
          <slot />
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Nav from './Nav.vue';

export default {
  components: { Nav },
};
</script>

<style lang="scss">
.v-application a{color:#1d1d1d;}
</style>
