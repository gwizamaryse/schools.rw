<template>
  <div>
    <!--  top search  -->
    <v-card color="grey lighten-3" tile flat>
      <v-form>
        <v-container fluid>
          <v-layout row wrap pl-4>
            <v-layout row>
              <v-flex xs8 order-md2 order-xs1 d-flex>
                <v-card>
                  <v-text-field type="text" label="Search school by district or school's name"></v-text-field>
                </v-card>
              </v-flex>
              <v-flex xs4 order-md3 order-xs2 d-flex>
                <v-card tile color="error">
                  <router-link to="/search">
                    <v-btn block depressed color="error">
                      <v-icon>search</v-icon>Search
                    </v-btn>
                  </router-link>
                </v-card>
              </v-flex>
            </v-layout>
            <v-spacer></v-spacer>
            <v-layout row align-end right>
              <v-flex xs4 order-lg2>
                <v-card tile flat color="success">
                  <v-card-text>
                    <v-btn
                      depressed
                      block
                      color="success"
                      @click="advancedSearch = !advancedSearch"
                    >
                      <v-icon>search</v-icon>Advanced Search
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs4>
                <v-card tile flat color="warning">
                  <v-card-text>
                    <v-btn depressed block color="warning">
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
                      <p class="display-1"> ffff </p>

                      <p class="subheading"> 
                        <v-icon>fas fa-map-marker-alt</v-icon>
                      </p>
                    </v-card-text>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn depressed small color="error">Pre-Nursery School</v-btn>
                    <v-btn depressed small color="success">Nursery School</v-btn>
                    <v-btn depressed small color="warning">Primary school</v-btn>
                    <v-btn depressed small class="cyan white--text">General Secondary</v-btn>
                  </v-flex>
                  <v-flex xs12>
                    <v-container fluid>
                      <v-layout row wrap>
                        <v-flex xs3>
                          <v-icon>fas fa-building</v-icon>Sector : Private
                        </v-flex>
                        <v-flex xs3>
                          <v-icon>wc</v-icon>Gender: Mixed
                        </v-flex>
                        <v-flex xs3>
                          <v-icon>fas fa-church</v-icon>Religion: Secular
                        </v-flex>
                        <v-flex xs3>
                          <v-icon>fas fa-users</v-icon>Levels: Combined
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

          <!--   search result 2 -->
          <v-card color="light-blue lighten-5">
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
                      <p class="display-1">Green Hills Academy</p>
                      <p class="subheading">kigali, gasabo, nyarutarama
                        <v-icon>fas fa-map-marker-alt</v-icon>
                      </p>
                    </v-card-text>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn depressed small color="error">Pre-Nursery School</v-btn>
                    <v-btn depressed small color="success">Nursery School</v-btn>
                    <v-btn depressed small color="warning">Primary school</v-btn>
                    <v-btn depressed small class="info">General Secondary</v-btn>
                  </v-flex>
                  <v-flex xs12>
                    <v-container fluid>
                      <v-layout row wrap>
                        <v-flex xs3>
                          <v-icon>fas fa-building</v-icon>Sector : Private
                        </v-flex>
                        <v-flex xs3>
                          <v-icon>wc</v-icon>Gender: Mixed
                        </v-flex>
                        <v-flex xs3>
                          <v-icon>fas fa-church</v-icon>Religion: Secular
                        </v-flex>
                        <v-flex xs3>
                          <v-icon>fas fa-users</v-icon>Levels: Combined
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
          <!--   search result 3 -->
          <v-card>
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
                      <p class="display-1">Green Hills Academy</p>
                      <p class="subheading">kigali, gasabo, nyarutarama
                        <v-icon>fas fa-map-marker-alt</v-icon>
                      </p>
                    </v-card-text>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn depressed small color="error">Pre-Nursery School</v-btn>
                    <v-btn depressed small color="success">Nursery School</v-btn>
                    <v-btn depressed small color="warning">Primary school</v-btn>
                    <v-btn depressed small class="info">General Secondary</v-btn>
                  </v-flex>
                  <v-flex xs12>
                    <v-container fluid>
                      <v-layout row wrap>
                        <v-flex xs3>
                          <v-icon>fas fa-building</v-icon>Sector : Private
                        </v-flex>
                        <v-flex xs3>
                          <v-icon>wc</v-icon>Gender: Mixed
                        </v-flex>
                        <v-flex xs3>
                          <v-icon>fas fa-church</v-icon>Religion: Secular
                        </v-flex>
                        <v-flex xs3>
                          <v-icon>fas fa-users</v-icon>Levels: Combined
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
          <!--   search result 4 -->
          <v-card color="light-blue lighten-5">
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
                      <p class="display-1">Green Hills Academy</p>
                      <p class="subheading">kigali, gasabo, nyarutarama
                        <v-icon>fas fa-map-marker-alt</v-icon>
                      </p>
                    </v-card-text>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn depressed small color="error">Pre-Nursery School</v-btn>
                    <v-btn depressed small color="success">Nursery School</v-btn>
                    <v-btn depressed small color="warning">Primary school</v-btn>
                    <v-btn depressed small class="info">General Secondary</v-btn>
                  </v-flex>
                  <v-flex xs12>
                    <v-container fluid>
                      <v-layout row wrap>
                        <v-flex xs3>
                          <v-icon>fas fa-building</v-icon>Sector : Private
                        </v-flex>
                        <v-flex xs3>
                          <v-icon>wc</v-icon>Gender: Mixed
                        </v-flex>
                        <v-flex xs3>
                          <v-icon>fas fa-church</v-icon>Religion: Secular
                        </v-flex>
                        <v-flex xs3>
                          <v-icon>fas fa-users</v-icon>Levels: Combined
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
          <!--   search result 5 -->
          <v-card>
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
                      <p class="display-1">Green Hills Academy</p>
                      <p class="subheading">kigali, gasabo, nyarutarama
                        <v-icon>fas fa-map-marker-alt</v-icon>
                      </p>
                    </v-card-text>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn depressed small color="error">Pre-Nursery School</v-btn>
                    <v-btn depressed small color="success">Nursery School</v-btn>
                    <v-btn depressed small color="warning">Primary school</v-btn>
                    <v-btn depressed small class="info">General Secondary</v-btn>
                  </v-flex>
                  <v-flex xs12>
                    <v-container fluid>
                      <v-layout row wrap>
                        <v-flex xs3>
                          <v-icon>fas fa-building</v-icon>Sector : Private
                        </v-flex>
                        <v-flex xs3>
                          <v-icon>wc</v-icon>Gender: Mixed
                        </v-flex>
                        <v-flex xs3>
                          <v-icon>fas fa-church</v-icon>Religion: Secular
                        </v-flex>
                        <v-flex xs3>
                          <v-icon>fas fa-users</v-icon>Levels: Combined
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
import axios from 'axios';
import Vue from 'vue';
export default {
  data() {
    return {
      advancedSearch: false,
      page: 2,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      SCHOOL: []
    };
  },
  methods : {
    getSchoolList : function(){
      const _this=this;
      axios.get('/lib/jason/school_list.json')
      .then(function(res){
        console.log(res.data)
        Vue.set(_this, "SCHOOL" , res.data.list)
      })
    }
  },
  created:function(){
    this.getSchoolList()
  }

};
</script>
