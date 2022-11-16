import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const Results = ({ tareMass, tareMaterialDryMass, tareMaterialWetMass }) => {
  const [waterContent, setWaterContent] = useState(0);
  useEffect(() => {
    setWaterContent(
      ((tareMaterialWetMass - tareMaterialDryMass) /
        (tareMaterialDryMass - tareMass)) *
        100
    );
  }, [tareMass, tareMaterialWetMass, tareMaterialDryMass]);
  return (
    <div>
      <Card body>
        <h6>Water Content(%):</h6>
        <div> {waterContent} </div>
      </Card>
    </div>
  );
};

export default Results;
