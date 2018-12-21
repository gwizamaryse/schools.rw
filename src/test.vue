<template>
  <div id="app">
<input type="text" v-model="searchKey" placeholder="search me">
  <ul>
      <li v-for="user in paginatedUsers">{{ user.name }}</li>
  </ul>
<ul>
    <li v-for="pageNumber in totalPages" v-if="Math.abs(pageNumber - currentPage) < 3 || pageNumber == totalPages || pageNumber == 1">
      <a
        href="#"
        @click="setPage(pageNumber)"
        :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3)}"
      >
        {{ pageNumber }}
      </a>
    </li>
  </ul>

  </div>
</template>

<script>


export default {
  name: "app",
  data() {
    return {
      users: [
        { id: 1, name: "Tom" },
        { id: 2, name: "Kate" },
        { id: 3, name: "Jack" },
        { id: 4, name: "Jill" },
        { id: 4, name: "bill" },
        { id: 4, name: "aill" },
        { id: 4, name: "cill" },
        { id: 4, name: "dill" },
        { id: 4, name: "eill" },
        { id: 4, name: "cill" },
        { id: 4, name: "dill" },
        { id: 4, name: "eill" },
        { id: 4, name: "cill" },
        { id: 4, name: "dill" },
        { id: 4, name: "eill" },
        { id: 4, name: "cill" },
        { id: 4, name: "dill" },
        { id: 4, name: "eill" },
        { id: 4, name: "cill" },
        { id: 4, name: "dill" },
        { id: 4, name: "eill" },
{"id":1, "name":"Tom"},
            {"id":2, "name":"Kate"},
            {"id":3, "name":"Jack"},
            {"id":4, "name":"Jill"},
            {"id":4, "name":"bill"},
            {"id":4, "name":"aill"},
            {"id":4, "name":"cill"},
            {"id":4, "name":"dill"},
            {"id":4, "name":"eill"},
            {"id":4, "name":"cill"},
            {"id":4, "name":"dill"},
            {"id":4, "name":"eill"},
            {"id":4, "name":"cill"},
            {"id":4, "name":"dill"},
            {"id":4, "name":"eill"},
            {"id":4, "name":"cill"},
            {"id":4, "name":"dill"},
            {"id":4, "name":"eill"},
            {"id":4, "name":"cill"},
            {"id":4, "name":"dill"},
            {"id":4, "name":"eill"},
      ],
      searchKey: '',
      currentPage: 1,
      itemsPerPage: 1,
    };
  },
computed: {
      resultCount() {
        return this.filteredUsers.length;
      },
      totalPages: function() {
        return Math.ceil(this.resultCount / this.itemsPerPage)
      },
      filteredUsers: function() {
        let key = this.searchKey.toUpperCase();
        return this.users.filter((user) => {
          return user.name.toUpperCase().indexOf(key) !== -1
        })
      },
      paginatedUsers: function() {
        var index = this.currentPage * this.itemsPerPage
        return this.filteredUsers.slice(index - 1, index - 1 + this.itemsPerPage)
      }
    },
    methods: {
        setPage: function(pageNumber) {
          this.currentPage = pageNumber
        }
    },
  watch: {
      currentPage(value) {
        if (value > this.totalPages) {
          this.currentPage = this.totalPages;
        }
      }
    }


};
</script>




<style>
a {
  color: #999;
}
.current {
  color: red;
}
ul {
  padding: 0;
  list-style-type: none;
}
li {
  display: inline;
  margin: 5px 5px;
}

a.first::after {
  content:'...'
}

a.last::before {
  content:'...'
}
</style>
