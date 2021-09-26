import React from 'react';
import './CharCount.css';

const CharCount = (props) => {
    const charCount = props.charCount;
    let totalCost = 0;
    let charNames = [];
    const unique = [];
    for(const character of charCount){
        if(unique.indexOf(character) === -1){
            unique.push(character);
            totalCost = totalCost + character.demand;
            charNames.push(character.name);
        }
            
        
        
        
    }
    return (
        <div className="costing">
            <h3>Character Count: {unique.length}</h3>
            <h2>Total Cost: {totalCost}</h2>
            {
                charNames.map(charName => <h4>{charName}</h4>)
            }
            <button>Confirm with Budget</button>
        </div>
    );
};

export default CharCount;