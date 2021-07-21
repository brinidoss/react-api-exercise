import { useEffect, useState } from "react";
import { BobRoss } from "../../model/BobRossModel";
import { fetchBobRossWisdom } from "../../services/BobRossApiService";

export function BobRossSayings() {
    const [BobRossWisdom, setBobRossWisdom] = useState<BobRoss[]>([]);

    useEffect(() => {
        fetchBobRossWisdom().then((data) => {
            setBobRossWisdom(data);
        })
    }, [] );

    return (
        <div className="BobRoss">
            <h3>As Said by Bob Ross</h3>
            <ul>
                {BobRossWisdom.map((BobRossWisdom, index) => 
                    <li key={`${BobRossWisdom.id}`}>
                        <p>{BobRossWisdom.quote}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}