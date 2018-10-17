const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  assetsDir: 'static',
  baseUrl: '/',
  chainWebpack: config => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'));
  }
};
