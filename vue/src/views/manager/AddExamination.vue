<template>
<div>
  <div style="font-size: 15px;box-shadow: 2px 0 6px rgba(0,21,41,.35); height: 50px;margin-top: -20px;margin-left: -20px;margin-right: -20px">
    <div style="padding: 15px">考试管理</div>
  </div>
  <div style="margin-top: 20px">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="试卷名称">
        <el-input v-model="form.name" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="介绍">
        <el-input v-model="form.name" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="所属学院">
        <el-input v-model="form.name" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="所属专业">
        <el-input v-model="form.name" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="年级">
        <el-input v-model="form.name" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="考试日期">
        <el-col :span="3">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="持续时间">
        <el-input v-model="form.name" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="考试类型">
        <el-input v-model="form.name" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="考试提示">
        <el-input type="textarea" v-model="form.desc" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" size="small" icon="el-icon-bangzhu">立即创建</el-button>
        <el-button type="danger" size="small" icon="el-icon-delete">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
export default {
  name: "AddExamination",
  data() {
    return {
      form: {

      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }

}
</script>

<style scoped>

</style>