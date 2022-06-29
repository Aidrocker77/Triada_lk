import axios from "axios";
import { BX24 } from "bx24";

function checkUserService(email,  password) {
  const url = `http://45.141.102.182:3000/companies/auth`;

  const currentUserPromise = new Promise((resolve, reject) => {
    axios({
      method: "POST",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      url,
      data:{
        email,
        password,
      }
    }).then(response => {
      resolve(response.data);
    })
    .catch(e => reject(e))
  });
  return currentUserPromise;

}
export default checkUserService;