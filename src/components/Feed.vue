<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">smth bad happened...</div>
    <div v-if="feed">
      <div
        class="article-preview"
        v-for="(article, index) in feed.articles"
        :key="index"
      >
        <div class="article-meta">
          <router-link
            :to="{name: 'userProfile', params: {slug: article.author.username}}"
            ><img :src="article.author.image" alt=""
          /></router-link>
          <div class="info">
            <router-link
              class="author"
              :to="{
                name: 'userProfile',
                params: {slug: article.author.username},
              }"
              >{{ article.author.username }}
            </router-link>
            <span class="date">{{ article.createdAt }}</span>
            <div class="pull-xs-right">add to favs</div>
          </div>
          <router-link
            class="preview-link"
            :to="{name: 'article', params: {slug: article.slug}}"
            ><h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
            <span>read more...</span>
            tag list</router-link
          >
        </div>
      </div>
      pagination
    </div>
  </div>
</template>

<script>
import {actionTypes} from '@/store/modules/feed'
import {mapState} from 'vuex'

export default {
  name: 'Feed',
  props: {
    apiUrl: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.$store.dispatch(actionTypes.getFeed, {apiUrl: this.apiUrl})
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.feed.isLoading,
      feed: (state) => state.feed.data,
      error: (state) => state.feed.error,
    }),
  },
}
</script>

<style>
.article-preview .preview-link h2 {
  font-weight: 600 !important;
  font-size: 1.5rem !important;
  margin-bottom: 3px;
}
</style>
