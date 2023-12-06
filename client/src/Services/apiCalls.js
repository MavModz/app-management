import axios from 'axios';

export const commonrequest = async (method, url, body, header) => {

    let config = {
        method: method,
        url,
        headers: header ? header
            : {
                "content-type": "application/json",
            },
        data: body
    }

    //AXIOS INSTANCE
    return axios.request(config).then((data) => {
        return data;
    })

        .catch((error) => {
            return error;
        })
}