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

export const verifyUsername = params => axios.post(
  'https://3ihrhx1pyd.execute-api.us-east-1.amazonaws.com/dev/users/verify-username',
  params,
);
export const verifyEmailAPI = params => axios.post(
  'https://3ihrhx1pyd.execute-api.us-east-1.amazonaws.com/dev/users/verify-email',
  params,
);

export const userRegisterApi = params => axios
  .post('https://devnew.mytravelbiz-api.com/mtb/user/registration', params, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: '',
    },
  })
  .then(res => res)
  .catch(e => JSON.stringify(e));

export const userStatusCheckApi = params => axios
  .post('https://devnew.mytravelbiz-api.com/mtb/status/check', params)
  .then(res => res)
  .catch(e => JSON.stringify(e));

export const userGetEmailApi = params => axios.post('https://3ihrhx1pyd.execute-api.us-east-1.amazonaws.com/dev/users/user-check', params);
export const contactAPI = params => axios.post(
  'https://3ihrhx1pyd.execute-api.us-east-1.amazonaws.com/dev/users/email-to-customer-care',
  params,
);
