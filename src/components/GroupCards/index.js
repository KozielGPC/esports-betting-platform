import React from 'react';

import './styles.css';

export default function GroupCard(props) {
    return (
        <button className="groups-content">
            <strong> {props.groupName} </strong>
            <p> {props.usersGroup} membros</p>
        </button>
    );
}