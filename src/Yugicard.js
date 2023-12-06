import React, { useEffect, useState } from "react";
import "./Yugicard.css";
import axios from "axios";

const YUGIOH_API = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

/** Individual Pokemon card.
 *
 * Props:
 * - exp: (number of experience points)
 * - id: card id
 * - name
 * - type
 *
 * */

function Yugicard({ exp, id, name, type }) {
    const [card, setCard] = useState(null);

    useEffect(() => {
        const fetchCardInfo = async () => {
            try {
                const response = await axios.get(`${YUGIOH_API}?id=${id}}`);
                setCard(response.data.data[0]);
            } catch (error) {
                console.error("Error fetching card info:", error);
            }
        };
        console.log(`${YUGIOH_API}?id=${id}}`)
        fetchCardInfo();
    }, [id]);

    if (!card) {
        return null; // Add a loading state or error handling if needed
    }

    const imgSrc = card.card_images[0].image_url;

    return (
        <img className="Yugicard-image" src={imgSrc} alt={name} />

    );
}

export default Yugicard;

