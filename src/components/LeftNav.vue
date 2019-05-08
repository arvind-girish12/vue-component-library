<template>
<div class="leftNav">
    <div class="title">Component List</div>
    <div class="search-bar">
     <font-awesome-icon icon="search" class="fa-lg search-icon" />
     <input type="text" placeholder="Search component"></input>
    </div>
    <div class="component-list">
        <div class="component-name">
           <a href="javascript:void[0]" @click="handleComponentClick()">Hi</a>
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
    }
  },
  computed: {
  },
  methods: {
    handleComponentClick() {
    console.log('hi')
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

