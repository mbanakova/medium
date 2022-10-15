<template>
  <article-form
    :initialValues="initialValues"
    :errors="validationErrors"
    :isSubmitting="isSubmitting"
    @articleSubmit="onSubmit"
  >
  </article-form>
</template>

<script>
import {mapState} from 'vuex'

import ArticleForm from '@/components/ArticleForm'
import {actionTypes} from '@/store/modules/createArticle'

export default {
  name: 'CreateArticle',
  components: {
    ArticleForm,
  },
  data() {
    return {
      initialValues: {
        title: '',
        description: '',
        body: '',
        tagList: [],
      },
    }
  },
  computed: {
    ...mapState({
      isSubmitting: (state) => state.createArticle.isSubmitting,
      validationErrors: (state) => state.createArticle.validationErrors,
    }),
  },
  methods: {
    onSubmit(articleInput) {
      this.$store
        .dispatch(actionTypes.createArticle, {articleInput})
        .then((article) => {
          this.$router.push({name: 'article', params: {slug: article.slug}})
        })
    },
  },
}
</script>
