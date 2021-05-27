//const baseUrl = process.env.API || "https://";
const baseUrl = "http://localhost:5000/api";

export const api = `${baseUrl}/`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
