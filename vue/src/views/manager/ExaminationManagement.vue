<template>
<div>
  <div style="font-size: 15px;box-shadow: 2px 0 6px rgba(0,21,41,.35); height: 50px;margin-top: -20px;margin-left: -20px;margin-right: -20px">
    <div style="padding: 15px">考试管理</div>
  </div>
  <div style="margin-top: 20px">
    <template>
      <el-table
          :data="tableData"
          border
          style="width: 100%">
        <el-table-column
            width="150"
            prop="name"
            label="试卷名称">
        </el-table-column>
        <el-table-column
            width="200"
            prop="introduce"
            label="介绍">
        </el-table-column>
        <el-table-column
            width="150"
            prop="college"
            label="所属学院">
        </el-table-column>
        <el-table-column
            width="200"
            prop="major"
            label="所属专业">
        </el-table-column>
        <el-table-column
            width="100"
            prop="class"
            label="年级">
        </el-table-column>
        <el-table-column
            width="150"
            prop="date"
            label="考试日期">
        </el-table-column>
        <el-table-column
            width="100"
            prop="time"
            label="持续时间">
        </el-table-column>
        <el-table-column
            width="100"
            prop="total"
            label="总分">
        </el-table-column>
        <el-table-column
            width="200"
            prop="type"
            label="试卷类型">
        </el-table-column>
        <el-table-column
            width="300"
            prop="prompt"
            label="考生提示">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="300">
          <template slot-scope="scope">
            <el-button type="success" icon="el-icon-search" size="small">试题详情</el-button>
            <el-button @click="outerVisible = true" type="primary" icon="el-icon-edit" size="small">编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" size="small"  @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
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
  <template>
    <el-dialog title="编辑试卷信息" :visible.sync="outerVisible">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="试卷名称">
          <el-input style="width: 90%"></el-input>
        </el-form-item>
        <el-form-item label="介绍">
          <el-input  style="width: 90%"></el-input>
        </el-form-item>
        <el-form-item label="所属学院">
          <el-input  style="width: 90%"></el-input>
        </el-form-item>
        <el-form-item label="所属专业">
          <el-input style="width: 90%"></el-input>
        </el-form-item>
        <el-form-item label="年级">
          <el-input style="width: 90%"></el-input>
        </el-form-item>
        <el-form-item label="考试日期">
          <el-col :span="6">
            <el-date-picker type="date" placeholder="选择日期" style="width: 90%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="持续时间">
          <el-input style="width: 90%"></el-input>
        </el-form-item>
        <el-form-item label="考试类型">
          <el-input style="width: 90%"></el-input>
        </el-form-item>
        <el-form-item label="考试提示">
          <el-input type="textarea" style="width: 90%"></el-input>
        </el-form-item>
      </el-form>
      <el-dialog
          width="30%"
          :visible.sync="innerVisible"
          append-to-body>
        确认关闭？
        <div slot="footer" class="dialog-footer">
          <el-button @click="innerVisible = true">取消</el-button>
          <el-button type="primary" @click="innerVisible = false;outerVisible = false ">确定</el-button>
        </div>
      </el-dialog>

      <div slot="footer" class="dialog-footer">
        <el-button @click="outerVisible = false">取 消</el-button>
        <el-button type="primary" @click="innerVisible = true">确定</el-button>
      </div>
    </el-dialog>
  </template>
</div>

</template>

<script>
export default {
  name: "ExaminationManagement",
  data(){
    return{
      tableData:[{
        name:'计算机网络',
        introduce:'2019年上期期末考试',
        college:'软件工程学院',
        major:'计算机科学与技术',
        class:'2018',
        date:'2022-03-21',
        time:'92',
        total:'86',
        type:'期末考试',
        prompt:'快乐千万条，学习第一条，平时不努力，考试两行泪',
      },
        {
          name:'计算机网络',
          introduce:'2019年上期期末考试',
          college:'软件工程学院',
          major:'计算机科学与技术',
          class:'2018',
          date:'2022-03-21',
          time:'92',
          total:'86',
          type:'期末考试',
          prompt:'快乐千万条，学习第一条，平时不努力，考试两行泪',
        }],
      currentPage4: 1,
      outerVisible: false,
      innerVisible: false,
      form:{

      },
    }
  },
  methods: {
    deleteRow(index, rows) {
      this.$confirm('此操作不可逆，是否继续？','提示',{
        confirmButtonText:'确定',
        cancelButtonText:'取消',
      }).then(()=>{
        this.$message({
          type: 'success',
          message:'删除成功!'
        });rows.splice(index, 1);
      }).catch(()=>{
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

  },
}
</script>

<style scoped>

</style>