<template>
  <div id="app">
   <Header />
    <div class="content">
      <div class="left-section">
           <LeftNav />
      </div>
      <div class="right-section">   
           <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNav from './components/LeftNav.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    LeftNav,
    Header
  },
};
</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.content {
  display: flex;
  height: 100vh;
}
.left-section {
  min-width: 200px;
  flex: 1;
  background: #a9c6de;
}
.right-section {
  flex: 6;
  background: #a9c6de;
}
</style>
