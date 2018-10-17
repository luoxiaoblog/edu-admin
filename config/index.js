// 开发环境
const devConfigs = {
  BASE_API: 'http://39.108.216.69/javaweb/'
};

// 生产环境
const proConfigs = {
  BASE_API: 'http://39.108.216.69/javaweb/'
};

// export const configData = {
//   duration: 5000,
//   showClose: true
// };

export const apiURL = process.env.NODE_ENV === 'production' ? proConfigs : devConfigs;