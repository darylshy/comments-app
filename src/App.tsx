import { useEffect, useState } from "react";
import "the-new-css-reset/css/reset.css";
import "./App.css";
import { MenuBar } from "./components/molecules/menu-bar/MenuBar";
import { useCommentManager } from "./hooks/use-comment-manager";

function App() {
  const { cleanup, generateHotTake } = useCommentManager();
  const [hotTake, setHotTake] = useState("");

  useEffect(() => {
    (async () => {
      const _hotTake = await generateHotTake();
      setHotTake(_hotTake?.data);
    })();
    return cleanup;
  }, [cleanup, generateHotTake]);

  return (
    <div className="App">
      <MenuBar hotTake={hotTake} />
    </div>
  );
}

export default App;
