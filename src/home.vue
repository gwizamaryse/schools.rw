<template>
  <div>
    <!-- Header -->
    <v-img src="/lib/img/top-image.jpg" height="600">
      <v-layout pt-5 align-center justify-center>
        <h4 class="display-3 white--text">Find and Compare Schools In Rwanda</h4>
      </v-layout>
      <v-layout pt-5 align-center justify-center>
        <v-flex xs12 sm6>
          <v-card tile color="grey lighten-2">
            <v-form>
              <v-container fluid>
                <v-layout>
                  <v-flex xs12>
                    <v-layout row>
                      <v-flex xs8 order-md2 order-xs1 d-flex>
                        <v-card tile flat color="white">
                          <v-card-text>
                            <v-text-field
                              label="Search by school name or Area"
                              type="text"
                              :v-model="search"
                            ></v-text-field>
                          </v-card-text>
                        </v-card>
                      </v-flex>
                      <v-flex xs4 order-md3 order-xs2 d-flex>
                        <v-card tile :color="$root.COLOR.color1">
                          <v-card-text>
                            <router-link to="/search">
                              <v-btn block depressed class="white--text" :color="$root.COLOR.color1">
                                <v-icon>search</v-icon>Search
                              </v-btn>
                            </router-link>
                          </v-card-text>
                        </v-card>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs6 order-lg2>
                        <v-card tile flat :color="$root.COLOR.color2">
                          <v-card-text>
                            <v-btn
                              depressed
                              block
                              class="white--text"
                              :color="$root.COLOR.color2"
                              @click="advancedSearch = !advancedSearch">
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
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-img>

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
                <v-select :items="items"
                v-model="select"
                label="Public or Private"></v-select>
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

    <!-- schools listed -->
    <v-container>
      <v-layout>
        <v-flex md12>
          <v-card class="elevation-0 transparent" tile>
            <v-card-title primary-title class="layout justify-center">
              <div class="display-3 light-blue--text">Schools Listed {{message}}</div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- containers with images -->
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm4 pa-2>
          <v-card :color="$root.COLOR.color1" hover>
            <v-img src="/lib/img/Pre-Nursery.jpg" height="300"></v-img>
            <v-card-text>
              <v-btn large block depressed class="white--text" :color="$root.COLOR.color1">Pre-Nursery
                <v-spacer></v-spacer>90
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 pa-2>
          <v-card :color="$root.COLOR.color2" hover>
            <v-img src="/lib/img/Nursery.jpg" height="300px"></v-img>
            <v-card-text>
              <v-btn large block depressed class="white--text" :color="$root.COLOR.color2">Nursery
                <v-spacer></v-spacer>3,186
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 pa-2>
          <v-card :color="$root.COLOR.color3" hover>
            <v-img src="/lib/img/Primary.jpg" height="300px"></v-img>
            <v-card-text>
              <v-btn large block depressed class="white--text" :color="$root.COLOR.color3">Primary Schools
                <v-spacer></v-spacer>2,877
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 pa-2>
          <v-card :color="$root.COLOR.color4" hover>
            <v-img src="/lib/img/Secondary.jpg" height="300px"></v-img>
            <v-card-text>
              <v-btn block depressed large  class="white--text" :color="$root.COLOR.color4"> Secondary Schools
                <v-spacer></v-spacer>1,375
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 pa-2>
          <v-card :color="$root.COLOR.color5" hover>
            <v-img src="/lib/img/TVET.jpg" height="305px"></v-img>
            <v-card-text>
              <v-btn depressed block :color="$root.COLOR.color5" class="white--text">TVET
                <v-spacer></v-spacer>402
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 pa-2>
          <v-card :color="$root.COLOR.color6" hover>
            <v-img src="/lib/img/Tertiary.jpg" height="305px"></v-img>
            <v-card-text>
              <v-btn block depressed :color="$root.COLOR.color6" class="white--text">Universities and Polytechnics
                <v-spacer></v-spacer>37
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- schools listed -->
    <v-container fluid>
      <v-layout row wrap pa-3>
        <v-flex md12>
          <v-card class="elevation-0 transparent" tile>
            <v-card-title primary-title class="layout justify-center">
              <div class="display-3 light-blue--text">News & Information</div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-expansion-panel popout>
            <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
              <div slot="header">10 schools updated their information</div>
              <v-card>
                <v-card-text>i-Shuri just opened! 50 new schools were added!</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
export default {
  data: () => {
    return {
    advancedSearch: false,
    schools: [],
    search: ""
    }
  },
methods: {
schoolList: function() {
const _this = this;
axios.get("/lib/json/school_list.json").then(function(res){
//console.log(res.data);
Vue.set(_this, "schools", res.data.list);
});
}
},
created: function() {
this.schoolList();
},
  computed: {
    filteredSchools: function() {
      return this.schools.filter((school) => {
        return school.school_name.toLowerCase().match(this.search.toLowerCase()) ||
         school.province.toLowerCase().match(this.search.toLowerCase()) ||
        school.akarere.toLowerCase().match(this.search.toLowerCase()) ||
        school.umurenge.toLowerCase().match(this.search.toLowerCase());

      });
    }
  }

}
</script>
