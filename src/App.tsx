import { useCallback, useEffect, useState } from "react";
import "the-new-css-reset/css/reset.css";
import "./App.css";
import { MenuBar } from "./components/organisms";
import { useHotTakeGenerator } from "./hooks/use-hot-take-generator";

function App() {
  const { generateHotTake } = useHotTakeGenerator();
  const [hotTake, setHotTake] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);

  const fetchHotTake = useCallback(async () => {
    setIsLoading(true);
    const _hotTake = await generateHotTake();
    setHotTake(_hotTake?.data);
    setIsLoading(false);
    if (initialLoad) {
      setInitialLoad(false);
    }
  }, [generateHotTake, initialLoad]);

  useEffect(() => {
    if (initialLoad) {
      fetchHotTake();
    }
  }, [fetchHotTake, initialLoad]);

  return (
    <div className="App">
      <MenuBar
        hotTake={hotTake}
        refreshHotTake={fetchHotTake}
        isLoading={isLoading}
      />
      <div style={{ display: "flex" }}>
        <div
          style={{
            height: "100vh",
            width: "488.938px",
            background: "transparent",
            borderRight: "1px solid #d2d2d2",
          }}
        >
          <label htmlFor="name">Name (4 to 8 characters):</label>
          <input type="text" id="name" name="name"></input>
        </div>
        <div style={{ flex: 1, background: "transparent" }}></div>
      </div>
    </div>
  );
}

export default App;
