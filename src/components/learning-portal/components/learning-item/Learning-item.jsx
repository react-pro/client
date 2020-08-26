import './learning-item.scss';

import React from 'react';
import LearningItemLink from './../learning-item-link/Learning-item-link';
import LearningItemBook from './../learning-item-book/Learning-item-book';
import { Container, Col, Row } from 'reactstrap';
import testsData from './../../../../data/technologyData.json';

const LearningItem = (props) => {
    const technologyId = props.match.params.id;
    const techology = testsData[0].technologies.filter(technology => technology.id === technologyId)[0];
    const links = techology.links;
    const books = techology.books;

  return (
    <Container>
        <Row>
            <div className="learning-item">
            <Col lg="12" md="12" xs="12">
                <h1 className="learning-item__name">{techology.name}</h1>
                <ul className="learning-item__list source">
                {links.map(link => (
                    <LearningItemLink key={link.id} link={link} />
                ))}
                </ul>
            </Col>
            <Col lg="4" md="4" xs="12">
                <ul className="learning-item__list book">
                    {books.map(book => (
                    <LearningItemBook key={book.id} book={book} />
                ))}
                </ul>
            </Col>
            </div>
        </Row>
    </Container>
  );
}

export default LearningItem;
