import './technology.scss';

import React from 'react';
import { Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Technology = ({ test }) => {

  return (
    <Col lg="3" md="6" xs="12">
      <Link to={`/learning/${test.id}`} className="technology__link">
        <div className="technology__item">
          <div className="technology__info">
              <div className="technology__circular">
          <CircularProgressbar
            strokeWidth={10}
            value={test.technologyScore}
            text={`${test.technologyScore}%`}
            styles={buildStyles({
                strokeLinecap: 'butt',
                textSize: '18px',
                pathTransitionDuration: 0.5,
                textColor: '#ffd300',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
            />
            </div>
            <h3 className="technology__name page-subheading">{test.name}</h3>
            <p className="technology__description">{test.description}</p>
            <Button color="danger">Learn more</Button>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default Technology;