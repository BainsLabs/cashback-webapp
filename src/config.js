const dev = {
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_suAC7AeOc',
    APP_CLIENT_ID: '15l2766iluc4oa4ascpsabhgfh',
    IDENTITY_POOL_ID: 'us-east-2:796594ba-e334-4cec-8ade-a1a9ba6b437a'
  }
};

const prod = {
  STRIPE_KEY: 'pk_test_v1amvR35uoCNduJfkqGB8RLD',
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-app-2-api-prod-attachmentsbucket-1h5n5ttet1hy0'
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://api.serverless-stack.seed-demo.club/prod'
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_TwYpMXIJH',
    APP_CLIENT_ID: '6kfg0o7qo2i3ndk2ur906sc5fd',
    IDENTITY_POOL_ID: 'us-east-1:f4c754b4-24f0-4754-8596-30afedece1fc'
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
