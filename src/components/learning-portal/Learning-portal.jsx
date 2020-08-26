import './learning-portal.scss';
// import learningData from "./../../data/learningData.json";

import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import LearningItem from './components/learning-item/Learning-item';

const LearningPortal = () => {
  return (
    <Container>
        <Row>
            <Col>
                <LearningItem />
            </Col>
        </Row>
    </Container>
  );
}

export default LearningPortal;
