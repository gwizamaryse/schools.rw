<template>
  <v-app >
    <v-navigation-drawer app v-model="drawer" right fixed pt-2>


    <v-divider></v-divider>

    <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon color="light-blue">home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon :color="$root.COLOR.color1">school</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Pre-Nursery</v-list-tile-title>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon :color="$root.COLOR.color2"> school</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Nursery</v-list-tile-title>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon :color="$root.COLOR.color3"> school</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Primary</v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon :color="$root.COLOR.color4"> school</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Secondary Schools</v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon :color="$root.COLOR.color5"> school</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>TVET-Vocational Schools</v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
       <v-list-tile>
        <v-list-tile-action>
          <v-icon :color="$root.COLOR.color6"> school</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>University and Polytechnics </v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
       <v-list-tile>
        <v-list-tile-action>
          <v-icon color="light-blue">language</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>English </v-list-tile-title>
      </v-list-tile>

       <v-list-tile>
        <v-list-tile-action>
          <v-icon color="light-blue">language</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Kinyarwanda </v-list-tile-title>
      </v-list-tile>

       <v-list-tile>
        <v-list-tile-action>
          <v-icon color="light-blue">language</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>French </v-list-tile-title>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>school</v-icon>
        </v-list-tile-action>
      <router-link to='/school_details/5'>  <v-list-tile-title>School Details page</v-list-tile-title></router-link>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>school</v-icon>
        </v-list-tile-action>
      <router-link to='/test'>  <v-list-tile-title>test page-Axios</v-list-tile-title></router-link>
      </v-list-tile>
       <v-list-tile>
        <v-list-tile-action>
          <v-icon>school</v-icon>
        </v-list-tile-action>
      <router-link to='/test2'>  <v-list-tile-title>test page2-Vue</v-list-tile-title></router-link>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>


      <v-toolbar app fixed class="white" height="90">
        <v-toolbar-title>
          <h1 > <router-link to="/">
        <img src="/lib/img/logo/ishuri_logo.svg">  </router-link> </h1> </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn  flat large color="primary"  >
        <v-icon  large outline color="light-blue"> language    </v-icon>
        Change Language

         </v-btn>

       <v-toolbar-side-icon @click.stop="drawer = !drawer" outline fab color="light-blue"></v-toolbar-side-icon>

    </v-toolbar-items>
  </v-toolbar>


 <v-content>
      <router-view></router-view>
    </v-content>
          <v-footer height="auto" class="light-blue">
            <v-layout justify-center row wrap>
              <v-btn  v-for="link in links" :key="link"  color="white" flat round>{{ link }}</v-btn>
              <v-flex py-2 text-xs-center white--text xs12 ><strong>Studio Canbe Corp &copy; 2019</strong></v-flex>
            </v-layout>
          </v-footer>


  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
         links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Contact Us'
      ],name: 'Hello World'
      }
    }
  }
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
