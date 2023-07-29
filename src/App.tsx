import { useCallback, useEffect, useState } from "react";
import "the-new-css-reset/css/reset.css";
import "./App.css";
import { MenuBar } from "./components/organisms";
import { useHotTakeGenerator } from "./hooks/use-hot-take-generator";
function App() {
  const { generateHotTake } = useHotTakeGenerator();
  const [hotTake, setHotTake] = useState("");
  const [initialFetched, setInitialFetched] = useState(false);

  const fetchHotTake = useCallback(async () => {
    const _hotTake = await generateHotTake();
    setHotTake(_hotTake?.data);
  }, [generateHotTake]);

  // Fetch the initial hot take on page load
  useEffect(() => {
    if (!initialFetched) {
      fetchHotTake();
      setInitialFetched(true);
    }
  }, [fetchHotTake, initialFetched]);

  return (
    <div className="App">
      <MenuBar hotTake={hotTake} refreshHotTake={fetchHotTake} />
    </div>
  );
}

export default App;
