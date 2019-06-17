type ENV = "dev" | "prod";

export const getAPIUrl = (env: ENV) => {
  if (env === "prod") {
    return "https://*.execute-api.ap-northeast-2.amazonaws.com/staging/";
  } else {
    return "http://localhost:8070/query";
  }
};

export const getAWSS3Url = () => {
  return "https://*-assets.s3.ap-northeast-2.amazonaws.com";
};
