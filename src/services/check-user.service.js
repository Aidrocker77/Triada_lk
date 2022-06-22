import axios from "axios";

function checkUserService(email=null) {
  const url = `https://ntc-triada.bitrix24.ru/rest/179/r8ke4ndb9peovp1h/user.search.json`;

  const currentUserPromise = new Promise((resolve, reject) => {
    axios({
      method: "get",
      url,
      params:{
        email
      }
    }).then(response => {
      resolve(response.data.result);
    });
  });
  return currentUserPromise;

}
export default checkUserService;