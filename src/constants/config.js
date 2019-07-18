const development = {
  API: 'http://localhost:3000/',
  MEDIA_URL: '',
};
const test = {
  API: '',
  MEDIA_URL: '',
};
const production = {
  API: '',
  MEDIA_URL: '',
};
const staging = {
  API: '',
  MEDIA_URL: '',
};

const Config = (env = process.env.REACT_APP_ENV) => {
  if (env === 'production') {
    return production;
  }
  if (env === 'staging') {
    return staging;
  }
  if (env === 'test') {
    return test;
  }
  return development;
};
export default Config();
