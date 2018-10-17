<template>
  <div class="container layout">
    <header class="header">
      <div class="logo">
        <i class="iconfont icon-admin"></i>
        <h1 class="title">公众管理平台</h1>
      </div>
      <div class="header-right">
        <i class="iconfont icon-nav nav-toggle-btn" @click="menuToggle"></i>
      </div>
    </header>
    <div class="main-wrapper">
      <aside class="menu-container">
        <el-menu
        default-active="1"
        class="el-menu-vertical"
        :collapse="isCollapse">
        <el-menu-item index="1">
          <i class="iconfont icon-menu icon-erweima"></i>
          <span slot="title">视频二维码管理</span>
        </el-menu-item>
      </el-menu>
      </aside>
      <div class="content-container">
        <div class="content-innner-container">
        <transition name="fade-transform" mode="out-in">
          <router-view></router-view>
        </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false
      }
    },

    methods: {
      menuToggle() {
        this.isCollapse = !this.isCollapse;
        this.$refs.navToggleBtn.classList.toggle('nav-toggle-hiden'); 
      },

      add() {
        this.$router.push({ name: 'video-code-add'});
      }
    }
  }
</script>

<style lang="less" scoped>
.container {
  position: relative;
  height: 100%;
}
.header {
  position: relative;
  height: 60px;
  line-height: 60px;
  .logo {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    text-align: center;
    background: linear-gradient(to bottom right, #4691fc, #2b7aec);
    color: #fff;
    .title {
      display: inline-block;
      font-weight: 400;
      font-size: 20px;
    }
    .icon-admin {
      font-size: 22px;
      margin-right: 6px;
    }
  }
  .header-right {
    position: absolute;
    top: 0;
    left: 200px;
    right: 0;
    height: 100%;
    box-shadow: 0 4px 12px 0 rgba(98, 103, 106, 0.1);
  }
  .nav-toggle-btn {
    float: left;
    margin-left: 16px;
    font-size: 18px;
    cursor: pointer;
    transform: rotate(0);
    transition: .3s;
  }
  .nav-toggle-hiden {
    transform: rotate(90deg);
  }
}
.main-wrapper {
  display: flex;
  background: #f5f5f5;
}
.menu-container {
  height: calc(100vh - 60px);
  .el-menu-vertical {
    height: 100%;
    border-right: none;
    box-shadow: 4px 0 12px 0 rgba(98, 103, 106, 0.1);
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
  }
  .icon-menu {
    margin-right: 5px;
  }
}

.content-container {
  width: 100%;
  padding: 20px;
  overflow: hidden;
}

.content-innner-container {
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 5px;
}


</style>
