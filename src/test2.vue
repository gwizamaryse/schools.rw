<template>
  <div id="app">
    <v-container>
      <div>
        <input type="text" v-model="searchKey" placeholder="Search title..">
        <label>Search title:</label>
      </div>
      <v-card height="400" v-for="post in filteredList" :key="post.id">
        <a v-bind:href="post.link" target="_blank">
          <img v-bind:src="post.img">
          <small>posted by: {{ post.author }}</small>
          {{ post.title }}
        </a>
      </v-card>
    </v-container>
  </div>
</template>

<script>
class Post {
  constructor(title, link, author, img) {
    this.title = title;
    this.link = link;
    this.author = author;
    this.img = img;
  }
}

export default {
  data() {
    return {
      searchKey: "",
     
    };
  },
  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.searchKey.toLowerCase());
      });
    }
  }
};
</script>

<style>
</style>
