import axios from "axios";
const url = process.env.REACT_APP_SERVER_URL;

async function requestLogin(socialLoginType) {
  await axios.get(url + "/api/v1/login/" + socialLoginType);
}

export { requestLogin };
