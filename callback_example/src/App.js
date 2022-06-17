import { useCallback, useState } from "react";

import DemoOutput from "./components/DemoOutput";
import "./App.css";
import Button from "./components/UI/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const toggleParagraph = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowToggle]);
  const allowToggleParagraph = () => {
    setAllowToggle(true);
  };
  console.log("log inside app");
  return (
    <div className="App">
      <header className="App-header">callback example</header>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleParagraph}>click to allow toggle</Button>
      <Button onClick={toggleParagraph}>click to toggle</Button>
    </div>
  );
}

export default App;
