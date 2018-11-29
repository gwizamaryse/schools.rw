<template>
    <div>
      <!--  top search  -->
      <v-card  color="grey lighten-3" tile flat>
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
<!--   Advanced search  -->
<section v-if="advancedSearch"> 
<v-card color="grey lighten-2">
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

   <!--  search results -->

   <div id="search results">
     
     <v-card tile flat>
       <v-card-text class="title grey--text ">
         we have found 686 schools matching your criteria
          <v-btn round x-large color="info">
                    <v-icon> fas fa-balance-scale </v-icon>Compare </v-btn>  
       </v-card-text>
     

    <v-card-text>  <v-divider class="light-blue"></v-divider> </v-card-text>
    
    <v-card flat tile>
  
     
<!--   search result #1 -->
<v-card flat tile >
 <v-container  grid-list-xl>
   <v-layout row wrap >
      <v-flex xs16 sm2>
         <v-img src="/lib/img/logo/logo-school.jpg" ></v-img>
        </v-flex>
    
       <v-flex xs12 sm8>
         <v-flex xs12 sm8>
           <p  class="display-1">Green Hills Academy</p> </v-flex>
           <v-flex xs12>
           <v-btn depressed small color="error"> Pre-Nursery School</v-btn>
             <v-btn  depressed small color="success"> Nursery School</v-btn>
             <v-btn depressed small color="warning"> Primary school </v-btn>
             <v-btn  depressed small class="info"> General Secondary  </v-btn>  </v-flex>

      <v-flex xs12 sm8>
       
         <v-icon>fas fa-building</v-icon> sector: Private
         
         <v-icon>wc</v-icon> Gender: Mixed 
       
         <v-icon>fas fa-church</v-icon> Religion: Secular 
       
         <v-icon>fas fa-users</v-icon> Levels: Combined  
          </v-flex>

          
      </v-flex>
      
      <v-flex xs12 sm2>
       <v-btn block round x-large color="info">
                    <v-icon> fas fa-balance-scale </v-icon>Compare </v-btn>  
      </v-flex>
      
    </v-layout>
  </v-container>
  </v-card>
  <v-card color="light-blue lighten-5">
 <v-container  grid-list-xl>
  
    <v-layout row wrap >
      <v-flex xs16 sm2>
         <v-img
        src="/lib/img/logo/logo-school.jpg" >
      </v-img>
        
      </v-flex>
    
       <v-flex xs12 sm8>
        

        <v-overflow-btn
          :items="dropdown_edit"
          label="Private, Public"
          editable
          item-value="text"
        ></v-overflow-btn>
      </v-flex>
      
      <v-flex xs12 sm2>
       <v-btn block round x-large color="info">
                    <v-icon> fas fa-balance-scale </v-icon>Compare </v-btn>  
      </v-flex>
      
    </v-layout>
  </v-container>
  </v-card>
  <v-card >
 <v-container  grid-list-xl>
  
    <v-layout row wrap >
      <v-flex xs16 sm2>
         <v-img
        src="/lib/img/logo/logo-school.jpg" >
      </v-img>
        
      </v-flex>
    
       <v-flex xs12 sm8>
        

        <v-overflow-btn
          :items="dropdown_edit"
          label="Private, Public"
          editable
          item-value="text"
        ></v-overflow-btn>
      </v-flex>
      
      <v-flex xs12 sm2>
       <v-btn block round x-large color="info">
                    <v-icon> fas fa-balance-scale </v-icon>Compare </v-btn>  
      </v-flex>
      
    </v-layout>
  </v-container>
  </v-card>
  <v-card color="light-blue lighten-5">
 <v-container  grid-list-xl>
  
    <v-layout row wrap >
      <v-flex xs16 sm2>
         <v-img
        src="/lib/img/logo/logo-school.jpg" >
      </v-img>
        
      </v-flex>
    
       <v-flex xs12 sm8>
        

        <v-overflow-btn
          :items="dropdown_edit"
          label="Private, Public"
          editable
          item-value="text"
        ></v-overflow-btn>
      </v-flex>
      
      <v-flex xs12 sm2>
       <v-btn block round x-large color="info">
                    <v-icon> fas fa-balance-scale </v-icon>Compare </v-btn>  
      </v-flex>
      
    </v-layout>
  </v-container>
  </v-card>
    </v-card>
    <!-- pagination -->
  <div class="text-xs-center pa-4">
    <v-pagination
      v-model="page"
      :length="5"
      circle
      color="info"
    ></v-pagination>
  </div>
</v-card>

   </div>
  
 
    </div>
</template>

<script>
export default {
  data (){
    return{
       advancedSearch : true,
       page: 2
    }
  }
}
</script>
