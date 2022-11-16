import React from "react";
import Card from "react-bootstrap/Card";
import meshNumber from "../JSONfiles/meshNumber.json";

function homePage() {
  return (
    <div>
      <Card body>
        <div className="d-flex justify-content-between">
          <div>
            <h6>Method:</h6>
            <input type="radio" value="A"></input>
            <label>A</label>
            <br />
            <input type="radio" value="B" checked></input>
            <label>B</label>
          </div>
          <div>
            <h6>Visual Nominal Particle Size: </h6>
            <select name="MeshNumber" id="meshnumber">
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
      </Card>
    </div>
  );
}

export default homePage;
