<template>
  <ul class="pagination">
    <li
      class="page-item"
      :class="{active: page === currentPage}"
      v-for="page in pages"
      :key="page"
    >
      <router-link class="page-link" :to="{path: url, query: {page: page}}">{{
        page
      }}</router-link>
    </li>
  </ul>
</template>

<script>
import {range} from '@/helpers/utils'
export default {
  name: 'Pagination',
  props: {
    total: {type: Number, required: true},
    limit: {type: Number, required: true},
    currentPage: {type: Number, required: true},
    url: {type: String, required: true},
  },
  computed: {
    pages() {
      const pagesCount = Math.ceil(this.total / this.limit)
      return range(pagesCount)
    },
  },
}
</script>

<style></style>
