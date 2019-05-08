<template>
<div class="component-container">
  <slot name="component"></slot>
</div>
</template>

<style lang="less" scoped>
.component-container {
  flex: 3;
  border: solid 1px #a9c6de;
  background: #eaf5ff;
  margin-top: 16px;
  margin-left: 8px;
}
</style>