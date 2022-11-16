import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import meshNumber from "../JSONfiles/meshNumber.json";

const Preparation = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const displayInput = () => {
    setIsChecked(!isChecked);
  };
  const toEnable = () => {
    if (isDisabled) {
      setIsDisabled(false);
    }
  };

  return (
    <div>
      <Card body>
        <div className="d-flex justify-content-between">
          <div>
            <h6>Method:</h6>
            <input
              type="radio"
              value="A"
              name="method"
              disabled={isDisabled}
            ></input>
            <label>A</label>
            <br />
            <input
              type="radio"
              value="B"
              name="method"
              disabled={isDisabled}
              checked
            ></input>
            <label>B</label>
          </div>
          <div>
            <h6>Visual Nominal Particle Size: </h6>
            <select name="MeshNumber" id="meshnumber" disabled={isDisabled}>
              <option value="none">N/A</option>
              {meshNumber.map((values) => {
                return (
                  <option key={values.meshNumber} value={values.meshNumber}>
                    {values.meshNumber}'' ({values.inches})
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <br></br>
        <div className="d-flex justify-content-between">
          <div>
            <h6>Drying Temperature(°C):</h6>
            <input disabled={isDisabled} type="number"></input>
          </div>
          <div>
            <input
              disabled={isDisabled}
              type="checkbox"
              id="materialExcluded"
              onClick={displayInput}
            ></input>{" "}
            Material Excluded
            <br></br>
            {isChecked ? (
              <input id="materialExcludeInput" type="text" />
            ) : (
              <></>
            )}
          </div>
        </div>
        <br></br>

        <Button variant="primary" onClick={toEnable}>
          Change
        </Button>
        <br></br>
        <br></br>
        <div className="d-flex justify-content-between">
          <div>
            <h6>Balance:</h6>
            <select>
              <option key="01BAL">01BAL</option>
              <option key="02BAL">02BAL</option>
              <option key="03BAL">03BAL</option>
            </select>
          </div>
          <div>
            <h6>Oven:</h6>
            <select>
              <option key="01OVN">01OVN</option>
              <option key="02OVN">02OVN</option>
              <option key="03OVN">03OVN</option>
            </select>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default Preparation;
