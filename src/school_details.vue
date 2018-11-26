<template>
    <div>
      <!--  top search  -->
      
    <v-container fluid>
    <v-layout row wrap>
        <v-flex d-flex xs12>
            <v-layout column>
                <v-flex d-flex>
                    <v-card color="grey lighten-3" tile flat>
                        <v-form>
                            <v-container fluid >
                                <v-layout row wrap pa-4>
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
</v-card>
</v-flex>
</v-layout>
        </v-flex>

<!-- container with school details/white container  -->


    <v-flex d-flex md8 xs12 sm8>
          <v-layout row wrap>
         <v-flex d-flex>
              <v-card color="white" tile flat>
    <!-- print/compare buttons -->
   <v-flex d-flex>
              <v-layout   align-end right>
             <v-btn  large round color="info"> 
                     <v-icon> print </v-icon>  Print </v-btn>
                <v-btn round large color="info">
                    <v-icon> compare </v-icon> Compare </v-btn>   

                 </v-layout>  

                </v-flex>
               
   <!--  school logo and school name -->

    <v-flex d-flex>
       <v-layout row wrap>
            <v-flex md4 sm4 d-flex >
                <v-card tile> 
               <v-img src="/lib/img/logo/logo-school.jpg" > </v-img> </v-card> </v-flex>
         <v-flex md8 xs8 d-flex >
 <v-card tile>
     <v-card-text class="display-2">
         APAPER Primary School
     </v-card-text>
 </v-card>
 </v-flex>
       </v-layout>
       </v-flex>
       <v-flex d-flex>
              <v-card height="300" color="red" dark tile flat>
                 gggggggggggggggggggggggggggggggggggggggggggggggggggggg 
              </v-card>
            </v-flex>
          </v-card>
          </v-flex>
           </v-layout>
           </v-flex>

      



        <!-- side container with reviews -->
        
        <v-flex d-flex  md4 xs12  sm4>
          <v-card color="amber lighten-5" tile flat>
            <v-card-text class="orange--text display-2"> Information </v-card-text>
            <v-card-text class="display-1"> APAPER Primary School </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
    </div>
</template>
