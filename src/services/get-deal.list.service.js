import axios from "axios";

function getDealListService() {
  const url = `https://ntc-triada.bitrix24.ru/rest/179/k05zgktl0zwv39hm/crm.deal.list.json`;

  const DealListPromise = new Promise((resolve, reject) => {
    axios({
      method: "get",
      url
    }).then(response => {
      resolve(response.data.result);
    });
  });
  return DealListPromise;
}

export default getDealListService;