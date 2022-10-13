<template>
  <div class="article-page">
    <div class="banner">
      <div class="container" v-if="article">
        <h1 class="article-title">{{ article.title }}</h1>
        <div class="article-meta">
          <router-link
            :to="{name: 'userProfile', params: {slug: article.author.username}}"
          >
            <img :src="article.author.image" alt=""
          /></router-link>
          <div class="info">
            <router-link
              :to="{
                name: 'userProfile',
                params: {slug: article.author.username},
              }"
            >
              {{ article.author.username }}
              /></router-link
            >
            <span class="date">{{ article.createdAt }}</span>
          </div>
          <span>
            <router-link
              class="btn btn-outline-secondary btn-sm"
              :to="{name: 'editArticle', params: {slug: article.slug}}"
            >
              <i class="ion-edit">Edit article</i>
            </router-link>
            <button class="btn btn-outline-danger btn-sm">
              <i class="ion-trash-a"></i> Delete
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="container page">
      <Loader v-if="isLoading" />
      <ErrorMessage v-if="error" :message="'Some shit happened...'" />
      <div class="row article-content" v-if="article">
        <div class="col-xs-12">
          <p>{{ article.body }}</p>
          TAGLIST
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/article'
import Loader from '@/components/Loader'
import ErrorMessage from '@/components/ErrorMessage'

export default {
  name: 'Article',
  components: {Loader, ErrorMessage},
  mounted() {
    console.log('dispatched!!!')
    this.$store.dispatch(actionTypes.getArticle, {
      slug: this.$route.params.slug,
    })
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.article.isLoading,
      error: (state) => state.article.error,
      article: (state) => state.article.data,
    }),
  },
}
</script>

<style></style>
