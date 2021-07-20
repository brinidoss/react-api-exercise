import { useEffect, useState } from "react";
import { Quote } from "../../model/QuotesModel";
import { fetchQuotes } from "../../services/QuotesApiService";


export function Quotes() {
    const [quote, setQuote] = useState<Quote[]>([]);

    useEffect(() => {
        fetchQuotes().then((data) => {
        setQuote(data);
        })
    }, [] );

    return (
        <div className="FamousQuotes">
            <h1>Famous Quotes</h1>
            <ul>
                {quote.map((quote, index) => 
                    <li key={`${quote.author}`}>
                        <p>{quote.author}: {quote.text}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}


//Promise<any[]> repsonse.data.properties.period =fetchWeather data=periods fetchweather.then(data) data is last thing in collection