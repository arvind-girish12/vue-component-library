<template>
  <div class="wrapper-view">
         <ComponentContainer >
         <template slot="component">
           Checkbox component goes here
         </template>
         </ComponentContainer>
         <ConfigurationContainer >
         <template slot="documentation">
           Checkbox documentation
           </template>
            <template slot="triggers">
              Checkbox triggers
           </template>
            <template slot="code">
              Checkbox code
           </template>
         </ConfigurationContainer>
  </div>
</template>

<script>
// @ is an alias to /src
import ComponentContainer from '@/components/ComponentContainer.vue';
import ConfigurationContainer from '@/components/ConfigurationContainer.vue';

export default {
  name: 'CheckboxView',
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

