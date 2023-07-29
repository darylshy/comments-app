import { useCallback, useEffect, useMemo, useState } from "react";
import "the-new-css-reset/css/reset.css";
import "./App.css";
import { MenuBar } from "./components/molecules/menu-bar/MenuBar";
import { useCommentManager } from "./hooks/use-comment-manager";

function App() {
  const { generateHotTake } = useCommentManager();
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
      <MenuBar hotTake={hotTake} />
    </div>
  );
}

export default App;
