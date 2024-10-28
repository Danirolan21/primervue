<template>
  <HomeComponent/>
  <CineComponent/>
  <MusicaComponent/>
  <HolaMundo/>
  <img alt="Vue logo" src="./assets/images/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import CineComponent from './components/CineComponent.vue'
import HelloWorld from './components/HelloWorld.vue'
import HolaMundo from './components/HolaMundo.vue'
import HomeComponent from './components/HomeComponent.vue'
import MusicaComponent from './components/MusicaComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HolaMundo,
    HomeComponent,
    CineComponent,
    MusicaComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
