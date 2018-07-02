<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary">
        <q-btn
          flat
          dense
          round
          @click="drawer = !drawer">
          <q-icon name="mdi-menu" />
        </q-btn>

        <q-toolbar-title>
          [ New Name Here ]
          <div slot="subtitle">web cms v {{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="drawer"
      :content-class="'bg-grey-2'">
      <q-list
        no-border
        link
        inset-delimiter>
        <q-list-header>λ</q-list-header>
        <q-item @click.native="openURL('https://www.google.com/')">
          <q-item-side icon="mdi-google" />
          <q-item-main
            label="Google"
            sublabel="goo.gl" />
        </q-item>
        <q-item @click.native="openURL('https://github.com/')">
          <q-item-side icon="mdi-github-circle" />
          <q-item-main
            label="GitHub"
            sublabel="github.com" />
        </q-item>
        <q-item @click.native="openURL('https://stackoverflow.com/')">
          <q-item-side icon="mdi-code-tags" />
          <q-item-main
            label="StackOverflow"
            sublabel="stackoverflow.com" />
        </q-item>
        <q-item @click.native="openURL('https://vuejs.org/v2/guide/join.html')">
          <q-item-side icon="mdi-forum" />
          <q-item-main
            label="Community"
            sublabel="forum, chat, meetups" />
        </q-item>
        <q-item @click.native="openURL('https://twitter.com/quasarframework')">
          <q-item-side icon="mdi-twitter-circle" />
          <q-item-main label="Twitter" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      drawer: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
