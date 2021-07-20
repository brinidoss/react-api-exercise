import axios from "axios";
import { Quote } from "../model/QuotesModel";

const quotesUrl: string = 'https://grandcircusco.github.io/demo-apis/quotes.json';

export function fetchQuotes(): Promise<Quote[]> {
    return axios.get(quotesUrl).then((response) => {
        return response.data;
    })
}