import axios from "axios";
import { BobRoss } from "../model/BobRossModel";

const BobRossUrl: string = "https://cors-anywhere.herokuapp.com/https://api.bobross.dev/api/20";

export function fetchBobRossWisdom(): Promise<BobRoss[]> {
    return axios.get(BobRossUrl).then((response) => {
        return response.data.response;
    })
}