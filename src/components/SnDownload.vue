<template>
  <div class="sn-download">
    <div class="block">
      <el-timeline>
        <el-timeline-item v-for="item in versionData" :timestamp="item.update_time" placement="top">
          <el-card>
            <h4>版本: {{item.version}}</h4>
            <h5>更新内容:</h5>
            <p v-for="history in item.history_text">
              {{history.history_text}}
            </p>
            <p>下载次数: <el-tag size="medium">{{item.download_count}}</el-tag></p>
            <p class="p-author" >{{item.author}} 提交于 {{item.update_time}}</p>
            <a :href="file_base+item.software_name+'_'+item.version+'.zip'">
              <el-button type="primary" @click="clickDownload(item.software_name,item.version)">点击下载</el-button>
            </a>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: "SnDownload",
  data() {
    return {
      versionData:[],
      a: 1,
      file_base:process.env.VUE_APP_BASE_FILE_URL
    }
  },
  methods:{
    async clickDownload(software_name,version){
      var res=await  this.postRequest('/api/Software/DownloadCountAdd',{software_name,version});
      console.log(res)
    }
  },
  async mounted() {
    let data=await  this.getRequest('/api/Software/QuerySoftwareData')
    console.log(data.data);
    this.versionData=data.data;
  }
}
</script>

<style lang="less" scoped>

.sn-download{
  margin-top: 20px;
  margin-right: 100px;
  font-family: Verdana !important;

}
.p-author{
  color: #636e72;
  margin-right: auto;
  font-style: oblique;
}

</style>