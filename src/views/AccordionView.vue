<template>
  <div class="wrapper-view">
         <ComponentContainer >
         <template slot="component">
           Accordion component goes here
         </template>
         </ComponentContainer>
         <ConfigurationContainer >
           <template slot="logs">
           accordion logs
           </template>
         <template slot="documentation">
           accordion documentation
           </template>
            <template slot="triggers">
              accordion triggers
           </template>
            <template slot="code">
              accordion code
           </template>
         </ConfigurationContainer>
  </div>
</template>

<script>
// @ is an alias to /src
import ComponentContainer from '@/components/ComponentContainer.vue';
import ConfigurationContainer from '@/components/ConfigurationContainer.vue';

export default {
  name: 'AccordionView',
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

