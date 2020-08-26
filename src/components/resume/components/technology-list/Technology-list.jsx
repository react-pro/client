import './technology-list.scss';

import React, { Component } from 'react';
import Technology from './../technology/Technology';
import { Row, Col, Container } from 'reactstrap';
import testsData from './../../../../data/technologyData.json';

class TechnologyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tests: null,
      loading: true,
      error: null,
    };
  }

  findTechnologyByCategory(tests, category) {
    return tests.filter(technology => technology.name === category)[0].testPreviewDTOSet;
  }

  render() {
    const tests = testsData;
    const loading = false; 

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!tests) {
      return <div>No tests yet...</div>;
    }

    const skills = this.findTechnologyByCategory(tests, 'Skills');

    return (
        <Container>
            <Row className="technology-list">
                <Col lg="12">
                     <h2 className="technology-list__title">Skills</h2>
                </Col>
                {skills.map(test => (
                <Technology key={test.id} test={test} />
                ))}
            </Row>
      </Container>
    );
  }
}

export default TechnologyList;
