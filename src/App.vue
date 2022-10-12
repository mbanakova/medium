<template>
  <div id="app">
    <TopBar />
    <router-view></router-view>
  </div>
</template>
<script>
import {actionTypes} from '@/store/modules/auth'
import TopBar from '@/components/TopBar'
export default {
  name: 'app',
  components: {TopBar},
  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser)
  },
}
</script>
<style></style>
