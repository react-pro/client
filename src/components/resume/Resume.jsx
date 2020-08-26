import './resume.scss';

import React from "react";
import TechnologyList from './components/technology-list/Technology-list';

const Resume = () => {
  return (
    <div className="resume">
      <TechnologyList />
    </div>
  );
};

export default Resume;