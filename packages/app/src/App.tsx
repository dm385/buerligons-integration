import "./App.css";

import { Buerligons } from "../../buerligons/src/components/Buerligons";
import { initBuerli } from "../../buerligons/src/initBuerli";

initBuerli();

function App() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Buerligons />
    </div>
  );
}

export default App;
