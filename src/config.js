const dev = {
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'east-1_wWoX8kXwD',
    APP_CLIENT_ID: '7hg3nvcvvi932grv813nescku6',
    IDENTITY_POOL_ID: 'us-east-1:2436631c-3381-4ff9-a018-b3221715fc81',
  },
};

const prod = {};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
