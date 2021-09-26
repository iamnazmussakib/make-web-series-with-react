import React, { useEffect, useState } from 'react';
import Character from '../Character/Character';
import CharCount from '../CharCount/CharCount';
import './Characters.css';

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [charItem, setCharItem] = useState([]);
    useEffect(()=>{
        fetch('./character.JSON')
        .then(res => res.json())
        .then(data => setCharacters(data));
    },[])
    const addCharHandler = char => {
        const charCount = [...charItem, char];
        setCharItem(charCount);
        console.log(charCount);
    }
    return (
        <div className="home">
            <div className="characters">
                {
                    characters.map(character => <Character
                        key={character.id}
                        character={character}
                        addCharHandler={addCharHandler}
                    ></Character>)
                }
            </div>
            <div className="calculate">
                <CharCount key={charItem.id} charCount={charItem}></CharCount>
            </div>
        </div>
    );
};

export default Characters;