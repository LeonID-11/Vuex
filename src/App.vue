<template>
  <div id="app">
    <p><b> Count post:</b> {{postCount}}</p>
    <div class="post" v-for="post in allPosts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'allPosts',
      'postCount'
    ]),
  },
  methods: {
    ...mapActions(['fetchPost']),
  },
  async mounted(){
    this.fetchPost(7);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.post{
  width: 600px;
  margin: 0 auto 1rem;
  border: 1px solid #ccc;
}
</style>
