import { useCallback, useState, useMemo } from "react";

import DemoOutput from "./components/DemoOutput";
import "./App.css";
import Button from "./components/UI/Button";
import DemoList from "./components/DemoList";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const [listTitle, setListTitle] = useState("MyList");
  const toggleParagraph = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowToggle]);
  const allowToggleParagraph = () => {
    setAllowToggle(true);
  };
  const changeTitleHandler = useCallback(() => {
    setListTitle("new title");
  }, []);
  console.log("log inside app");
  return (
    <div className="App">
      <header className="App-header">callback example</header>
      <DemoOutput show={showParagraph} />
      <DemoList
        title={listTitle}
        items={useMemo(() => [5, 3, 4, 10, 9, 1], [])}
      />
      <Button onClick={changeTitleHandler}>Change List title</Button>
      <Button onClick={allowToggleParagraph}>click to allow toggle</Button>
      <Button onClick={toggleParagraph}>click to toggle</Button>
    </div>
  );
}

export default App;
