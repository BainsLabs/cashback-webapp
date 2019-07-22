const dev = {
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_k4QsBMcVK',
    APP_CLIENT_ID: '7uno25pe3q35o4dofm3c3cieto',
    IDENTITY_POOL_ID: 'us-east-1:dfc07891-5357-44cb-9911-78f9f8fa967c',
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
