<template>
  <div class="login-container">
    <h1>Login</h1>
<!--    <el-radio-group v-model="labelPosition" size="small">-->
<!--      <el-radio-button label="left">左对齐</el-radio-button>-->
<!--      <el-radio-button label="right">右对齐</el-radio-button>-->
<!--      <el-radio-button label="top">顶部对齐</el-radio-button>-->
<!--    </el-radio-group>-->
    <el-form :label-position="labelPosition" label-width="60px" :model="formLabelAlign">

      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="formLabelAlign.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="login-submit">登录</el-button>
      </el-form-item>
    </el-form>


  </div>
</template>

<script>
  import {request} from "../request/http";

  export default {
    data(){
      return {
        labelPosition: 'right',
        formLabelAlign: {
          username: '',
          password: '',
        }
      };
    },
    created(){
      let auth = this.$store.getters.getAuth
      if (auth){
        this.$router.push({path:'/index'})
      }
    },
    methods:{
      onSubmit(){

        request({
          method:'post',
          url:'/auth/login',
          data:{
            username:this.formLabelAlign.username,
            password: this.formLabelAlign.password,
            rememberMe: true
          }
        }).then(res=>{
          console.log(res);
          if (res.status == 200){
            console.log(res.headers.authorization);
            if (res.headers.authorization){
              this.$store.commit('logingSuccess', res.headers.authorization)
              this.$router.push({path:'/index'})
            }
          }
        }).catch(err=>{
          console.log(err);
        })
      },
    }

  }
</script>

<style>
  .login-container{
    width: 500px;
    height: 300px;
    margin: 200px auto 0px auto;
    padding: 10px 20px 10px 0px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    /*background-color: #409EFF;*/
    /*margin-top: 200px;*/
  }
  .login-submit{
    margin: 0 auto;
    width: 300px;
  }
</style>