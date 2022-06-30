import axios from "axios";

function getCurrentUser() {
  const url = `https://ntc-triada.bitrix24.ru/rest/179/sebwlbn35xf0fb0r/user.get.json`;

  const currentUserPromise = new Promise((resolve, reject) => {
    axios({
      method: "get",
      url
    }).then(response => {
      resolve(response.data.result);
    });
  });
  return currentUserPromise;

}

export default getCurrentUser;