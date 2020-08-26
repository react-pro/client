import './learning-item.scss';

import React from 'react';
import LearningItemLink from './../learning-item-link/Learning-item-link';
import { Container, Col, Row } from 'reactstrap';
import testsData from './../../../../data/technologyData.json';

const LearningItem = (props) => {
    const technologyId = props.match.params.id;
    const techology = testsData[0].technologies.filter(technology => technology.id === technologyId)[0];
    const links = techology.links;

  return (
    <Container>
        <Row>
            <Col lg="12" md="12" xs="12" className="learning-item source">
                <h1>{techology.name}</h1>
                <ul className="source__list">
                {links.map(link => (
                <LearningItemLink key={link.id} link={link} />
                ))}
                </ul>
            </Col>
        </Row>
    </Container>
  );
}

export default LearningItem;
