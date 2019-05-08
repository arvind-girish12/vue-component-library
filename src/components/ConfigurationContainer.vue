<template>
<div class="configuration-container"> 
   <div class="tab-container">
    <ul id="tabs" class="nav nav-tabs" role="tablist" aria-orientation="horizontal">
      <li class="tab-item active">
        <a id="tab-pdf" href="#documentation" class="nav-link active" data-toggle="tab" role="tab" tabindex="0">Documentation</a>
      </li>
      <li class="tab-item">
        <a id="tab-image" href="#triggers" class="nav-link" data-toggle="tab" role="tab" tabindex="0">Triggers</a>
      </li>
      <li class="tab-item">
        <a id="tab-image" href="#code" class="nav-link" data-toggle="tab" role="tab" tabindex="0">Code</a>
      </li>
    </ul>
  </div>
  <div id="content" class="tab-content" role="tablist">
    <div id="documentation" class="card tab-pane in active" role="tabpanel">
      <slot name="documentation"></slot>
    </div>
    <div id="triggers" class="card tab-pane fade" role="tabpanel">
     <slot name="triggers"></slot>
    </div>
    <div id="code" class="card tab-pane fade" role="tabpanel">
    <slot name="code"></slot>
    </div>
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
