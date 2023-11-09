<template>
<div>
  <div style="font-size: 15px;box-shadow: 2px 0 6px rgba(0,21,41,.35); height: 50px;margin-top: -20px;margin-left: -20px;margin-right: -20px">
    <div style="padding: 15px">成绩查询</div>
  </div>
  <div style="margin-top: 20px">
    <div>
      <el-form inline="true" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input  placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="学院">
          <el-input  placeholder="学院"></el-input>
        </el-form-item>
        <el-form-item label="专业">
          <el-input  placeholder="专业"></el-input>
        </el-form-item>
        <el-form-item label="年级">
          <el-input  placeholder="年级"></el-input>
        </el-form-item>
        <el-form-item label="班级">
          <el-input  placeholder="班级"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input  placeholder="联系方式"></el-input>
        </el-form-item>
        <el-button type="primary" @click="">
          <i class="el-icon-search"></i>
          查询
        </el-button>
      </el-form>
    </div>

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
            prop="major"
            label="专业">
        </el-table-column>
        <el-table-column
            prop="year"
            label="年级">
        </el-table-column>
        <el-table-column
            prop="class"
            label="班级">
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
            label="">
        </el-table-column>
        <el-table-column
            label="查看成绩">
          <template>
            <el-button type="primary"><i class="el-icon-search"></i>查看成绩</el-button>
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
  name: "ScoreQuery",
  data(){
    return{
      tableData:[{
        name:'王六',
        college:'软件工程学院',
        major:'计算机科学与技术',
        year:'2015',
        class:'2',
        sex:'男',
        contact:'13585411132',
      },
        {
          name:'王六',
          college:'软件工程学院',
          major:'计算机科学与技术',
          year:'2015',
          class:'2',
          sex:'男',
          contact:'13585411132',
        },
        {
          name:'王六',
          college:'软件工程学院',
          major:'计算机科学与技术',
          year:'2015',
          class:'2',
          sex:'男',
          contact:'13585411132',
        },
        {
          name:'王六',
          college:'软件工程学院',
          major:'计算机科学与技术',
          year:'2015',
          class:'2',
          sex:'男',
          contact:'13585411132',
        },
        {
          name:'王六',
          college:'软件工程学院',
          major:'计算机科学与技术',
          year:'2015',
          class:'2',
          sex:'男',
          contact:'13585411132',
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
  },
}
</script>

<style scoped>

</style>