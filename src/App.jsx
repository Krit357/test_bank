import "./App.css";
import FixedHomePage from "./components/FixedHomePage";
import StandardPage from "./components/StandardPage";

function App() {
  return (
    <div>
      <StandardPage>
        <FixedHomePage />
      </StandardPage>
    </div>
  );
}

export default App;
