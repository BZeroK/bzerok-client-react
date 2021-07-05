import axios from "axios";
const url = process.env.REACT_APP_SERVER_URL;

async function postLiquorPost(liquor) {
  let status, code, data, message;

  await axios
    .post(url + "/api/portfolio", liquor)
    .then((res) => {
      status = res.status;
      ({ code, data, message } = res.data);
    })
    .catch((error) => {
      if (error.response) status = error.response.status;
    });

  return { status, code, data, message };
}

async function putLiquorPost(liquorPostId, liquorPost) {
  let status, code, data, message;

  await axios
    .put(url + "/api/v1/liquor/" + liquorPostId, liquorPost)
    .then((res) => {
      status = res.status;
      ({ code, data, message } = res.data);
    })
    .catch((error) => {
      if (error.response) status = error.response.status;
    });

  return { status, code, data, message };
}

async function deleteLiquorPost(liquorPostId) {
  let status, code, data, message;

  await axios
    .delete(url + "/api/v1/liquor/" + liquorPostId)
    .then((res) => {
      status = res.status;
      ({ code, data, message } = res.data);
    })
    .catch((error) => {
      if (error.response) status = error.response.status;
    });

  return { status, code, data, message };
}

async function getLiquorPost(userId) {
  let status, code, data, message;

  await axios
    .get(url + "/api/v1/liquor/" + userId)
    .then((res) => {
      status = res.status;
      ({ code, data, message } = res.data);
    })
    .catch((error) => {
      if (error.response) status = error.response.status;
    });

  return { status, code, data, message };
}

export { postLiquorPost, putLiquorPost, deleteLiquorPost, getLiquorPost };
