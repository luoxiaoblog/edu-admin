<template>
  <div class="container">
    <el-form class="login-form" ref="form" :model="form" label-width="58px" size="medium"> 
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
        <el-form-item label="密码">
        <el-input v-model="form.pwd" type="password"></el-input>
      </el-form-item>
      <el-button class="submit-btn" type="primary" size="medium" @click="onSubmit">登录</el-button>
    </el-form >
  </div>
</template>

<script>
import fetch from '@/api/login';

export default {
  name: '',

  mixins: [],

  directives: {},

  components: {},

  props: {},

  watch: {},

  data() {
    return {
      form: {
        name: '',
        pwd: ''
      }
    }
  },
  computed: {},

  methods: {
    onSubmit() {
      fetch.login(this.name, this.pwd).then((res) => {
        debugger
      }).catch(error => {
        debugger
      });
    }
  },

  mounted() {},

  destroyed() {}
}
</script>

<style scoped lang="less">
.login-form {
  width: 440px;
  height: 234px;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0 0 12px 0 rgba(98, 103, 106, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
}

.submit-btn {
  display: block;
  width: 100%;
  font-size: 14px;
  letter-spacing: 2px;
}

</style>
