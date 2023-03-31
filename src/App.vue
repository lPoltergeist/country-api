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
 <!--<Home :themeColor="theme"/>-->
 <CountryDetailed/> 
 
  </body>
</template>

<style scoped></style>
