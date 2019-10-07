<template>
  <v-dialog :value="true" max-width="800px">
    <v-card>
      <v-card-title>
        <span class="headline">Neki title</span>
      </v-card-title>
      <v-card-text>
        <slot></slot>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  methods: {
    modalClose() {
      this.$store.commit('devices/toggleModal');
    },
  },
};
</script>
