import React from 'react';
import camille from '../../assets/imgs/camille.jpg';

import { FiStar } from 'react-icons/fi';

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
                <span><FiStar size={18} /></span>
            </div>
        </div>
    );
}