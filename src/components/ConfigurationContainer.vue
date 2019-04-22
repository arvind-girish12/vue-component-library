<template>
<div class="configuration-container"> 
   <div class="config-component" v-for="(config) in configKeys">
   <component :is="checkComponent(componentConfig[config])"></component>
   </div>
</div>
</template>

<script>
import Checkbox from './librarycomponents/Checkbox.vue';
import Input from './librarycomponents/Input.vue';
export default {
    name: 'ConfigurationContainer',
  components: {
    Checkbox,
    Input,
  },
  data() {
    return{
      componentConfig: {},
      configKeys: [],
    }
  },
  computed: {
   currentComponent(){
     return this.$store.getters.CURRENT_COMPONENT;
   }
  },
  watch:{
    currentComponent(value) {
        this.handleComponentConfiguration(this.currentComponent);
    this.handleConfigTypes();
    }
},
  methods: {
    handleComponentConfiguration(currentComponent) {
      switch(currentComponent) {
        case 'Checkbox': {
          componentConfig = this.$store.getters.CHECKBOX
          break;
        }
        case 'Accordion':{
          componentConfig = this.$store.getters.ACCORDION
          break;
        }
        case 'Modal':{
          componentConfig = this.$store.getters.MODAL
          break;
        }
      }
    },
    handleConfigTypes(){
      this.configKeys = Object.keys(componentConfig);
    },
    checkComponent(config) {
      if(typeof(config) === 'string' || typeof(config) === 'number'){
        return 'Input'
      } else if(typeof(config) === 'boolean'){
        return 'Checkbox'
      }
    },
  },
  mounted() {
   
  }
}
</script>


<style lang="less" scoped>
.configuration-container {
  flex: 2;
  border: solid 1px #a9c6de;
  background: #eaf5ff;
  margin-top: 16px;
  margin-left: 8px;
}
</style>
