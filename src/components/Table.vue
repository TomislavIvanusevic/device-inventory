<template>
  <b-table :data="devices" :columns="columns"></b-table>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      devices: state => state.devices.devices,
    }),
  },
  data() {
    return {
      columns: [
        {
          field: '_id',
          label: 'ID',
          width: '40',
          numeric: true,
        },
        {
          field: 'name',
          label: 'name',
        },
        {
          field: 'imei',
          label: 'imei',
        },
        {
          field: 'location',
          label: 'location',
        },
      ],
    };
  },
};
</script>
