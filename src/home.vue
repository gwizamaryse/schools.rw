<template>
<div>
<!-- Header -->

   <v-img   src="/lib/img/top-image.jpg" height="600">

        <v-layout pt-5 align-center justify-center >
 
      <h4 class="display-3  white--text">Find and Compare Schools In Rwanda </h4>
      </v-layout> 
       <v-layout pt-5 align-center  justify-center >
      <v-flex xs12 sm6 > 
        <v-card tile color="grey lighten-2">
           <v-form>
            <v-container fluid >
            <v-layout   >
                <v-flex xs12 >
                  <v-layout row>
                    <v-flex xs8 order-md2 order-xs1 d-flex> <v-card tile flat color="white"> 
                      <v-card-text><v-text-field  label="Search school by district or school's name" type="text">   
                        </v-text-field></v-card-text> </v-card>
                        </v-flex>
                     <v-flex xs4 order-md3 order-xs2 d-flex> 
                    <v-card tile color="error" > 
                      <v-card-text> 
                        <router-link to = '/search'>
                        <v-btn  block depressed color="error">
                          <v-icon> search </v-icon> Search </v-btn> 
                          </router-link> 
                          </v-card-text> </v-card> </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs6 order-lg2> <v-card tile flat color="success">
                       <v-card-text><v-btn depressed block color="success" @click="advancedSearch = !advancedSearch"> <v-icon> search </v-icon>   Advanced Search </v-btn>
                       </v-card-text> </v-card> 
                    </v-flex>
                    <v-flex xs6> <v-card tile flat color="warning"> 
                      <v-card-text><v-btn depressed block color="warning"><v-icon> search </v-icon> Search by Map </v-btn>
                      </v-card-text> </v-card> </v-flex>     
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
  

  <!-- schools listed -->

  <v-container>
    <v-layout>
      <v-flex md12>
        <v-card class="elevation-0 transparent" tile>
            <v-card-title primary-title class="layout justify-center">
              <div class="display-3 light-blue--text">Schools Listed</div>
               
            </v-card-title> 
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>

  <!-- containers with images -->

  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm4 pa-2>

        <v-card  color="error" hover>
        <v-img
          src="/lib/img/Pre-Nursery.jpg"
          height="300"
        >
        </v-img>
        <v-card-text>
        <v-btn large block depressed color="error">Pre-Nursery  <v-spacer></v-spacer> 90</v-btn> </v-card-text>
      </v-card>
        
      </v-flex>
      <v-flex xs12 sm4 pa-2>

        <v-card 
        color="success" hover>
        
        <v-img
          src="/lib/img/Nursery.jpg"
          height="300px"
        >
        </v-img>
        <v-card-text>
        <v-btn large block depressed  color="success">Nursery<v-spacer></v-spacer>3,186</v-btn> </v-card-text>
      </v-card>
        
      </v-flex>
      <v-flex xs12 sm4 pa-2>

        <v-card color="warning" hover>
        <v-img
          src="/lib/img/Primary.jpg"
          height="300px"
        >
        </v-img>
        <v-card-text>
        <v-btn large block depressed color="warning">Primary Schools <v-spacer></v-spacer> 2,877</v-btn> </v-card-text>
      </v-card>
        
      </v-flex>
      <v-flex xs12 sm4 pa-2>

        <v-card color="info" hover>
        <v-img
          src="/lib/img/Secondary.jpg"
          height="300px"
        >
        </v-img>
        <v-card-text>
         <v-btn flat large class="info"> Secondary School  </v-btn> </v-card-text>
      </v-card>
        
      </v-flex>
      <v-flex xs12 sm4 pa-2>

        <v-card color="lime" hover>
        <v-img
          src="/lib/img/TVET.jpg"
          height="305px"
          aspect-ratio="1.2"
        >
        </v-img>
        <v-card-text>
        <v-btn  flat block class="lime white--text">TVET</v-btn></v-card-text>
      </v-card>
        
      </v-flex>
      <v-flex xs12 sm4 pa-2>

        <v-card color="pink" hover>
        <v-img
          src="/lib/img/Tertiary.jpg"
          height="305px"
          aspect-ratio="1.7"
        >
        </v-img>
        <v-card-text>
        <v-btn block flat class="pink white--text">University, Polytechnics</v-btn></v-card-text>
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
              <div class="display-3 light-blue--text"> News & Information </div>
            </v-card-title> 
          </v-card>
      </v-flex>
      <v-flex xs12 >
        <v-expansion-panel popout>
          <v-expansion-panel-content
            v-for="(item,i) in 5"
            :key="i"
          >
            <div slot="header">10 schools updated their information</div>
            <v-card>
              <v-card-text>i-Shuri just opened! 50 new schools were added! </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>

    </v-layout>
  </v-container>


 </div> 

</template>

<script>
  export default {
    data: () => ({
      dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
      dropdown_icon: [
        { text: 'list', callback: () => console.log('list') },
        { text: 'favorite', callback: () => console.log('favorite') },
        { text: 'delete', callback: () => console.log('delete') }
      ],
      dropdown_edit: [
        { text: '100%' },
        { text: '75%' },
        { text: '50%' },
        { text: '25%' },
        { text: '0%' }
      ]
      ,advancedSearch : false
    })
  }
</script>
