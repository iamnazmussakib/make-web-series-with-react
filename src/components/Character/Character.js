import React from 'react';
import './Character.css'

const Character = (props) => {
    const {name, Age, image, occupation, demand} = props.character;
    return (
        <div className="character">
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h4>Occupation: {occupation}</h4>
            <p>Age: {Age}</p>
            <h3>Budget: TK {demand}</h3>
            <button title="in a web series you can add character for one time" onClick={()=> props.addCharHandler(props.character)}><i class="fas fa-user-plus"></i> Add Character</button>
        </div>
    );
};

export default Character;