<template>
<div>
  <div style="font-size: 15px;box-shadow: 2px 0 6px rgba(0,21,41,.35); height: 50px;margin-top: -20px;margin-left: -20px;margin-right: -20px">
    <div style="padding: 15px">题库管理</div>
  </div>
  <div style="margin-top: 20px">
    <template>
      <el-tabs>
        <el-tab-pane label="编辑试题">
          <div style="margin-top: 20px">
            <el-form inline="true" class="demo-form-inline">
              <el-form-item label="所属章节:">
                <el-input  value="应用层"></el-input>
              </el-form-item>
              <el-form-item label="难度等级:">
                <el-input  value="2"></el-input>
              </el-form-item>
              <el-form-item label="正确选项:">
                <el-select value="c">
                  <el-option label="a" ></el-option>
                  <el-option label="b" ></el-option>
                  <el-option label="c" ></el-option>
                  <el-option label="d" ></el-option>
                </el-select>
              </el-form-item>
              </el-form>
          </div>
          <div style="background-color: #e7f6f6">
            <div style="padding: 20px">
              <el-tag>题目:</el-tag>
              <span>在下面的输入框中输入题目，形如--DNS服务器和DHCP服务器的作用是()</span>
              <el-form style="margin-top: 20px">
                <el-form-item>
                  <el-input type="textarea" style="width:90%;" :rows="4" placeholder="DNS服务器和DHCP服务器的作用是什么（）"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-tag type="success">A</el-tag>
                  <el-input
                      style="width: 85%; margin-left: 15px"
                      value="将IP地址翻译为计算机名，为客户机分配IP地址"
                      clearable>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-tag type="success">B</el-tag>
                  <el-input
                      style="width: 85%; margin-left: 15px"
                      value="将IP地址翻译为计算机名，为客户机分配IP地址"
                      clearable>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-tag type="success">C</el-tag>
                  <el-input
                      style="width: 85%; margin-left: 15px"
                      value="将IP地址翻译为计算机名，为客户机分配IP地址"
                      clearable>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-tag type="success">D</el-tag>
                  <el-input
                      style="width: 85%; margin-left: 15px"
                      value="将IP地址翻译为计算机名，为客户机分配IP地址"
                      clearable>
                  </el-input>
                </el-form-item>

              </el-form>

            </div>

          </div>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</div>
</template>

<script>
export default {
  name: "AddTest"
}
</script>

<style scoped>

</style>