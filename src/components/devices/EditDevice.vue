<template>
  <Modal>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="item.name"
              :counter="10"
              label="Name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="item.imei"
              :counter="10"
              label="IMEI"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              label="Color"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              v-model="item.location"
              :items="items"
              label="Standard"
            ></v-select>
          </v-col>
        </v-row>
          <v-row>
              <v-col cols="12" md="12">
                <v-btn
                  color="success"
                  class="mr-4"
                  @click="submit"
                >
                  Save
                  </v-btn>
              </v-col>
          </v-row>
      </v-container>
    </v-form>
  </Modal>
</template>

<script>
import Modal from '@/router/layouts/Modal.vue';

export default {
  components: {
    Modal,
  },
  props: {
    item: Object,
  },
  data() {
    return {
      items: ['Zagreb', 'Zagreb 2'],
      status: '',
    };
  },
  methods: {
    async submit() {
      this.status = '';
      try {
        const deviceData = this.item;
        const response = await this.$store.dispatch('devices/editDevice', deviceData);
        if (response.status === 200) {
          this.status = 'Success';
          this.$store.commit('devices/toggleModal');
          return;
        }
      } catch (error) {
        this.status = 'error';
      }
    },
  },
};
</script>
