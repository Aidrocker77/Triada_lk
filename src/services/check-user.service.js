import axios from "axios";
import { BX24 } from "bx24";

function checkUserService(email = null, password = null) {
  const url = 'http://45.141.102.182:3000/companies/auth';

  const currentUserPromise = new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url,

      data: {
        email: 'test@triadacompany.ru',
        password: '12345'
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      resolve(response.data.result);
    });
  });
  return currentUserPromise;

}
export default checkUserService;