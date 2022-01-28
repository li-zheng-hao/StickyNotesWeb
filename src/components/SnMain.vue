<template>
  <div class="SnMain">
    <div class="image-box1">
      <el-image :src="src" fit="fill"></el-image>
    </div>
    <div class="image-box2">
      <el-image :src="src" fit="fill"></el-image>
    </div>
    <div class="image-box3">
      <el-image :src="src" fit="fill"></el-image>
    </div>
  </div>
</template>

<script>
export default {
  name: "SnMain",
  data() {
    return {
      a: 1,
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }
  },
}
</script>

<style lang="less" scoped>
.SnMain{
  height: 100%;
  width: 100%;
  /deep/ .el-image{
    height: 100%;
    padding: 0;
    width: 100%;
  }
  .image-box1 {
    height: 100%;
    width: 100%;
    background-color: #3a8ee6;
    margin: 0;
  }

  .image-box2 {
    height: 100%;
    background-color: #00ff00;
    margin: 0;
  }

  .image-box3 {
    height: 100%;
    background-color: #8c939d;
    margin: 0;

  }
}


</style>