import axios, { AxiosResponse } from "axios";

export default axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8000/api",
  // baseURL: 'https://my-backend-api.vercel.app/api',
  timeout: "1000",

  headers: {
    "Content-type": "application/json",
  },
});

// axios interceptors.response.use(undefined, (error) => {
//   const { status, data, config } = error.response
//   if (status === 404) {
//     navigator()
//   }
//   if (status === 400 && config.method === 'get' && data.errors.hasOwnProperty('id'))
    


// });
