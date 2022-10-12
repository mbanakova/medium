<template>
  <div class="home-page">
    banner
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <Feed :api-url="apiUrl" />
        </div>
        <PopularTags />
      </div>
    </div>
  </div>
</template>

<script>
import Feed from '@/components/Feed'
import PopularTags from '@/components/PopularTags'

export default {
  name: 'globalFeed',
  components: {Feed, PopularTags},
  data() {
    return {
      apiUrl: '/articles',
    }
  },
}
</script>

<style></style>
