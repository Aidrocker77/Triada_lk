import axios from "axios";

function getDealService(id = 0) {
    const url = `https://ntc-triada.bitrix24.ru/rest/179/k05zgktl0zwv39hm/crm.deal.get.json`;

    const DealPromise = new Promise((resolve, reject) => {
        axios({
            method: "get",
            url,
            params: {
                id
            }
        }).then(response => {
            resolve(response.data.result);
        });
    });
    return DealPromise;
}

export default getDealService;