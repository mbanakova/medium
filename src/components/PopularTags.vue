<template>
  <div class="col-md-3">
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">Oh shit...</div>
    <div class="sidebar" v-if="popularTags">
      <p>popular tags</p>
      <div class="tag-list">
        <router-link
          class="tag-default tag-pill"
          v-for="tag in popularTags"
          :key="tag"
          :to="{name: 'tag', params: {slug: tag}}"
          >{{ tag }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/popularTags'

export default {
  name: 'PopularTags',
  computed: {
    ...mapState({
      isLoading: (state) => state.popularTags.isLoading,
      popularTags: (state) => state.popularTags.data,
      error: (state) => state.popularTags.error,
    }),
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularTags)
  },
}
</script>

<style></style>
