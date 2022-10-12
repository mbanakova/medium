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
      <Pagination
        :total="feed.articlesCount"
        :limit="limit"
        :current-page="currentPage"
        :url="baseUrl"
      />
    </div>
  </div>
</template>

<script>
import {actionTypes} from '@/store/modules/feed'
import Pagination from '@/components/Pagination'
import {mapState} from 'vuex'
import {limit} from '@/helpers/vars'
import {stringify, parseUrl} from 'query-string'

export default {
  name: 'Feed',
  components: {Pagination},
  props: {
    apiUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      limit,
      url: '/tags/dragons',
    }
  },
  mounted() {
    this.fetchFeed()
  },
  watch: {
    currentPage() {
      this.fetchFeed()
    },
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.feed.isLoading,
      feed: (state) => state.feed.data,
      error: (state) => state.feed.error,
      currentPage() {
        return +this.$route.query.page || 1
      },
      baseUrl() {
        return this.$route.path
      },
      offset() {
        return this.currentPage * limit - limit
      },
    }),
  },
  methods: {
    fetchFeed() {
      const parsedUrl = parseUrl(this.apiUrl)
      const stringifiedParams = stringify({
        limit,
        offset: this.offset,
        ...parsedUrl.query,
      })
      const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
      this.$store.dispatch(actionTypes.getFeed, {apiUrl: apiUrlWithParams})
    },
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
