<template>
<div>
  <el-container>
    <el-header>
      <div style="float: left;">
        <img src="../assets/img/03.png" alt="" style="width: 25px;height: 25px;margin-left: 5%">
        <span style="margin-left: 3px; font-weight: bold; font-size: 25px;color: white">
        在线考试管理系统后台台</span>
      </div>

      <div style=" display: flex; justify-content: flex-end;">
        <el-dropdown placement="bottom">
          <img src="../assets/img/userimg.png" alt="" style="width: 60px; height: 50px;border-radius: 50%;">
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside style="width: 200px; min-height: 100vh;background-color:#6495ed ">
        <el-row class="tac">
          <el-col>
            <el-menu
                default-active="this.$route.path"
                class="el-menu-vertical-demo"
                background-color="#6495ed"
                text-color="#fff"
                active-text-color="#ffd04b"
                router>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>考试管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/examinationManagement">考试查询</el-menu-item>
                  <el-menu-item index="/addExamination">添加考试</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>题库管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="testManagement">题目列表</el-menu-item>
                  <el-menu-item index="addTest">新增题目</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>成绩查询</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/scoreQuery" >学生成绩查询</el-menu-item>
                  <el-menu-item index="/scoreSegment">成绩分段查询</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>学生管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="StudentManager">学生管理</el-menu-item>
                  <el-menu-item index="AddStudent">添加学生</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>教师管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="teacherManager">教师管理</el-menu-item>
                  <el-menu-item index="AddTeacher">添加教师</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>
export default {
name: "Manager",

}
</script>

<style scoped>
.el-header{
  background-color: #6495ed;
  line-height: 60px;
  box-shadow: 2px 0 6px rgba(0,21,41,.35) ;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  box-shadow: 2px 0 6px rgba(0,21,41,.35);
}

.el-main {
  background-color: white;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}
img {
  width:auto;
  height:auto;
  max-width:100%;
  max-height:100%;
}
</style>