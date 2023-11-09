<template>
 <div class="background">
   <div style="margin-top: 70px; position: fixed; margin-left: 475px">
     <div style="font-size: 30px; font-weight: bold;text-align: center;margin-bottom: 20px">
       <i class="el-icon-s-order"></i>
       在线考试系统</div>
      <div style="background-color: white; width: 550px; height: 300px">
        <div style="font-size: 30px;text-align: center;padding-top: 10px">账号登录</div>
        <div class="item">
          <label>用户名</label>
          <input type="text" name="username" v-model="user.username" placeholder="请输入用户名">
        </div>
        <div class="item">
          <label>密码</label>
          <input type="password" name="password" v-model="user.password" placeholder="请输入密码">
        </div>
        <button @click="login">登录</button>
      </div>
   </div>
 </div>
</template>

<script>

</script>

<style scoped>
.background{
  width: 100%;
  height: 100%;
  background:url("../assets/img/loginbg.png");
  position: fixed;
  background-size: 100% 100%;
}
body{
  text-align:center
}
.item {
  color: black;
  margin-left: 25%;
  margin-top: 35px;
  font-size: 20px;
  text-align: left;
}
.item label{
  float:left;
  width: 5em;
  margin-right: 1em;
  text-align: left;
}
input{
  margin-left: -5px;
  padding: 4px;
  border: solid 1px #808080;
  width: 200px;
  height: 23px;
}
button{
  position: relative;
  height: 40px;
  width: 300px;
  background: rgb(137,207,240);
  margin-top: 30px;
  margin-left: 25%;
}
</style>