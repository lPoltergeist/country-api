<script>
import Navbar from './components/NavBar/Navbar.vue';
import Home from './pages/Home.vue';
import CountryDetailed from './pages/CountryDetailed.vue';
import './styles/GlobalStyles.css';


export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    CountryDetailed,
  },

  data() {
    return {
      theme: "light"
    }
  },

  mounted(){
    this.theme = localStorage.theme;
  },

  watch:{
    theme(NewTheme) {
      localStorage.theme = NewTheme;
    }
  },
 

  methods: {
    changeTheme(){
      this.theme = this.theme === "dark" ? "light" : "dark";
      console.log(this.theme)
    }
  }
}

</script>

<template>
  <body :id="this.theme === 'light' ? 'light' : 'dark' ">
    <Navbar :themeColor="theme" :click="changeTheme"/>
    <router-view/>
 
  </body>
</template>

<style scoped></style>
