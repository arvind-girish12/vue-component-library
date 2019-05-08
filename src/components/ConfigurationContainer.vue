<template>
<div class="configuration-container"> 
   YYYYYY
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
  },
  watch:{
  },
  methods: {
    
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
