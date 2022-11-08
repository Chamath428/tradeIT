import aws from 'aws-sdk';

const awsConfig = {
    region:process.env['DYNAMODB_REGION'],
    accessKeyId:process.env['DYNAMODB_ACCESS_KEY_ID'],
    secretAccessKey:process.env['DYNAMODB_SECRECT_ACCESS_KEY']
}

aws.config.update(awsConfig);

const docClient = new aws.DynamoDB.DocumentClient();

export default docClient;