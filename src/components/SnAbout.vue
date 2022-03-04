<template>
  <div class="SnAbout">
    <el-card>
    <h1>关于项目技术栈</h1>
      <p>架构图:</p>

      <p class="architecture-img"><img height="700px" src="https://blog-1257680986.cos.ap-nanjing.myqcloud.com/stickynotesweb_architecture.svg"></p>

    <p>前端:</p>
    <p>1.Web:Vue2</p>
    <p>2.StickyNotes:WPF+MVVMLight(MVVM库)+MaterialDesign(UI库)+Mahapp(UI库)</p>
    <p>后端:</p>
      <p>1..Net Core Webapi</p>
      <p>2.ORM: SqlSugarCore</p>
      <p>3.数据库: Mysql</p>
      <p>4.模型映射: AutoMapper</p>
      <p>5.IOC: Autofac</p>
      <p>6.缓存数据库: Redis</p>
      <p>7.日志: log4net</p>
    <h1>关于BUG、任意建议或技术交流</h1>
    <p>1.优先通过github提issue</p>
    <p>2.通过我的邮箱 or QQ</p>

    <h1>关于作者的联系方式</h1>
    <p> QQ:1263212577 </p>
    <p> 邮箱:1263212577@qq.com/lizhenghao152@gmail.com</p>
    <p> 微信:lzh1263212577</p>
    <p> 博客:<a href="http://www.lizhenghao.site">http://www.lizhenghao.site</a></p>
    </el-card>


  </div>
</template>

<script>
export default {
  name: "SnAbout",
  data() {
    return {
      a: 1,
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      isV: true,
      currentPage: 1,
      bgArr: ["#4FD7F9", "orange", "pink", "green"]

    };
  },
}
</script>

<style lang="less" scoped>
.home /deep/ .full-page-wrapper{
  margin-top: 61px;
}
 .SnAbout{
   padding: 0;
   margin: 0;
 }
.el-card{
  margin: 50px;
  font-family: Verdana;
 /deep/ .el-card__body{
   display: flex;
   flex-direction: column;
   h1{
     align-self: center;
     color: #9c88ff;
   }
   .architecture-img{
     align-self: center;
   }
 }
}

</style>