import axios from 'axios';
// import Config from 'constants/config';

// const client = axios.create({
//   baseURL: Config.API,
// });

export const contentAddApi = params => axios.post(
  'https://azmxr0ww1m.execute-api.us-east-1.amazonaws.com/dev/content/newcontent',
  params,
);
export const contentGetApi = params => axios.post(
  'https://azmxr0ww1m.execute-api.us-east-1.amazonaws.com/dev/content/getcontent',
  params,
);

export const verifyUsername = params => axios.post('https://3ihrhx1pyd.execute-api.us-east-1.amazonaws.com/dev/users/verify-username', {
  data: JSON.stringify(params),
  method: 'post',
  timeout: 40000,
  headers: '',
});

export const userRegisterApi = params => axios.post('https://3ihrhx1pyd.execute-api.us-east-1.amazonaws.com/dev/users/register', params);
export const userGetEmailApi = params => axios.post(
  'https://3ihrhx1pyd.execute-api.us-east-1.amazonaws.com/dev/users/get-user-email',
  params,
);
