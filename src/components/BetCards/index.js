import React from 'react';

import './styles.css';

export default function BetCard(props) {
    return (
        <button className="bets-content">
            <strong> {props.name} </strong>
        </button>
    );
}