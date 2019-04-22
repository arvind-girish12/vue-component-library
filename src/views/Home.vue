<template>
  <div class="home">
    <Header />
    <div class="content">
      <div class="left-section">
           <LeftNav />
      </div>
      <div class="right-section"> 
           <ComponentContainer />
           <ConfigurationContainer />
      </div>
    </div>
      </div>
</template>

<script>
// @ is an alias to /src
import LeftNav from '@/components/LeftNav.vue';
import ComponentContainer from '@/components/ComponentContainer.vue';
import ConfigurationContainer from '@/components/ConfigurationContainer.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'home',
  components: {
    LeftNav,
    ComponentContainer,
    ConfigurationContainer,
    Header,
  },
};
</script>

<style lang="less" scoped>
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
  display: flex;
  flex-direction: column;
  background: #a9c6de;
}
</style>

