import './learning-item-link.scss';
import React from 'react';

const LearningItemLink = (link) => {
    return (
        <li className='source__item'>
            <a href={`${link.link.source}`} target='_blank' rel='noopener noreferrer'>
                {link.link.name}
            </a>
        </li>
    );
};

export default LearningItemLink;
