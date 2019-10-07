<template>
<div>
  <EditDevice v-if="isModalOpen && editModal" :item="editDevice"></EditDevice>
  <AddDevice v-if="isModalOpen && addModal"></AddDevice>

  <v-data-table
    :headers="headers"
    :items="devices"
    :items-per-page="10"
    :search="filterQuery"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Devices</v-toolbar-title>
        <v-divider
          class="mx-2"
          inset
          vertical
        ></v-divider>
        <!-- <div class="flex-grow-1"></div> -->
        <v-text-field
          class="mb-1 mx-8"
          v-model="filterQuery"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
          <v-btn color="primary" dark class="mb-2" @click.stop="addNewItem()">New Item</v-btn>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-btn
        small
        depressed
        color="primary"
        class="mr-2"
        @click="editItem(item)"
      >
        edit
      </v-btn>
      <v-btn
        small
        color="error"
        depressed
        @click="deleteItem(item)"
      >
        delete
      </v-btn>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</div>

</template>
<script>
import { mapState } from 'vuex';
import AddDevice from './AddDevice.vue';
import EditDevice from './EditDevice.vue';

export default {
  components: {
    AddDevice,
    EditDevice,
  },
  data() {
    return {
      headers: [
        { text: 'name', value: 'name' },
        { text: 'IMEI', value: 'imei' },
        { text: 'Location', value: 'location' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      editModal: false,
      addModal: false,
      editDevice: {},
      filterQuery: '',
    };
  },
  computed: {
    ...mapState({
      devices: state => state.devices.devices,
      isModalOpen: state => state.devices.isModalOpen,
      editedDevice: state => state.devices.editedDevice,
    }),
  },
  methods: {
    editItem(item) {
      this.editDevice = { ...item };
      this.$store.commit('devices/currentlyEditedDevice', item);
      this.$store.commit('devices/toggleModal');
      this.editModal = true;
    },
    deleteItem(item) {
      //  find the correct index to be removed from store
      const itemToDelete = this.devices.findIndex(device => device._id === item._id);
      if (window.confirm('Are you sure?')) {
        this.$store.dispatch('devices/deleteDevice', { id: item._id, index: itemToDelete });
      }
    },
    addNewItem() {
      this.$store.commit('devices/toggleModal');
      this.addModal = true;
    },
  },
};
</script>
