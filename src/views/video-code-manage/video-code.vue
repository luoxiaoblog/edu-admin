<template>
  <div class="container">
    <div class="table-tool-bar clearfix">
      <el-button type="primary" icon="el-icon-plus" @click="addData">新增</el-button>
      <el-button type="primary" icon="el-icon-delete">删除</el-button>
    </div>
    <el-table
      :data="dataList"
      stripe
      border
      tooltip-effect="dark"
      style="width: 100%"
      :default-sort = "{prop: 'uploadTime', order: 'descending'}"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
       <el-table-column
        prop="uploadTime"
        label="上传时间"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="updateTime"
        label="修改日期"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="chinese"
        label="二维码文字"
        sortable
        >
      </el-table-column>
      <el-table-column
        label="操作"
        width="230">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" >详情</el-button>
          <el-button type="text" >编辑</el-button>
          <el-button type="text">预览二维码</el-button>
          <el-button type="text" >下载二维码</el-button>
        </template>
      </el-table-column>
    </el-table>
     <el-pagination class="self-elementui-pagination "
                   @size-change="handleSizeChange"
                   @current-change="handlePageIndexChange"
                   :current-page.sync="pageInfo.pageIndex"
                   :page-size="pageInfo.pageSize"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="pageInfo.total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: '',

  mixins: [],

  directives: {},

  components: {},

  props: {},

  watch: {},

  data() {
    return {  
      dataList: [{
        chinese: 'ssssss',
        uploadTime: '2018-08-08 12:23:20',
        updateTime: '2018-08-10 12:23:20'
      }, 
      {
        chinese: 'ssssss',
        uploadTime: '2018-08-08 12:23:20',
        updateTime: '2018-08-10 12:23:20'
      },
      {
        chinese: 'ssssss',
        uploadTime: '2018-08-08 12:23:20',
        updateTime: '2018-08-10 12:23:20'
      },
      {
        chinese: 'ssssss',
        uploadTime: '2018-08-08 12:23:20',
        updateTime: '2018-08-10 12:23:20'
      },
      {
        chinese: 'ssssss',
        uploadTime: '2018-08-08 12:23:20',
        updateTime: '2018-08-10 12:23:20'
      }],
      selection: [],
      pageInfo: {
        pageIndex: 1,
        pageSize: 10,
        total: 0
      },
    }
  },
  computed: {},

  methods: {
    addData() {
      this.$router.push({ name: 'video-code-add' });
    },

    handleClick() {
      
    },

    handleSelectionChange(selection) {
      this.selection = selection;
    },

    handleSizeChange() {},

    handlePageIndexChange() {},


  },

  mounted() {},

  destroyed() {}
}
</script>

<style scoped lang="less">

</style>
