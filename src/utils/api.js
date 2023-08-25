import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params ={
    key:'google api key',
    cx:'google cx key'
}

export const fetchDataFromApi =async (payload) => {

    const {data} = await axios.get(BASE_URL,{
        params:{...params, ...payload}
    })
    return data;
};