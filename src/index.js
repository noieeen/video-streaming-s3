import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { config } from "dotenv";
// aws
import * as AWS from "aws-sdk";
// import { ConfigurationOptions } from "aws-sdk";

AWS.config.update({ region: "us-east-1" });

const configuration = new AWS.DynamoDB({
  
  region: "us-east-1",
  endpoint: "dynamodb.us-east-1.amazonaws.com",
  endpoint: "dynamodb.us-east-1.aws.amazon.com",
  accessKeyId: "plbvuDc2SPDoeg2V0E0PNLbPgveQP6MGFFhnDYlc",
  credentials: "87MwEFadQGoq+sxFkEozVEktI/MD7QlemrQbrEi5mzY=",
});

// configuration.config.region = "us-east-1"; //process.env.AWS_DEFAULT_REGION_ID
// configuration.config.endpoint = "dynamodb.us-east-1.amazonaws.com";
// configuration.config.endpoint = process.env.AWS_DEFAULT_ENDPOINT;
// configuration.config.accessKeyId = "plbvuDc2SPDoeg2V0E0PNLbPgveQP6MGFFhnDYlc";
// configuration.config.credentials =
//   "87MwEFadQGoq+sxFkEozVEktI/MD7QlemrQbrEi5mzY=";

console.log(configuration);
// region: process.env.AWS_DEFAULT_REGION,
// endpoint: process.env.AWS_DEFAULT_ENDPOINT,
// secretAccessKey: process.env.SECRET_ACCESS_KEY,
// accessKeyId: process.env.ASSCESS_KEY_ID,
// credentials: process.env.AWS_CREDENTIALS_KEY,
// AWS.config.update(configuration);
AWS.config.update(configuration);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//https://us-east-1.console.aws.amazon.com/dynamodbv2/home?region=us-east-1#table?name=users&tab=streams
//https://ap-southeast-1.console.aws.amazon.com/dynamodbv2/home?region=ap-southeast-1#table?name=users&tab=streams
