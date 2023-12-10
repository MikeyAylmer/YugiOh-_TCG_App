import React from "react";
import Yugicard from "./Yugicard";
import "./Yugidex.css";

function YugiDeck({ exp, isWinner, yugioh }) {
    const winMessage = isWinner
        ? <p className="Yugidex-winner">This Player Won!</p>
        : null;

    return (
        <div className="Yugidex">
            <h2 className="Yugidex-title">Player Deck</h2>
            <h4>Total ATK: {exp}</h4>
            <div className="Yugidex-cards">
                {yugioh.map(p => (
                    <Yugicard
                        key={p.id}  // Don't forget to add a unique key for each item in the list
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        exp={p.base_experience}
                    />
                ))}
            </div>

            {winMessage}
        </div>
    );
}

export default YugiDeck;
