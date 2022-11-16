import "./App.css";
import React, { useState } from "react";
import Measurements from "./components/Measurements";
import DryMass from "./components/DryMass";
import Preparation from "./components/Preparation";
import "bootstrap/dist/css/bootstrap.min.css";
import Results from "./components/Results";

function App() {
  const [tareMass, setTareMass] = useState(300.0);
  const [tareMaterialWetMass, setTareMaterialWetMass] = useState(2859.6);
  const [tareMaterialDryMass, setTareMaterialDryMass] = useState(2525.7);

  return (
    <div className="container mt-2 mb-2">
      <Preparation />
      <br />

      <h3>Measurements</h3>
      <Measurements
        tareMass={tareMass}
        setTareMass={setTareMass}
        tareMaterialWetMass={tareMaterialWetMass}
        setTareMaterialWetMass={setTareMaterialWetMass}
      />
      <br />

      <h3>Dry Mass</h3>
      <DryMass
        tareMass={tareMass}
        tareMaterialDryMass={tareMaterialDryMass}
        setTareMaterialDryMass={setTareMaterialDryMass}
      />
      <h3>Results</h3>
      <Results
        tareMass={tareMass}
        tareMaterialDryMass={tareMaterialDryMass}
        tareMaterialWetMass={tareMaterialWetMass}
      />
    </div>
  );
}

export default App;
