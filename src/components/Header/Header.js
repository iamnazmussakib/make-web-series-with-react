import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1><i class="fas fa-film"></i> Make Another <span>Web Series</span></h1>
            <p>You can choose director, actor, actress, musician, modeling from here with your budget. </p>
            <h3>Total Budget: 5200000</h3>
        </div>
    );
};

export default Header;