import React from 'react';
import camille from '../../assets/imgs/camille.jpg';

import './styles.css';

export default function NewsCard(props) {
    return (
        <div className="news-content">
            <div className="image">
                <img src={camille} alt=""/>
            </div>
            <div className="description">
                <strong>{props.title}</strong>
                <p>{props.description}</p>
            </div>
        </div>
    );
}