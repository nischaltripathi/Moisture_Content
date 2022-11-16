import React, { useState, useEffect } from "react";
import { Card, Form } from "react-bootstrap";

const DryMass = ({ tareMass, tareMaterialDryMass, setTareMaterialDryMass }) => {
  const [materialDrytMass, setMaterialDrytMass] = useState(
    tareMaterialDryMass - tareMass
  );

  useEffect(() => {
    setMaterialDrytMass(tareMaterialDryMass - tareMass);
  }, [tareMaterialDryMass]);

  return (
    <Card>
      <div className="m-2 d-flex flex-column justify-content-center">
        <div className="text-center">
          <h6>Dry Mass Balance:</h6>
          <select className="w-50">
            <option key="01BAL">01BAL</option>
            <option key="02BAL">02BAL</option>
            <option key="03BAL">03BAL</option>
          </select>
        </div>

        <div className="mt-5 d-flex justify-content-around">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tare and Material Dry Mass:</Form.Label>
              <Form.Control
                type="text"
                value={tareMaterialDryMass}
                onChange={(e) => setTareMaterialDryMass(e.target.value)}
              />
            </Form.Group>
          </Form>
          <div>
            <h6>Material Dry Mass(g):</h6>
            <p>{materialDrytMass}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DryMass;
