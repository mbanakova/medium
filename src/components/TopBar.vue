<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{name: 'home'}" exact
        >Medium clone</router-link
      >
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            :to="{name: 'home'}"
            exact
          >
            Home
          </router-link>
        </li>
        <template v-if="isLoggedIn">
          <li class="nav-item">
            <router-link
              class="nav-link"
              active-class="active"
              :to="{name: 'createArticle'}"
            >
              <i class="ion-compose"></i>&nbsp; New article
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              active-class="active"
              :to="{name: 'settings'}"
            >
              <i class="ion-gear-a"></i>&nbsp; Settings
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              active-class="active"
              :to="{name: 'userProfile', params: {slug: currentUser.username}}"
            >
              <img
                class="user-pic"
                :src="currentUser.image"
                :alt="currentUser.username"
              />
              &nbsp;{{ currentUser.username }}
            </router-link>
          </li></template
        >
        <template v-if="isAnonymous">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{name: 'login'}"
              active-class="active"
            >
              Sign in
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{name: 'register'}"
              active-class="active"
            >
              Sign up
            </router-link>
          </li>
        </template>
      </ul>

      <!-- Show this for logged in users -->
      <ul
        show-authed="true"
        class="nav navbar-nav pull-xs-right"
        style="display: none"
      >
        <li class="nav-item">
          <a
            class="nav-link active"
            ui-sref-active="active"
            ui-sref="app.home"
            href="#/"
          >
            Home
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link"
            ui-sref-active="active"
            ui-sref="app.editor"
            href="#/editor/"
          >
            <i class="ion-compose"></i>&nbsp;New Article
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link"
            ui-sref-active="active"
            ui-sref="app.settings"
            href="#/settings"
          >
            <i class="ion-gear-a"></i>&nbsp;Settings
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link ng-binding"
            ui-sref-active="active"
            ui-sref="app.profile.main({ username: $ctrl.currentUser.username })"
            href="#/@"
          >
            <img
              class="user-pic"
              src="https://api.realworld.io/images/smiley-cyrus.jpeg"
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex'
import {getterTypes} from '@/store/modules/auth'

export default {
  name: 'topbar',
  computed: {
    ...mapGetters({
      currentUser: getterTypes.currentUser,
      isLoggedIn: getterTypes.isLoggedIn,
      isAnonymous: getterTypes.isAnonymous,
    }),
  },
}
</script>

<style></style>
