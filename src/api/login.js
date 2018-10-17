import fetch from '@/utils/fetch';

export default {
    login(loginName, password) {
    return fetch.post(
      '/DengluServlet',
      {
        loginName,
        password,
      }
    );
  }
}