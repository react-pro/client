import './learning-item-link.scss';
import React from 'react';
import { Row, Col } from 'reactstrap';

const LearningItemLink = (link) => {
    return (
        <li className="source__item">
            <Row>
                <Col lg="3" md="3" xs="12">
                
                    <img alt='i-learning' src={`${link.link.image}`} className="source__image"/>
                </Col>
                <Col lg="9" md="9" xs="12">
                     <a className="source__link" href={`${link.link.source}`} target='_blank' rel='noopener noreferrer'>
                        <h4 className="source__name">{link.link.name}</h4>
                            {link.link.source}
                    </a>
                    <p className="source__description">{link.link.description}</p>
                </Col>
            </Row>
        </li>
    );
};

export default LearningItemLink;
