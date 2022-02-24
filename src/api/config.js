export const BASE_URL = 'http://13.125.245.31:8000';
export const LOGIN_URL = 'http://10.58.7.58:8000';

export const api = {
  allProducts: BASE_URL + '/accommodations',
  signUp: LOGIN_URL + '/users/signup',
  login: LOGIN_URL + 'users/login',
  kakaologin: LOGIN_URL + '/users/kakaologin',
  fetchAccommList: BASE_URL + '/accommodations',
};
