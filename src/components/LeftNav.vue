<template>
<div class="leftNav">
    <div class="title">Component List</div>
    <div class="search-bar">
     <font-awesome-icon icon="search" class="fa-lg search-icon" />
     <input type="text" placeholder="Search component"></input>
    </div>
    <div class="component-list">
        <div class="component-name" v-for="(component) in componentList">
           <a href="javascript:void[0]" @click="handleComponentClick(component)">{{component}}</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'LeftNav',
  components: {
  },
  data() {
    return{
          componentList: this.$store.state.componentList,
    }
  },
  computed: {
  },
  methods: {
    handleComponentClick(component) {
       this.$store.commit('SET_CURRENT_COMPONENT', component);
    },
  },
}
</script>

<style lang="less" scoped>
.leftNav {
  margin-top: 16px;
}
.search-bar {
  .search-icon {
    margin-left: 4px;
  }
  input {
    height: 30px;
    width: 80%;
    font-size: 16px;
  }
  text-align: start;
  margin: 4px 8px;
}

.title {
  margin-bottom: 8px;
}
</style>

