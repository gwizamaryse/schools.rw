<template>
  <div>
    <!--  top search  -->
    <v-card color="grey lighten-3" tile flat>
      <v-form>
        <v-container fluid>
          <v-layout row wrap>
            <v-layout row>
              <v-flex xs8 d-flex>
                <v-card>
                  <v-text-field
                    type="text"
                    label="Search school by district or school's name"
                    v-model="search"
                  ></v-text-field>
                </v-card>
              </v-flex>
              <v-flex xs4 d-flex>
                <v-card tile :color="$root.COLOR.color1">
                  <router-link to="/search">
                    <v-btn block depressed class="white--text" :color="$root.COLOR.color1">
                      <v-icon>search</v-icon>Search
                    </v-btn>
                  </router-link>
                </v-card>
              </v-flex>
            </v-layout>
            <v-spacer></v-spacer>
            <v-layout row align-end right>
              <v-flex xs6 order-lg2>
                <v-card tile flat :color="$root.COLOR.color2">
                  <v-card-text>
                    <v-btn
                      depressed
                      block
                      class="white--text"
                      :color="$root.COLOR.color2"
                      @click="advancedSearch = !advancedSearch"
                    >
                      <v-icon>search</v-icon>Advanced Search
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card tile flat :color="$root.COLOR.color3">
                  <v-card-text>
                    <v-btn depressed block class="white--text" :color="$root.COLOR.color3">
                      <v-icon>search</v-icon>Search by Map
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-layout>
        </v-container>
      </v-form>
    </v-card>

    <!--   Advanced search  -->
    <section v-if="advancedSearch">
      <v-card tile flat color="grey lighten-3">
        <form>
          <v-container grid-list-xl>
            <v-layout row wrap>
              <v-flex xs6 sm3>
                <v-select :items="items" label="Distance"></v-select>
              </v-flex>

              <v-flex xs6 sm3>
                <v-select :items="items" label="District"></v-select>
              </v-flex>

              <v-flex xs6 sm3>
                <v-select :items="items" v-model="select" label="Public or Private"></v-select>
              </v-flex>
              <v-flex xs6 sm3>
                <v-select :items="items" v-model="select" label="Gender"></v-select>
              </v-flex>

              <v-flex xs6 sm3>
                <v-select :items="items" label="Primary School"></v-select>
              </v-flex>

              <v-flex xs6 sm3>
                <v-select :items="items" label="Language"></v-select>
              </v-flex>
              <v-flex xs6 sm3>
                <v-select :items="items" label="Boarding"></v-select>
              </v-flex>
              <v-flex xs6 sm3>
                <v-btn block color="info">
                  <v-icon>search</v-icon>Advanced Search
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </form>
      </v-card>
    </section>

    <!--  search results -->
    <div id="search results">
      <v-card tile flat>
        <v-card-text class="title grey--text">we have found 686 schools matching your criteria
          <v-btn round x-large color="info">
            <v-icon>fas fa-balance-scale</v-icon>Compare
          </v-btn>
        </v-card-text>

        <v-divider class="light-blue"></v-divider>

        <v-card flat tile>
          <!--   search result #1 -->
          <div v-for="(item,i) in SCHOOL" :key="i">
            <v-card flat tile>
              <v-container fluid>
                <v-layout row wrap>
                  <v-flex xs16 sm2>
                    <v-layout align-center justify-center row fill-height>
                      <v-img src="/lib/img/logo/logo-school.jpg"></v-img>
                    </v-layout>
                  </v-flex>
                  <v-flex xs12 sm8 md8>
                    <v-flex xs12 sm8>
                      <v-card-text>
                        <p class="display-1">{{ item.school_name}}</p>

                        <p class="subheading">
                          <v-icon>fas fa-map-marker-alt</v-icon>
                          {{ item.location}}
                        </p>
                      </v-card-text>
                    </v-flex>
                    <v-flex xs12>
                      <v-btn
                        depressed
                        small
                        class="white--text"
                        :color="$root.COLOR.color1"
                      >{{item.levels[0]}}</v-btn>
                      <v-btn
                        depressed
                        small
                        class="white--text"
                        :color="$root.COLOR.color2"
                      >{{ item.levels[1]}}</v-btn>
                      <v-btn
                        depressed
                        small
                        class="white--text"
                        :color="$root.COLOR.color3"
                      >{{item.levels[2]}}</v-btn>
                      <v-btn
                        depressed
                        small
                        class="white--text"
                        :color="$root.COLOR.color4"
                      >{{item.levels[3]}}</v-btn>
                    </v-flex>
                    <v-flex xs12>
                      <v-container fluid>
                        <v-layout row wrap>
                          <v-flex xs3>
                            <v-icon>fas fa-building</v-icon>
                            Sector : {{item.sector}}
                          </v-flex>
                          <v-flex xs3>
                            <v-icon>wc</v-icon>
                            Gender: {{item.gender}}
                          </v-flex>
                          <v-flex xs3>
                            <v-icon>fas fa-church</v-icon>
                            Religion: {{item.religion}}
                          </v-flex>
                          <v-flex xs3>
                            <v-icon>fas fa-users</v-icon>
                            Levels: {{item.level}}
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-flex>
                  </v-flex>
                  <v-flex xs12 sm2>
                    <v-layout align-center justify-center row fill-height>
                      <v-btn block round x-large color="info">
                        <v-icon>fas fa-balance-scale</v-icon>Compare
                      </v-btn>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
            <v-divider class="light-blue"></v-divider>
          </div>
        </v-card>
        <!-- pagination -->
        <div class="text-xs-center pa-4">
          <v-pagination v-model="page" :length="5" circle color="info"></v-pagination>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
export default {
  data() {
    return {
      advancedSearch: false,
      page: 2,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      SCHOOL: [],
      search: ""
    };
  },
  methods: {
    getSchoolList: function() {
      const _this = this;
      axios.get("/lib/json/school_list.json").then(function(res) {
        console.log(res.data);
        Vue.set(_this, "SCHOOL", res.data.list);
      });
    }
  },
  created: function() {
    this.getSchoolList();
  },
  computed: {
    filteredList() {
      return this.SCHOOL.filter(post => {
        return list.school_name
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    }
  }
};
</script>
