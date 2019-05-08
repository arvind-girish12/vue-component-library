<template>
  <div class="wrapper-view">
         <ComponentContainer >
         <template slot="component">
           Input component goes here
         </template>
         </ComponentContainer>
         <ConfigurationContainer >
            <template slot="logs">
           Input logs
           </template>
         <template slot="documentation">
           Input documentation
           </template>
            <template slot="triggers">
              Input triggers
           </template>
            <template slot="code">
              Input code
           </template>
         </ConfigurationContainer>
  </div>
</template>

<script>
// @ is an alias to /src
import ComponentContainer from '@/components/ComponentContainer.vue';
import ConfigurationContainer from '@/components/ConfigurationContainer.vue';

export default {
  name: 'InputView',
  components: {
    ComponentContainer,
    ConfigurationContainer,
  },
};
</script>

<style lang="less" scoped>
.wrapper-view {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>

