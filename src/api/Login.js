import axios from "axios";
const url = process.env.REACT_APP_SERVER_URL;

async function requestLogin(socialLoginType) {
  let status, code, data, message;

  await axios
    .get(url + "/api/v1/login/" + socialLoginType)
    .then((res) => {
      status = res.status;
      ({ code, data, message } = res.data);
    })
    .catch((error) => {
      if (error.response) status = error.response.status;
    });

  return { status, code, data, message };
}

export { requestLogin };
