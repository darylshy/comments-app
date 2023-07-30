import { useCallback, useEffect, useState } from "react";
import "the-new-css-reset/css/reset.css";
import "./App.css";
import { AppTheme } from "./App.theme";
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
    <AppTheme>
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
              padding: "0 10px",
              background: "transparent",
              borderRight: "1px solid #d2d2d2",
              paddingTop: "20px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="name" style={{ marginBottom: "5px" }}>
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                style={{
                  background: "#fff",
                  marginBottom: "20px",
                  color: "#787889",
                  padding: "10px",
                }}
              ></input>
              <label htmlFor="story" style={{ marginBottom: "5px" }}>
                Comment:
              </label>
              <textarea
                id="story"
                name="story"
                rows={5}
                cols={33}
                placeholder="Write something here"
                style={{
                  background: "#fff",
                  color: "#787889",
                  marginBottom: "10px",
                }}
              ></textarea>
              <button
                type="button"
                style={{
                  background: "#fdb026",
                  width: "25%",
                  marginLeft: "auto",
                  textAlign: "center",
                  padding: "15px",
                  cursor: "pointer",
                  borderRadius: "20px",
                }}
              >
                Comment
              </button>
            </div>
          </div>
          <div style={{ flex: 1, background: "transparent" }}></div>
        </div>
      </div>
    </AppTheme>
  );
}

export default App;
