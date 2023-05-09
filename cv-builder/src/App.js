import CVInput from "./components/CVInput";
import CVOutput from "./components/CVOutput";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import './index.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Instructions />
      <div className="templates">
        <CVInput />
        <CVOutput />
      </div>
    </div>
  );
}

export default App;
