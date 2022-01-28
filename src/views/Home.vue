<template>
  <div class="home">
    <el-container>
      <el-header>
        <SnMenu/>
      </el-header>
      <el-main>
        <SnMain/>
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
      a: 1,
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }
  },
  methods: {
    handleSelect(select) {
      this.$message(select);
    }
  }


}
</script>
<style lang="less" scoped>

.home{
  height: 100%;
}
.el-container,.el-main{
    height: 100%;
    padding: 0px;

  }

</style>
