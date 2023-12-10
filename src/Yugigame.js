
import React from "react";
import Yugidecks from "./Yugidecks";

const defaultYugioh = [
    { id: 74677422, name: "Red Eyes Black Dragon", type: "Dark/Dragon", base_experience: 2400 },
    { id: 89943723, name: "Elemental HERO Neos", type: "Hero", base_experience: 2500 },
    { id: 72989439, name: "Black Luster Soldier", type: "Dark", base_experience: 3000 },
    { id: 44508094, name: "Stardust Dragon", type: "Dragon", base_experience: 2500 },
    { id: 84013237, name: "Number39: Utopia", type: "Magic", base_experience: 2500 },
    { id: 65192027, name: "Dark Armed Dragon", type: "Dragon", base_experience: 2800 },
];

/** Return sum of experience in hand. */
function sumExperience(hand) {
    return hand.reduce((exp, yugioh) => exp + yugioh.base_experience, 0);
}

/** Yugigame: shows two hands (YugiDecks)
 *
 * Props:
 * - yugioh (list of Yu-Gi-Oh! cards to use; defaults to default list)
 **/
function Yugigame({ yugioh = defaultYugioh }) {
    const shuffledYugioh = [...yugioh].sort(() => Math.random() - 0.5);

    // Split the deck into two halves
    const half = Math.ceil(shuffledYugioh.length / 2);
    const hand1 = shuffledYugioh.slice(0, half);
    const hand2 = shuffledYugioh.slice(half);

    const exp1 = sumExperience(hand1);
    const exp2 = sumExperience(hand2);

    return (
        <div>
            <Yugidecks yugioh={hand1} exp={exp1} isWinner={exp1 > exp2 || (exp1 === exp2 && Math.random() > 0.5)} />
            <Yugidecks yugioh={hand2} exp={exp2} isWinner={exp2 > exp1 || (exp1 === exp2 && Math.random() > 0.5)} />
        </div>
    );
}

export default Yugigame;
