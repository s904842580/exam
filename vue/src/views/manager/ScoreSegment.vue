<template>
<div>
  <div style="font-size: 15px;box-shadow: 2px 0 6px rgba(0,21,41,.35); height: 50px;margin-top: -20px;margin-left: -20px;margin-right: -20px">
    <div style="padding: 15px">成绩查询</div>
  </div>
  <div style="margin-top: 20px">
    <template>
      <el-table
          :data="tableData"
          border
          style="width: 100%">
        <el-table-column
            prop="name"
            label="试卷名称">
        </el-table-column>
        <el-table-column
            prop="introduce"
            label="介绍">
        </el-table-column>
        <el-table-column
            prop="college"
            label="所属学院">
        </el-table-column>
        <el-table-column
            prop="major"
            label="所属专业">
        </el-table-column>
        <el-table-column
            prop="class"
            label="年级">
        </el-table-column>
        <el-table-column
            prop="data"
            label="考试日期">
        </el-table-column>
        <el-table-column
            prop="time"
            label="持续时间">
        </el-table-column>
        <el-table-column
            prop="total"
            label="总分">
        </el-table-column>
        <el-table-column
            prop="paper"
            label="试卷类型">
        </el-table-column>
        <el-table-column
            prop="examinee"
            label="考生提示">
        </el-table-column>
        <el-table-column
            label="查看分段">
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
  name: "ScoreSegment",
  data(){
    return{
      tableData:[{
          name:'计算机网络',
          introduce:'2019年上期期末考试',
          college:'软件工程学院',
          major:'计算机科学与技术',
          class:'2018',
          data:'2022-03-21',
          time:'92',
          total:'86',
          paper:'期末考试',
          examinee:'快乐千万条，学习第一位',
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
.el-table > el-table-column{
  font-size: 10px;
}
</style>