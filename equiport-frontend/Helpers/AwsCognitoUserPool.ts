import { CognitoUserPool } from "amazon-cognito-identity-js";

const PoolData: any = {
  UserPoolId: process.env.AWS_COGNITO_ID,
  ClientId: process.env.CLIENT_AWS,
};

export default new CognitoUserPool(PoolData);
