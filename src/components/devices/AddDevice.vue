<template>
  <Modal>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="formData.name"
              :rules="nameRules"
              :counter="10"
              label="Name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="formData.imei"
              :rules="nameRules"
              :counter="10"
              label="IMEI"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              :rules="emailRules"
              label="Color"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
          <v-select
            v-model="formData.location"
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
              <v-col v-if="status === 'error'" cols="12" md="12">
                There was an error, please try again
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
  data() {
    return {
      items: ['Zagreb', 'Zagreb 2'],
      status: '',
      formData: {
        name: '',
        imei: '',
        location: '',
      },
    };
  },
  methods: {
    async submit() {
      this.status = '';
      try {
        const deviceData = this.formData;
        const response = await this.$store.dispatch('devices/newDevice', deviceData);
        if (response.status === 201) {
          this.$store.commit('devices/addDevice', deviceData);
          this.status = 'Success';
          this.$store.commit('devices/toggleModal');
        }
      } catch (error) {
        this.status = 'Error';
      }
    },
  },
};
</script>
