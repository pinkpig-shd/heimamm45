<template>
  <div class="login-container">
    <div class="left">
      <div class="title-box">
        <img src="../../assets/logo.png" alt />
        <div class="title">黑马面面</div>
        <div class="line"></div>
        <div class="sub-title">用户登录</div>
      </div>
      <div class="box">
        <el-input class="input" placeholder="请输入内容" prefix-icon="el-icon-user" v-model="input2"></el-input>
        <el-input
          class="input"
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
          v-model="password"
          show-password
        ></el-input>
        <el-input class="input" placeholder="请输入验证码" prefix-icon="el-icon-key" v-model="input2"></el-input>
      </div>
      <div class="link">
        <el-checkbox v-model="checked">我已阅读并同意</el-checkbox>
        <el-link type="primary">用户协议</el-link>和
        <!-- <span>和</span> -->
        <el-link type="primary">隐私条款</el-link>
      </div>
      <el-button class="btn" type="primary">注册</el-button>
      <el-button class="btn" type="primary">登录</el-button>
    </div>
    <img src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      input2: "",
      password: "",
      checked:false,
    };
  }
};
</script>

<style lang="less">
.login-container {
  display: flex;
  align-items: center;
  background: linear-gradient(
    255deg,
    rgba(20, 148, 250, 1),
    rgba(8, 179, 250, 1)
  );
  justify-content: space-around;
  height: 100%;
}
.left {
  width: 478px;
  height: 550px;
  background: #f5f5f5;
  .title-box {
    display: flex;
    align-items: center;
    margin-top: 48px;
    img {
      width: 22px;
      height: 17px;
      margin-left: 48px;
      margin-right: 14px;
    }
    .title {
      width: 94px;
      height: 22px;
      font-size: 22px;
      font-weight: 400;
      margin-right: 14px;
      color: rgba(12, 12, 12, 1);
    }
    .line {
      width: 1px;
      height: 28px;
      border-left: 1px solid rgba(225, 225, 225);
    }
    .sub-title {
      width: 87px;
      height: 22px;
      font-size: 21px;
      font-weight: 400;
      margin-left: 14px;
      color: rgba(12, 12, 12, 1);
    }
  }
}
.box {
  margin: 0 auto;
  width: 394px;
  .input {
    margin-top: 25px;
  }
}
.link {
  margin-left: 43px;
  margin-top: 32px;
}
.el-button--primary.btn {
  margin: 0 auto;
  width: 394px;
  height: 40px;
  display: block;
  margin-top: 26px;
}
.el-button+.el-button.btn {
  margin-left: 40px;
}
</style>