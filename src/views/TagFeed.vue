<template>
  <div class="home-page">
    <banner></banner>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <feed-toggler :tag-name="tagName"></feed-toggler>
          <feed :api-url="apiUrl"></feed>
        </div>
        <div class="col-md-3">
          <popular-tags></popular-tags>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Feed from '@/components/Feed.vue'
import PopularTags from '@/components/PopularTags.vue'
import Banner from '@/components/Banner.vue'
import FeedToggler from '@/components/FeedToggler'

export default {
  name: 'YourFeed',
  components: {
    Feed,
    PopularTags,
    Banner,
    FeedToggler,
  },
  computed: {
    tagName() {
      return this.$route.params.slug
    },
    apiUrl() {
      return `/articles?tag=${this.tagName}`
    },
  },
}
</script>
