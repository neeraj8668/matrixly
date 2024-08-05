// @ts-nocheck
export const API_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

export const DOCUMENT_TYPE = {
  single: "single",
  multiple: "multiple",
  sharebot: "sharebot",
};

export const REGION = import.meta.env.REGION,
  AWS_ACCESS_KEY = import.meta.env.AWS_ACCESS_KEY,
  AWS_SECRET_KEY = import.meta.env.AWS_SECRET_KEY,
  AWS_BUCKET = import.meta.env.AWS_BUCKET,
  S3Path = `https://${AWS_BUCKET}.s3.${REGION}.amazonaws.com/`;

export const CHAT_TYPES = {
  CHATGPT: "CHATGPT",
  SINGLE: "SINGLE",
  MULTIPLE: "MULTIPLE",
};

export const CHATGPT_TYPES = {
  GPT3: "gpt-3.5-turbo",
  GPT4: "gpt-4",
}
export const STRIPE_TABLE_ID = import.meta.env.VITE_STRIPE_TABLE_ID;
export const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

export const getURL = (key) => S3Path + key;