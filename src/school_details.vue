<template>
    <div>
      <!--  top search  -->
      
    
    <v-layout row wrap>
        <v-flex d-flex xs12>
            <v-layout column>
                <v-flex d-flex>
                    <v-card  color="grey lighten-3" tile flat>
                        <v-form>
                            <v-container fluid >
                                <v-layout row wrap pa-2 ml-5>
                                    <v-layout row>
                                        <v-flex xs8 order-md2 order-xs1 d-flex> 
                                            <v-card><v-text-field   type="text" label="Search school by district or school's name" >   
                                                </v-text-field></v-card> 
                                        </v-flex>
                                        <v-flex xs4 order-md3 order-xs2 d-flex> 
                                            <v-card tile color="error" >  <router-link to = '/search'> <v-btn  block depressed color="error">
                                                <v-icon> search </v-icon> Search </v-btn>  </router-link> </v-card> </v-flex> </v-layout>
               <v-spacer></v-spacer>
                <v-layout row  align-end right >
                    
                    <v-flex xs4 order-lg2> <v-card tile flat color="success">
                    <v-card-text><v-btn depressed block color="success" @click="advancedSearch = !advancedSearch"> <v-icon> search </v-icon>   Advanced Search </v-btn>
                    </v-card-text> </v-card> 
                    </v-flex>
                    <v-flex xs4> <v-card tile flat color="warning"> 
                    <v-card-text><v-btn depressed block color="warning"><v-icon> search </v-icon> Search by Map </v-btn>
                    </v-card-text> </v-card> </v-flex>     
                </v-layout>  
        </v-layout>

        

    </v-container>
</v-form>
<!--   Advanced search  -->
<section v-if="advancedSearch"> 
<v-card color="white">
 <v-container  grid-list-xl>
  
    <v-layout row wrap >
      <v-flex xs12 sm3>
        <v-overflow-btn
          :items="dropdown_edit"
          label="Distance"
          editable
          item-value="text"
        ></v-overflow-btn>
      </v-flex>
       <v-flex xs12 sm3>
     

        <v-overflow-btn
          :items="dropdown_edit"
          label="City Area"
          editable
          item-value="text"
        ></v-overflow-btn>
      </v-flex>
       <v-flex xs12 sm3>
        

        <v-overflow-btn
          :items="dropdown_edit"
          label="Private, Public"
          editable
          item-value="text"
        ></v-overflow-btn>
      </v-flex>
      
      <v-flex xs12 sm3>
        <v-overflow-btn
          :items="dropdown_edit"
          label="Language"
          editable
          item-value="text"
        ></v-overflow-btn>
      </v-flex>
       <v-flex xs12 sm3>
     

        <v-overflow-btn
          :items="dropdown_edit"
          label="Gender Mixed"
          editable
          item-value="text"
        ></v-overflow-btn>
      </v-flex>
       <v-flex xs12 sm3>
     

        <v-overflow-btn
          :items="dropdown_edit"
          label="Primary School"
          editable
          item-value="text"
        ></v-overflow-btn>
      </v-flex>
      <v-flex xs12 sm3 d-flex>
         <v-overflow-btn
          :items="dropdown_edit"
          label="Boarding School"
          editable
          item-value="text"
        ></v-overflow-btn>
      </v-flex>
       <v-flex xs12 sm3 dflex>
      <v-btn block color="info"> <v-icon> search </v-icon> Advanced Search</v-btn> 
      </v-flex>
    </v-layout>
  </v-container>
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
              <v-card color="white" tile flat >
    <!-- print/compare buttons -->
   <v-flex d-flex>
        
               <v-layout align-center justify-end fill-height> 
            
             <v-btn  x-large round color="info"> 
                     <v-icon> print </v-icon>  Print </v-btn>
                <v-btn round x-large color="info">
                    <v-icon> fas fa-balance-scale </v-icon>Compare </v-btn>  
              

                 </v-layout>  

                </v-flex>
               
   <!--  school logo and school name -->

    <v-flex d-flex>
       <v-layout row wrap>
            <v-flex md4 sm4 d-flex >
                <v-card  flat tile > 
                  <v-flex xs6>
               <v-img height="150" src="/lib/img/logo/logo-school.jpg" > </v-img> </v-flex></v-card> </v-flex>
         <v-flex md8 xs8 d-flex >
 <v-card  flat tile align-content-center>
     <v-card-text class="display-2">
          <p > Green Hills Academy</p>
       
     </v-card-text>
 </v-card>
 </v-flex>
       </v-layout>
       </v-flex>

       <!-- carousel with school images -->
       <v-flex d-flex>
              <v-card  tile flat>
                  <v-carousel >
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
              <v-card  tile flat>
      <v-tabs
         centered
          v-model="tab"
          color="light-blue"
          align-with-title
          dark
          icons-and-text
        >
          <v-tabs-slider color="warning"></v-tabs-slider>
  
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
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
              <v-card  tile flat>
                  <v-card-text  class="light-blue--text display-2 ">
                       <p class="text-md-center">Basic Information</p> 
             <v-divider class="light-blue pb-1"></v-divider>  </v-card-text>
             <v-btn large color="error"> Pre-Nursery School</v-btn>
             <v-btn  large color="success"> Nursery School</v-btn>
             <v-btn large color="warning"> Primary school </v-btn>
             <v-btn large class="info"> General Secondary  </v-btn>  

            <v-card-text pl-5>  <v-divider class="light-blue"></v-divider> </v-card-text>

            

            <v-container  grid-list-xl>
  
    <v-layout row wrap >
      <v-flex xs12 sm3 text-xs-center>
     <v-icon size="80" color="light-blue">person</v-icon>
     <p class="title">1600 students</p>
      </v-flex>
       <v-flex xs12 sm3 text-xs-center>
     <v-icon size="80" color="light-blue"> supervised_user_circle</v-icon>
     <p class="title">Average 20 students per class</p>
      </v-flex>
      <v-flex xs12 sm3 text-xs-center>
     <v-icon size="80" color="light-blue"> language </v-icon>
     <p class="title">English <br> French <br> kinyarwanda </p>
      </v-flex>
      <v-flex xs12 sm3 text-xs-center>
     <v-icon size="80" color="light-blue">fas fa-tshirt</v-icon>
     <p class="title">Uniform is Mandatory</p>
      </v-flex>
      <v-flex xs12 sm3 text-xs-center>
     <v-icon size="80" color="light-blue">fas fa-school</v-icon>
     <p class="title">Private School</p>
      </v-flex>
      <v-flex xs12 sm3 text-xs-center>
     <v-icon size="80" color="light-blue">fas fa-church </v-icon>
     <p class="title">Secular</p>
      </v-flex>
      <v-flex xs12 sm3 text-xs-center>
     <v-icon size="80" color="light-blue"> wc </v-icon>
     <p class="title">Gender Mixed </p>
      </v-flex>

        <v-card-text pl-5>  <v-divider class="light-blue"></v-divider> </v-card-text>
    <v-flex xs12 sm3 text-xs-center>
     <v-icon size="80" color="light-blue"> fas fa-vials</v-icon>
     <p class="title">Science Lab </p>
      </v-flex>
      <v-flex xs12 sm3 text-xs-center>
     <v-icon size="80" color="light-blue">fas fa-desktop </v-icon>
     <p class="title">Computer Lab</p>
      </v-flex>

       <v-card-text pl-5>  <v-divider class="light-blue"></v-divider> </v-card-text>

       <v-flex xs12 sm3 text-xs-center>
     <v-icon size="80" color="light-blue"> fas fa-book-reader</v-icon>
     <p class="title">Library <br> 3000 books </p>
      </v-flex>
      <v-flex xs12 sm3 text-xs-center>
     <v-icon size="80" color="light-blue">fas fa-volleyball-ball </v-icon>
     <p class="title">4 sports Activities </p>
      </v-flex>
      <v-flex xs12 sm3 text-xs-center>
     <v-icon size="80" color="light-blue"> fas fa-music</v-icon>
     <p class="title">10 Music Activities </p>
      </v-flex>
      <v-flex xs12 sm3 text-xs-center>
     <v-icon size="80" color="light-blue"> fas fa-palette</v-icon>
     <p class="title">10 others Activities </p>
      </v-flex>
    </v-layout>
  </v-container>

 <!--  School Fees -->

     <v-card-text  class="light-blue--text display-2 ">
                       <p class="text-md-center">School Fees</p> 
             <v-divider class="light-blue pb-1"></v-divider>  </v-card-text>

             <v-card-text  class="light-blue--text title ">
                       <p class="text-md-center"> Pre-Nursery and Nursery </p> 
             </v-card-text>
      <v-flex xs12 sm6 offset-sm3 >
         <v-card pa-3> 
           <v-card-text class="subheading">
           Grade 1: 568000
           <v-divider></v-divider>
            Grade 2: 568000
           <v-divider></v-divider>
           Grade 2: 568000
           </v-card-text>
         </v-card>
         </v-flex>\
 
          <v-card-text  class="light-blue--text title ">
                       <p class="text-md-center"> Primary school</p> 
             </v-card-text>
      <v-flex xs12 sm6 offset-sm3 >
         <v-card pa-3> 
           <v-card-text class="subheading">
           Grade 1: 568000
           <v-divider></v-divider>
            Grade 2: 568000
           <v-divider></v-divider>
           Grade 3: 568000
            <v-divider></v-divider>
           Grade 4: 568000
           <v-divider></v-divider>
            Grade 5: 568000
           <v-divider></v-divider>
           Grade 6: 568000
           </v-card-text>
         </v-card>
         </v-flex>

        
          <v-card-text  class="light-blue--text title ">
                       <p class="text-md-center"> Secondary School</p> 
             </v-card-text>
      <v-flex xs12 sm6 offset-sm3 >
         <v-card pb-5> 
           <v-card-text class="subheading">
           Grade 1: 568000
           <v-divider></v-divider>
            Grade 2: 568000
           <v-divider></v-divider>
           Grade 3: 568000
            <v-divider></v-divider>
           Grade 4: 568000
           <v-divider></v-divider>
            Grade 5: 568000
           <v-divider></v-divider>
           Grade 6: 568000
           </v-card-text>
         </v-card>
         </v-flex>
    

<!-- Ranking at National Exams -->

   

<v-card-text  class="light-blue--text display-2 ">
                       <p class="text-md-center">Ranking at National Exams </p> 
             <v-divider class="light-blue pb-1"></v-divider>  </v-card-text>

              <v-flex xs12 sm6 offset-sm3 >
         <v-card pa-3> 
           <v-card-text class="subheading">
           Primary 6 (P6): 2017 : 30th on 230 : 90% of students passed
           <v-divider></v-divider>
            Senior 3 (S3): 2017 : 30th on 230 : 70% of students passed
           <v-divider></v-divider>
           Senior 6 (S6): 2017 : 30th on 230 : 60% of students passed
            <v-divider></v-divider>
          
           </v-card-text>
         </v-card>
         </v-flex>
    
             

<!-- Admissions -->

   

<v-card-text  class="light-blue--text display-2 ">
                       <p class="text-md-center"> Admission Requirements </p> 
             <v-divider class="light-blue pb-1"></v-divider>  </v-card-text>

             
                     <v-container  grid-list-xl>
  
    <v-layout row wrap >
     
      
      <v-flex xs12 sm4 text-xs-center>
     <v-icon size="50" color="light-blue">fas fa-info-circle </v-icon>
     <p class="title">Entrance Exam</p>
      </v-flex>
    

       
    <v-flex xs12 sm4 text-xs-center>
     <v-icon size="50" color="light-blue"> fas  fa-info-circle </v-icon>
     <p class="title">3 applicants for 1 place </p>
      </v-flex>
      <v-flex xs12 sm4 text-xs-center>
     <v-icon size="50" color="light-blue">fas  fa-info-circle</v-icon>
     <p class="title">for S1 and S4 Entrance Based on National Exam's Result</p>
      </v-flex>

      
    </v-layout>
  </v-container>
<!-- Curriculum -->
  <v-card-text  class="light-blue--text display-2 ">
                       <p class="text-md-center"> Curriculums </p> 
             <v-divider class="light-blue pb-1"></v-divider>  </v-card-text>


               <v-container  grid-list-xl>
  
    <v-layout row wrap >
     
      
      <v-flex xs12 sm4 text-xs-center>
     <v-icon size="50" color="light-blue">fas fa-info-circle </v-icon>
     <p class="title">Montessori </p>
      </v-flex>
    

       
    <v-flex xs12 sm4 text-xs-center>
     <v-icon size="50" color="light-blue"> fas  fa-info-circle </v-icon>
     <p class="title">Rwanda National Curriculum </p>
      </v-flex>
      <v-flex xs12 sm4 text-xs-center>
     <v-icon size="50" color="light-blue">fas  fa-info-circle</v-icon>
     <p class="title">Cambridge Curriculum</p>
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
        
        <v-flex d-flex  md3 xs12  sm3>
          <v-card color="amber lighten-5" tile flat>
            <v-card-text class="orange--text display-2"> Information </v-card-text>
            <v-card-text class="headline"> Green Hills Academy </v-card-text>
            <v-card-text class="grey--text subheading">
             <p >Headmaster's Name: </p>
             <p >Telephone: </p>
             <p > Email: </p>
             <p >Business Hours: </p>
             <p >School's website: </p> 
             <p >Address: </p>
             </v-card-text>

             <p class="text-md-center">

             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5285372368317!2d30.102248015144955!3d-1.9412390372397264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6dd770ef2e5%3A0x494d6bac0a0eb50b!2sGreen+Hills+Academy!5e0!3m2!1sen!2sjp!4v1543291263894" width="300" height="300" frameborder="2" style="border:0" allowfullscreen></iframe>
             </p>

       <!--       Reviews Section -->
       
             <v-card-text>
             <p class="text-md-center orange--text display-2"> Reviews </p>
             </v-card-text>
 

             <v-card
   tile
      width="280"
      class="elevation-16 mx-auto"
    >
      <v-card-title
        class="headline"
        primary-title
      >
        Great School !!
      </v-card-title>
      
         <v-divider></v-divider>
      <v-card-text class="subheading">  <v-icon> person </v-icon>  Review by Mary Kabalisa</v-card-text>
         <v-divider></v-divider>
      <v-card-text>
     This school is great. I would highly recommend. the teachers are very encouraging
  
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
<v-divider class="pb-2" ></v-divider>

    <v-card class="elevation-12 mx-auto" width="280">
      <v-card-title
      
        class="headline"
        primary-title
      >
        Great School !!
      </v-card-title>
      
         <v-divider ></v-divider>
      <v-card-text class="subheading">  <v-icon> person </v-icon>  Review by Mary Kabalisa</v-card-text>
         <v-divider></v-divider>
      <v-card-text>
     This school is great. I would highly recommend. the teachers are very encouraging
  
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
    
<v-divider class="pb-2"></v-divider>
    <v-card
     
      width="280"
     class="elevation-16 mx-auto"
    >
      <v-card-title
        class="headline"
        primary-title
      >
        Great School !!
      </v-card-title>
      
         <v-divider></v-divider>
      <v-card-text  class="subheading white">  <v-icon> person </v-icon>  Review by Mary Kabalisa</v-card-text>
         <v-divider></v-divider>
      <v-card-text>
     This school is great. I would highly recommend. the teachers are very encouraging
  
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

    <v-card-text class="orange--text title">
        <p class="text-xs-center display-1">Write a Review</p>
         <p class="text-xs-center"> Are you a student or parent at this school? Help others make a well-informed choice.<br>
         rate this school and leave a comment! Thank you</p>
     </v-card-text>
      <div class="text-xs-center">
    <v-rating  large hover v-model="user_rating"></v-rating>
  </div>
  <v-form  >
      <v-text-field
        label="Title"
        required
              
      ></v-text-field>
      <v-textarea
        label="review"
        required
        outline
        ></v-textarea>
  
      <v-btn >
        submit
      </v-btn>
    
    </v-form>



          </v-card>
        </v-flex>
      </v-layout>

    
    </div>
</template>

<script>
  export default {
    data () {
      return {
        rating:4.5,
        user_rating:3.5,
        advancedSearch : false,
        images_slider: [
          {
            src:'/lib/img/school-images.jpg'
          },
          {
            src:'/lib/img/school-images2.jpg'
          },
          {
           src:'/lib/img/school-images3.jpg'
          },
          {
            src:'/lib/img/school-images5.jpg'
          }
          ,
          {
            src:'/lib/img/school-images4.jpg'
          }
        ],
        tab: null,
      items: [
        'Basic Info', 'Fees', 'Ranking', 'Admissions', 'Curriculum'
      ],
   
      text: 'Green Hills Academy was established in 1997, with just 130 number of students. Today the school has grown to more than 1600 students with 56 different nationalities spanning from two years of age through Grade 12. Green Hills Academy is centrally located on a lush 26 acre campus in Nyarutarama, Kigali. Its facilities include a state of the art gymnasium, pool, music and band room, dining hall, boarding houses and soccer fields.  Green Hills Academy is the only school in Rwanda offering the International Baccalaureate (IB) Diploma Program, which helps our students get into competitive universities globally. Green Hills Academy is also the only school in Rwanda with Label France Education accreditation, helping students pursue further education and careers in Francophone countries. Our boarding facilities are offered from Grades 7 -12.'


      }
    }
  }
</script>

<style lang="stylus">
  #example-custom-transition
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0
        left: 0

      &-enter, &-leave, &-leave-to
        opacity: 0
</style>