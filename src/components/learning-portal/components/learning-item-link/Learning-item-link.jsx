import './learning-item-link.scss';
import React from 'react';
import { Row, Col } from 'reactstrap';

const LearningItemLink = ({link}) => {
    return (
        <li className="source__item">
            <Row>
                <Col lg="3" md="3" xs="12">
                    <img src={`${link.image}`} alt={`${link.name}`} className="source__image"/>
                </Col>
                <Col lg="9" md="9" xs="12">
                    <h4 className="source__name">{link.name}</h4>
                    <a className="source__link" href={`${link.source}`} target='_blank' rel='noopener noreferrer'>
                            {link.source}
                    </a>
                    <p className="source__description">{link.description}</p>
                </Col>
            </Row>
        </li>
    );
};

export default LearningItemLink;
