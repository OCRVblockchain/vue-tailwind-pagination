<template>
  <Example />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Example from "./components/Example.vue";

export default defineComponent({
  name: 'App',
  components: { Example }
})
</script>