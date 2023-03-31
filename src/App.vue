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
  }
}

</script>

<template>
  <Navbar />
  <CountryDetailed/>
</template>

<style scoped></style>
