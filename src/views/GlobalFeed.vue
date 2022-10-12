<template>
  <div class="home-page">
    banner
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <Feed :api-url="apiUrl" />
        </div>
        <div class="col-md-3">popular tags</div>
      </div>
    </div>
  </div>
</template>

<script>
import Feed from '@/components/Feed'
export default {
  name: 'globalFeed',
  components: {Feed},
  data() {
    return {
      apiUrl: '/articles',
    }
  },
}
</script>

<style></style>
