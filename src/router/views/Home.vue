<template>
  <Layout>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </Layout>
</template>

<script>
import Layout from '../layouts/Main.vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    Layout,
  },
};
</script>
