<template>
  <div class="home">
    <el-container>
      <el-header>
        <SnMenu/>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

  </div>
</template>

<script>
import SnMenu from "@/components/SnMenu";
import SnMain from "@/components/SnMain";

export default {
  name: 'Home',
  components: {
    SnMain,
    SnMenu
  },
  data() {
    return {
    }
  },
  methods: {
    handleSelect(select) {
      this.$message(select);
    }
  },
  beforeDestroy() {
    this.$EventBus.$off('changePage');
  },
  mounted() {
    this.$router.push('/home');
    this.$EventBus.$on('changePage', (url)=>{
       this.$router.push((url));
    });
  }


}
</script>
<style lang="less" scoped>

.home{
  height: 100%;
  .el-header{
    padding: 0px !important;
  }
}
.el-container,.el-main{
    height: 100%;
    padding: 0px;

  }

</style>
