<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <IndexPage />
    </q-page-container>
  </q-layout>
</template>

<script>
import {defineComponent} from "vue";
import IndexPage from "@/pages/IndexPage.vue";

export default defineComponent({
  name: 'MainLayout',
  components: {IndexPage}
});
</script>

<style>
</style>

