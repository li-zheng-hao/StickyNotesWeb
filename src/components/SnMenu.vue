<template>
  <el-menu :default-active="index" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item  class="sn-title">  <span class="sn-title" style="font-size: 24px;font-family: Verdana">StickyNotes</span>
    </el-menu-item>
    <el-menu-item index="1" >主页</el-menu-item>

    <el-menu-item index="2">下载地址</el-menu-item>
    <el-menu-item index="3">关于</el-menu-item>
    <el-menu-item class="item4" index="4">
      <el-tooltip  effect="dark" content="Github" placement="top">
        <a href="http://www.lizhenghao.site" target="_blank">
          <i
              class="fa fa-github fa-2x" aria-hidden="true">
          </i></a>
      </el-tooltip>
    </el-menu-item>

  </el-menu>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      index: '1'
    }
  },
  methods: {
    handleSelect(select) {
      if(select=='1')
      {
        this.$EventBus.$emit('changePage', '/home');
      }else if(select=='2')
      {
        this.$EventBus.$emit('changePage', '/download');
      }
      else if(select=='3')
      {
        this.$EventBus.$emit('changePage', '/about');
      }else{
        this.$EventBus.$emit('changePage', '/home');
      }
    }
  }

}
</script>

<style scoped lang="less">

.el-menu {
  display: flex;
  .sn-title{
    margin-right: 60%;
  }
  .el-menu-item{
    margin-left: 30px;

  }
  .item4 {
    margin-left: auto;
  }
}


</style>