export const BASE_URL = 'http://54.180.140.106:8000';
export const LOGIN_URL = 'http://10.58.6.236:8000';

export const api = {
  allProducts: BASE_URL + '/accommodations',
  socialLogin: LOGIN_URL + '/users/kakaologin',
  signUp: LOGIN_URL + '/users/signup',
  fetchAccommList: BASE_URL + '/accommodations',
  fetchAccommodationItem: BASE_URL + '/accommodations',
};
