import React, { useState, useEffect } from "react";
import { Card, Form } from "react-bootstrap";

const Measurements = ({
  tareMass,
  setTareMass,
  tareMaterialWetMass,
  setTareMaterialWetMass,
}) => {
  const [tareId, setTareId] = useState("MT001");
  const [materialWetMass, setMaterialWetMass] = useState(
    tareMaterialWetMass - tareMass
  );

  useEffect(() => {
    setMaterialWetMass(tareMaterialWetMass - tareMass);
  }, [tareMass, tareMaterialWetMass]);

  return (
    <div>
      <Card>
        <div className="m-2">
          <Form className="d-flex flex-column">
            <div className="d-flex justify-content-around">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tare ID:</Form.Label>
                <Form.Control
                  type="text"
                  value={tareId}
                  onChange={(e) => setTareId(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tare Mass (g):</Form.Label>
                <Form.Control
                  type="text"
                  value={tareMass}
                  onChange={(e) => setTareMass(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="d-flex justify-content-around">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tare and Material Wet Mass (g):</Form.Label>
                <Form.Control
                  type="text"
                  value={tareMaterialWetMass}
                  onChange={(e) => setTareMaterialWetMass(e.target.value)}
                />
              </Form.Group>
              <div>
                <h6>Material Wet Mass (g):</h6>
                <p>{materialWetMass}</p>
              </div>
            </div>
          </Form>
        </div>
      </Card>
      <Card>
        <div className="m-2 d-flex justify-content-around">
          <div>
            <h5>Tested By</h5>
            <p>Laboratory Supervisor Name</p>
            <button className="btn btn-primary">Clear</button>
          </div>
          <div>
            <h5>Date Tested</h5>
            <p>04-Sep-2018</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Measurements;
