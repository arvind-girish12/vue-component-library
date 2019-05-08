<template>
  <div class="wrapper-view">
         <ComponentContainer >
         <template slot="component">
           Modal component goes here
         </template>
         </ComponentContainer>
         <ConfigurationContainer >
            <template slot="logs">
           Modal logs
           </template>
         <template slot="documentation">
           Modal documentation
           </template>
            <template slot="triggers">
              Modal triggers
           </template>
            <template slot="code">
              Modal code
           </template>
         </ConfigurationContainer>
  </div>
</template>

<script>
// @ is an alias to /src
import ComponentContainer from '@/components/ComponentContainer.vue';
import ConfigurationContainer from '@/components/ConfigurationContainer.vue';

export default {
  name: 'ModalView',
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

