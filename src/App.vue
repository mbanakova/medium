<template>
  <div id="app">
    <Topbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
import {actionTypes} from '@/store/modules/auth'

export default {
  name: 'App',
  components: {
    Topbar,
  },
  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser)
  },
}
</script>
