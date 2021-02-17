<template>
  <main class="min-h-screen bg-blue-50">
    <div class="p-5">
      <VueTailwindPagination
          :current="current"
          :total="total"
          :per-page="perPage"
          @page-changed="current = $event"

          text-before-input="Перейти к странице"
          text-after-input="Вперед"/>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import VueTailwindPagination from './VueTailwindPagination/index.vue'

export default defineComponent({
  name: 'Pagination Example',
  components: {
    VueTailwindPagination,
  },
  data() {
    return {
      current: 1,
      perPage: 2,
      total: 20
    }
  }
})
</script>

<style scoped>
</style>