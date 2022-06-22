import axios from "axios";
import { BX24 } from "bx24";

function checkUserService(email=null) {
  const url = `https://ntc-triada.bitrix24.ru/rest/179/r8ke4ndb9peovp1h`;

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