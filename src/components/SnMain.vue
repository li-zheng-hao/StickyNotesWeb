<template>
  <div class="sn-main">
    <mv-full-page

        :isV="isV"
        :pages="3"
        :page.sync="currentPage"
        :bgArr="bgArr"
        :isCache="true"
        @rollEnd="rollScreen"
        :transition="{
        duration: '700ms', // 动画时长
        timingFun: 'ease', // 动画速度曲线
        delay: '0s', // 动画延迟
      }"
    >
      <template #page1>
        <div class="page1">
          <div class="image-box1 " >
            <div class="animate__animated animate__fadeInLeft">
              <el-image :src="src1" style="margin-left: 40px" fit="none"></el-image>
            </div>
            <div class="sn-description animate__animated animate__fadeInRight" style="margin-right: 40px">
              <h2>多种主题颜色切换</h2>
              <h2>换个心情  </h2>
            </div>
          </div>
        </div>
      </template>

      <template #page2>
        <div class="page2">
          <div  class="image-box2">
            <div class="sn-description animate__animated animate__fadeInLeft">
              <h2>快捷键立即显示</h2>
              <h2>随时记录灵感</h2>
            </div>
            <div class="animate__animated animate__fadeInRight">
              <el-image :src="src2" fit="fill" style="width: 80%;margin-right: 10px"></el-image>
            </div>
          </div>
        </div>
      </template>

      <template #page3>
        <div class="page3">
          <div class="image-box3 ">
            <div class="animate__animated animate__fadeInLeft">
              <el-image :src="src3" fit="fill" style="width: 80%;margin-left: 100px"></el-image>
            </div>
            <div class="sn-description animate__animated animate__fadeInRight">
              <h2>便签文件集</h2>
              <h2>不需要即可隐藏</h2>
            </div>
          </div>
        </div>
      </template>


    </mv-full-page>




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
      src1: img,
      src2:img2,
      src3:img3,
      isV: true,
      currentPage: 1,
      bgArr: ["white", "#81ecec", "white"]
    }
  },
  methods:{
    rollScreen(page)
    {
      // this.$message.success(page);
    }
  }
}
</script>

<style lang="less" scoped>
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
[class^='page']{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/deep/ .full-page-wrapper{
  margin-top: 61px;
}
/deep/.pointer-wrapper.right li{
  background-color: lightgrey;
}
/deep/.pointer-wrapper.right li.active{
  background-color: #1ABC9C;
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
    animation-duration:1s
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
    animation-duration:1s

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
    animation-duration:1s

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