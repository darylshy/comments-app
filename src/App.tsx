import "the-new-css-reset/css/reset.css";
import "./App.css";
import { AppTheme } from "./App.theme";
import { Main, MenuBar } from "./components/organisms";

function App() {
  return (
    <AppTheme>
      <div className="App">
        <MenuBar />
        <Main />
      </div>
    </AppTheme>
  );
}

export default App;
