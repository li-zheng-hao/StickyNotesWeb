<template>
  <div class="sn-main">
    <div class="image-box1">
      <div>
      <el-image :src="src1" style="margin-left: 40px" fit="none"></el-image>
      </div>
      <div class="sn-description" style="margin-right: 40px">
        <h2>多种主题颜色切换</h2>
        <h2>换个心情  </h2>
      </div>
    </div>
    <div class="image-box2">

      <div class="sn-description">
        <h2>快捷键立即显示</h2>
        <h2>随时记录灵感</h2>
      </div>
      <div>
        <el-image :src="src2" fit="fill" style="width: 80%;margin-right: 10px"></el-image>
      </div>
    </div>
    <div class="image-box3">
      <div>
        <el-image :src="src3" fit="fill" style="width: 80%;margin-left: 100px"></el-image>
      </div>
      <div class="sn-description">
        <h2>便签文件集</h2>
        <h2>不需要即可隐藏</h2>
      </div>
    </div>
    <el-backtop target=".sn-main" ></el-backtop>

  </div>
</template>

<script>
import img from "../assets/color.gif"
import img2 from "../assets/hotkey.gif"
import img3 from "../assets/history.gif"
export default {
  name: "SnMain",
  data() {
    return {
      a: 1,
      src1: img,
      src2:img2,
      src3:img3
    }
  },
}
</script>

<style lang="less" scoped>
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.sn-main{
  overflow: scroll;
  height: 100%;
  width: 100%;
  /deep/ .el-image{
    padding: 0;
  }
  .image-box1 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    margin: 0;
  }
  .image-box1>div{
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .image-box2 {
    background-color: #81ecec;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    margin: 0;
  }
  .image-box2>div{
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .image-box3 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    margin: 0;
  }
  .image-box3>div{
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.sn-description{
  font-size: 32px;
  font-family: Hiragino Sans GB,WenQuanYi Micro Hei,Microsoft Jhenghei;
}

</style>