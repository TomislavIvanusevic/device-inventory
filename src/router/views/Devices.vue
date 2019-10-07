<template>
  <Layout>
    <Table />
  </Layout>
</template>

<script>
import Layout from '../layouts/Main.vue';
import Table from '@/components/devices/Table.vue';
import store from '@/store';

export default {
  name: 'devices',
  components: {
    Layout,
    Table,
  },
  beforeRouteEnter(to, from, next) {
    Promise.all([
      store.dispatch('devices/fetchDevices'),
    ]).then(() => {
      next();
    });
  },
};
</script>
