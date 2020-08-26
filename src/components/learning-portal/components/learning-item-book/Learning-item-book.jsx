import './learning-item-book.scss';
import React from 'react';

const LearningItemBook = ({ book }) => {
  return (
    <li className='book__item'>
        <img src={`${book.image}`} alt={`${book.name}`} className='book__image' />
        <h6 className='book__name'>{book.name}</h6>
        <a className='book__link' href={`${book.source}`} target='_blank' rel='noopener noreferrer'>
          {book.source}
        </a>
        <p className='source__description'>{book.description}</p>
    </li>
  );
};

export default LearningItemBook;
