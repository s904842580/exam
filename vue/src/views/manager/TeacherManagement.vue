<template>
<div>
  <div style="font-size: 15px;box-shadow: 2px 0 6px rgba(0,21,41,.35); height: 50px;margin-top: -20px;margin-left: -20px;margin-right: -20px">
    <div style="padding: 15px">教师管理</div>
  </div>
  <div style="margin-top: 20px">
    <template>
      <el-table
          :data="tableData"
          border
          style="width: 100%">
        <el-table-column
            prop="name"
            label="姓名">
        </el-table-column>
        <el-table-column
            prop="college"
            label="学院">
        </el-table-column>
        <el-table-column
            prop="sex"
            label="性别">
        </el-table-column>
        <el-table-column
            prop="contact"
            label="联系方式">
        </el-table-column>
        <el-table-column
            width="200"
            prop="email"
            label="邮箱">
        </el-table-column>
        <el-table-column
            prop="id"
            label="身份证号">
        </el-table-column>
        <el-table-column
            prop="title"
            label="职称">
        </el-table-column>
        <el-table-column
            width="200"
            label="操作">
          <template>
            <el-button type="primary"><i class="el-icon-notebook-2"></i>编辑</el-button>
            <el-button type="danger"><i class="el-icon-delete"></i>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block" style="text-align: center">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-size="5"
            layout="total, sizes, prev, pager, next, jumper"
            :total="5">
        </el-pagination>
      </div>
    </template>
  </div>
</div>
</template>

<script>
export default {
  name: "TeacherManagement",
  data(){
    return{
      tableData:[{
        name:'张小凤',
        college:'软件工程',
        sex:'男',
        contact:'13500008442',
        email:'32600008442@163.com',
        id:'4651111111111',
        title:'讲师',
      }],
      currentPage4: 1
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style scoped>

</style>