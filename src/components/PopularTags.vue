<template>
  <div class="col-md-3">
    <Loader v-if="isLoading" />
    <ErrorMessage v-if="error" :message="'Some shit happened...'" />
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
import Loader from '@/components/Loader'
import ErrorMessage from '@/components/ErrorMessage'

export default {
  name: 'PopularTags',
  components: {Loader, ErrorMessage},
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
