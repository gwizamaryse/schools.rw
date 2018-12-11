<template>
  <div>
    <!--  top search  -->
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <v-layout column>
          <v-flex d-flex>
            <v-card color="grey lighten-3" tile flat>
              <v-form>
                <v-container fluid>
                  <v-layout row wrap pa-2 ml-5>
                    <v-layout row>
                      <v-flex xs8 order-md2 order-xs1 d-flex>
                        <v-card>
                          <v-text-field
                            type="text"
                            label="Search school by district or school's name"
                          ></v-text-field>
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
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- container with school details/white container  -->
      <v-flex d-flex md9 xs12 sm9 pl-3>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card color="white" tile flat>
              <!-- print/compare buttons -->
              <v-flex d-flex>
                <v-layout align-center justify-end fill-height>
                  <v-btn x-large round color="info">
                    <v-icon>print</v-icon>Print
                  </v-btn>
                  <v-btn round x-large color="info">
                    <v-icon>fas fa-balance-scale</v-icon>Compare
                  </v-btn>
                </v-layout>
              </v-flex>

              <!--  school logo and school name -->
              <v-flex d-flex>
                <v-layout row wrap>
                  <v-flex md4 sm4 d-flex>
                    <v-card flat tile>
                      <v-flex xs6>
                        <v-img height="150" src="/lib/img/logo/logo-school.jpg"></v-img>
                      </v-flex>
                    </v-card>
                  </v-flex>
                  <v-flex md8 xs8 d-flex>
                    <v-card flat tile align-content-center>
                      <v-card-text class="display-2">
                        <p>{{SCHOOL.school_name}}</p>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>

              <!-- carousel with school images -->
              <v-flex d-flex>
                <v-card tile flat>
                  <v-carousel>
                    <v-carousel-item
                      v-for="(images_slider,i) in images_slider"
                      :key="i"
                      :src="images_slider.src"
                      reverse-transition="fade"
                      transition="fade"
                    ></v-carousel-item>
                  </v-carousel>
                </v-card>
              </v-flex>
              <!--  tab menu -->
              <v-flex d-flex>
                <v-card tile flat>
                  <v-tabs
                    centered
                    v-model="tab"
                    color="light-blue"
                    align-with-title
                    dark
                    icons-and-text
                  >
                    <v-tabs-slider color="warning"></v-tabs-slider>

                    <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
                  </v-tabs>

                  <v-tabs-items v-model="tab">
                    <v-tab-item v-for="item in items" :key="item">
                      <v-card flat>
                        <v-card-text>{{ text }}</v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </v-card>
              </v-flex>
              <!-- Basic Information -->
              <v-flex d-flex>
                <v-card tile flat>
                  <v-card-text class="light-blue--text display-2">
                    <!--   <div v-for="(list, i) in  SCHOOL.school_type" :key="i">
                        {{list}}
                    </div>-->
                    <p class="text-md-center">Basic Information</p>
                    <v-divider class="light-blue pb-1"></v-divider>
                  </v-card-text>
                  <v-btn large class="white--text" :color="$root.COLOR.color1">{{SCHOOL.school_type[0]}}</v-btn>
                  <v-btn large class="white--text" :color="$root.COLOR.color2">{{SCHOOL.school_type[1]}}</v-btn>
                  <v-btn large class="white--text" :color="$root.COLOR.color3">{{SCHOOL.school_type[2]}}</v-btn>
                  <v-btn large class="white--text"  :color="$root.COLOR.color4">{{SCHOOL.school_type[3]}}</v-btn>

                  <v-card-text pl-5>
                    <v-divider class="light-blue"></v-divider>
                  </v-card-text>

                  <v-container grid-list-xl>
                    <v-layout row wrap>
                      <v-flex xs12 sm3 text-xs-center>
                        <v-icon size="80" color="light-blue">person</v-icon>
                        <p class="title">{{SCHOOL.basic_info.number_students}}</p>
                      </v-flex>
                      <v-flex xs4 sm3 text-xs-center>
                        <v-icon size="80" color="light-blue">supervised_user_circle</v-icon>
                        <p class="title">{{SCHOOL.basic_info.students_per_class}}</p>
                      </v-flex>
                      <v-flex xs4 sm3 text-xs-center>
                        <v-icon size="80" color="light-blue">language</v-icon>
                        <p class="title">
                          {{SCHOOL.basic_info.languages[0]}}
                          <br>
                          {{SCHOOL.basic_info.languages[1]}}
                          <br>
                          {{SCHOOL.basic_info.languages[2]}}
                        </p>
                      </v-flex>
                      <v-flex xs4 sm3 text-xs-center>
                        <v-icon size="80" color="light-blue">fas fa-tshirt</v-icon>
                        <p class="title">{{SCHOOL.basic_info.uniform}}</p>
                      </v-flex>
                      <v-flex xs4 sm3 text-xs-center>
                        <v-icon size="80" color="light-blue">fas fa-school</v-icon>
                        <p class="title">{{SCHOOL.basic_info.school_ownership[0]}}</p>
                      </v-flex>
                      <v-flex xs4 sm3 text-xs-center>
                        <v-icon size="80" color="light-blue">fas fa-church</v-icon>
                        <p class="title">{{SCHOOL.basic_info.religion[2]}}</p>
                      </v-flex>
                      <v-flex xs4 sm3 text-xs-center>
                        <v-icon size="80" color="light-blue">wc</v-icon>
                        <p class="title">{{SCHOOL.basic_info.gender[2]}}</p>
                      </v-flex>

                      <v-card-text pl-5>
                        <v-divider class="light-blue"></v-divider>
                      </v-card-text>
                      <v-flex xs12 sm3 text-xs-center>
                        <v-icon size="80" color="light-blue">fas fa-vials</v-icon>
                        <p class="title">{{SCHOOL.basic_info.labs[0]}}</p>
                      </v-flex>
                      <v-flex xs12 sm3 text-xs-center>
                        <v-icon size="80" color="light-blue">fas fa-desktop</v-icon>
                        <p class="title">{{SCHOOL.basic_info.labs[1]}}</p>
                      </v-flex>

                      <v-card-text pl-5>
                        <v-divider class="light-blue"></v-divider>
                      </v-card-text>

                      <v-flex xs6 sm3 text-xs-center>
                        <v-icon size="80" color="light-blue">fas fa-book-reader</v-icon>
                        <p class="title">
                          {{SCHOOL.basic_info.library[0]}}
                          <br>
                          {{SCHOOL.basic_info.library[1]}}
                        </p>
                      </v-flex>
                      <v-flex xs6 sm3 text-xs-center>
                        <v-icon size="80" color="light-blue">fas fa-volleyball-ball</v-icon>
                        <p class="title">{{SCHOOL.basic_info.sport}}</p>
                      </v-flex>
                      <v-flex xs6 sm3 text-xs-center>
                        <v-icon size="80" color="light-blue">fas fa-music</v-icon>
                        <p class="title">{{SCHOOL.basic_info.music}}</p>
                      </v-flex>
                      <v-flex xs6 sm3 text-xs-center>
                        <v-icon size="80" color="light-blue">fas fa-palette</v-icon>
                        <p class="title">{{SCHOOL.basic_info.other_activities }}</p>
                      </v-flex>
                    </v-layout>
                  </v-container>

                  <!--  School Fees -->
                  <v-card-text class="light-blue--text display-2">
                    <p class="text-md-center">School Fees</p>
                    <v-divider class="light-blue pb-1"></v-divider>
                  </v-card-text>

                  <v-card-text class="light-blue--text title">
                    <p class="text-md-center">Pre-Nursery and Nursery</p>
                  </v-card-text>
                  <v-flex xs12 sm6 offset-sm3>
                    <v-card pa-3>
                      <v-card-text class="subheading">
                        {{SCHOOL.school_fee.inscription}}
                        <v-divider></v-divider>
                        {{SCHOOL.school_fee.pre_nursery}}
                        <v-divider></v-divider>
                        {{SCHOOL.school_fee.nursery}}
                        <v-divider></v-divider>
                      </v-card-text>
                    </v-card>
                  </v-flex>

                  <v-card-text class="light-blue--text title">
                    <p class="text-md-center">Primary school</p>
                  </v-card-text>
                  <v-flex xs12 sm6 offset-sm3>
                    <v-card pa-3>
                      <v-card-text class="subheading">
                        Grade 1: {{SCHOOL.school_fee.primary_fee}}
                        <v-divider></v-divider>
                        Grade 2: {{SCHOOL.school_fee.primary_fee}}
                        <v-divider></v-divider>
                        Grade 3: {{SCHOOL.school_fee.primary_fee}}
                        <v-divider></v-divider>
                        Grade 4: {{SCHOOL.school_fee.primary_fee}}
                        <v-divider></v-divider>
                        Grade 5: {{SCHOOL.school_fee.primary_fee}}
                        <v-divider></v-divider>
                        Grade 6: {{SCHOOL.school_fee.primary_fee}}
                      </v-card-text>
                    </v-card>
                  </v-flex>

                  <v-card-text class="light-blue--text title">
                    <p class="text-md-center">Secondary School</p>
                  </v-card-text>
                  <v-flex xs12 sm6 offset-sm3>
                    <v-card pb-5>
                      <v-card-text class="subheading">
                        Grade 1: {{SCHOOL.school_fee.secondary_fee1}}
                        <v-divider></v-divider>
                        Grade 2: {{SCHOOL.school_fee.secondary_fee1}}
                        <v-divider></v-divider>
                        Grade 3: {{SCHOOL.school_fee.secondary_fee1}}
                        <v-divider></v-divider>
                        Grade 4: {{SCHOOL.school_fee.secondary_fee2}}
                        <v-divider></v-divider>
                        Grade 5: {{SCHOOL.school_fee.secondary_fee2}}
                        <v-divider></v-divider>
                        Grade 6: {{SCHOOL.school_fee.secondary_fee2}}
                      </v-card-text>
                    </v-card>
                  </v-flex>

                  <!-- Ranking at National Exams -->
                  <v-card-text class="light-blue--text display-2">
                    <p class="text-md-center">Ranking at National Exams</p>
                    <v-divider class="light-blue pb-1"></v-divider>
                  </v-card-text>
                  <v-flex xs12 sm6 offset-sm3>
                    <v-card pa-3>
                      <v-card-text class="subheading">
                        <v-card-text class="light-blue--text title">
                          <p class="text-md-center">Results Primary 6- P6</p>
                        </v-card-text>
                        <v-divider></v-divider>
                        <strong>Year:{{ SCHOOL.ranking.p6_17[0]}}</strong>
                        <br>Ranked : Year:{{ SCHOOL.ranking.p6_17[1]}}
                        <br>Year:{{ SCHOOL.ranking.p6_17[2]}}
                        <v-divider pa-2></v-divider>
                        <strong>Year: {{ SCHOOL.ranking.p6_16[0]}} </strong>
                        <br>Ranked : Year:{{ SCHOOL.ranking.p6_16[1]}}
                        <br>Year:{{ SCHOOL.ranking.p6_16[2]}}
                        <v-divider></v-divider>
                        <v-card-text class="light-blue--text title">
                          <p class="text-md-center">Ranking Senior 3- S3</p>
                        </v-card-text>
                        <v-divider></v-divider>
                        <strong>Year:{{ SCHOOL.ranking.s3_17[0]}}</strong>
                        <br>Ranked : Year:{{ SCHOOL.ranking.s3_17[1]}}
                        <br>Year:{{ SCHOOL.ranking.s3_17[2]}}
                        <v-divider pa-2></v-divider>
                        <strong>Year: {{ SCHOOL.ranking.s3_16[0]}}</strong>
                        <br>{{ SCHOOL.ranking.s3_16[1]}}
                        <br>{{ SCHOOL.ranking.s3_16[2]}}
                        <v-divider></v-divider>
                        <v-card-text class="light-blue--text title">
                          <p class="text-md-center">Ranking Senior 6- S6</p>
                        </v-card-text>
                        <v-divider></v-divider>
                        <strong>Year: {{ SCHOOL.ranking.s6_17[0]}}</strong>
                        <br>Ranked : {{ SCHOOL.ranking.s6_17[1]}}
                        <br>{{ SCHOOL.ranking.s6_17[2]}}
                        <v-divider pa-2></v-divider>
                        <strong>Year: {{ SCHOOL.ranking.s6_16[0]}}</strong>
                        <br>Ranked : {{ SCHOOL.ranking.s6_16[1]}}
                        <br>{{ SCHOOL.ranking.s6_16[2]}}
                        <v-divider></v-divider>
                      </v-card-text>
                    </v-card>
                  </v-flex>

                  <!-- Admissions -->
                  <v-card-text pt- class="light-blue--text display-2">
                    <p class="text-md-center">Admission Requirements</p>
                    <v-divider class="light-blue pb-1"></v-divider>
                  </v-card-text>
                  <v-container grid-list-xl>
                    <v-layout row wrap>
                      <v-flex xs12 sm4 text-xs-center>
                        <v-icon size="50" color="light-blue">fas fa-info-circle</v-icon>
                        <p class="title">{{SCHOOL.Admissions.Entrance_Exam}}</p>
                      </v-flex>
                      <v-flex xs12 sm4 text-xs-center>
                        <v-icon size="50" color="light-blue">fas fa-info-circle</v-icon>
                        <p class="title">{{SCHOOL.Admissions.Acceptance_Rate}}</p>
                      </v-flex>
                      <v-flex xs12 sm4 text-xs-center>
                        <v-icon size="50" color="light-blue">fas fa-info-circle</v-icon>
                        <p class="title"> {{SCHOOL.Admissions.National_Exams}} </p>
                      </v-flex>
                    </v-layout>
                  </v-container>
                  <!-- Curriculum -->
                  <v-card-text class="light-blue--text display-2">
                    <p class="text-md-center">Curriculums</p>
                    <v-divider class="light-blue pb-1"></v-divider>
                  </v-card-text>
                  <v-container grid-list-xl>
                    <v-layout row wrap>
                      <v-flex xs12 sm4 text-xs-center>
                        <v-icon size="50" color="light-blue">fas fa-info-circle</v-icon>
                        <p class="title">{{SCHOOL.Curriculum[0]}}</p>
                      </v-flex>
                      <v-flex xs12 sm4 text-xs-center>
                        <v-icon size="50" color="light-blue">fas fa-info-circle</v-icon>
                        <p class="title">{{SCHOOL.Curriculum[1]}}</p>
                      </v-flex>
                      <v-flex xs12 sm4 text-xs-center>
                        <v-icon size="50" color="light-blue">fas fa-info-circle</v-icon>
                        <p class="title">{{SCHOOL.Curriculum[2]}}</p>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <!-- side container with reviews -->
      <v-flex d-flex md3 xs12 sm3>
        <v-card color="amber lighten-5" tile flat>
          <v-card-text class="orange--text display-2">Information</v-card-text>
          <v-card-text class="headline">Green Hills Academy</v-card-text>
          <v-card-text class="grey--text subheading">
            <p>Headmaster's Name: {{SCHOOL.Information.Headmaster}} </p>
            <p>Telephone: {{SCHOOL.Information.Telephone}}</p>
            <p>Email:{{SCHOOL.Information.Email}}</p>
            <p>Business Hours:{{SCHOOL.Information.Business_Hours}}</p>
            <p>School's website:{{SCHOOL.Information.Website}}</p>
            <p>Address: {{SCHOOL.Information.Address}}</p>
          </v-card-text>
          <p class="text-md-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5285372368317!2d30.102248015144955!3d-1.9412390372397264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6dd770ef2e5%3A0x494d6bac0a0eb50b!2sGreen+Hills+Academy!5e0!3m2!1sen!2sjp!4v1543291263894"
              width="300"
              height="300"
              frameborder="2"
              style="border:0"
              allowfullscreen
            ></iframe>
          </p>
          <!-- Reviews Section -->
          <v-card-text>
            <p class="text-md-center orange--text display-2">Reviews</p>
          </v-card-text>
          <div v-for="(item, i) in SCHOOL.review" :key="i">
          <v-card tile width="280" class="elevation-16 mx-auto">
            <v-card-title class="headline" primary-title>{{item.title}}</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="subheading">
              <v-icon>person</v-icon>{{item.reviewer}}
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>{{item.review_content}}
              <div class="text-xs-center mt-5">
                <v-rating
                  v-model="rating"
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  empty-icon="$vuetify.icons.ratingFull"
                  half-increments
                  hover
                ></v-rating>
              </div>
            </v-card-text>
          </v-card>
          </div>
          <v-divider class="pb-2"></v-divider>
          <v-card-text class="orange--text title pt-4">
            <p class="text-xs-center display-1">Write a Review</p>
          </v-card-text>
          <p
            class="text-xs-center"
          >Are you a student or parent at this school? Help others make a well-informed choice.
            <br>rate this school and leave a comment! Thank you
          </p>
          <div class="text-xs-center">
            <v-rating large hover v-model="user_rating"></v-rating>
          </div>
          <v-layout align-center justify-center>
            <v-form>
              <v-text-field label="Title" required light></v-text-field>
              <v-textarea label="review" required outline light></v-textarea>
              <v-btn>submit</v-btn>
            </v-form>
          </v-layout>
          <v-card-text class="orange--text title pt-4">
            <p class="text-xs-center display-1">Contact Us</p>
          </v-card-text>
          <v-layout align-center justify-center>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Name" required></v-text-field>
              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
              <v-text-field v-model="email" :rules="emailRules" label="Telephone" required></v-text-field>
              <v-textarea label="Comments / Questions" required outline solo light></v-textarea>
              <v-btn :disabled="!valid" @click="submit">submit</v-btn>
            </v-form>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
export default {
  data() {
    return {
      rating: 4.5,
      user_rating: 3.5,
      advancedSearch: false,
      images_slider: [
        {
          src: "/lib/img/school-images.jpg"
        },
        {
          src: "/lib/img/school-images2.jpg"
        },
        {
          src: "/lib/img/school-images3.jpg"
        },
        {
          src: "/lib/img/school-images5.jpg"
        },
        {
          src: "/lib/img/school-images4.jpg"
        }
      ],
      tab: null,
      items: ["Basic Info", "Fees", "Ranking", "Admissions", "Curriculum"],
      SCHOOL: {},

      text:
        "Green Hills Academy was established in 1997, with just 130 number of students. Today the school has grown to more than 1600 students with 56 different nationalities spanning from two years of age through Grade 12. Green Hills Academy is centrally located on a lush 26 acre campus in Nyarutarama, Kigali. Its facilities include a state of the art gymnasium, pool, music and band room, dining hall, boarding houses and soccer fields.  Green Hills Academy is the only school in Rwanda offering the International Baccalaureate (IB) Diploma Program, which helps our students get into competitive universities globally. Green Hills Academy is also the only school in Rwanda with Label France Education accreditation, helping students pursue further education and careers in Francophone countries. Our boarding facilities are offered from Grades 7 -12."
    };
  },
  methods: {
    getSchoolData: function() {
      const _this = this;
      axios.get("/lib/json/school_details.json").then(function(res) {
        console.log(res.data);
        Vue.set(_this, "SCHOOL", res.data);
      });
    }
  },
  created: function() {
    this.getSchoolData();
  }
};
</script>

<style lang="stylus">
#example-custom-transition {
  .fade {
    &-enter-active, &-leave-active, &-leave-to {
      transition: 0.3s ease-out;
      position: absolute;
      top: 0;
      left: 0;
    }

    &-enter, &-leave, &-leave-to {
      opacity: 0;
    }
  }
}
</style>