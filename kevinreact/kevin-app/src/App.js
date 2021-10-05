import { FirtsAlert } from "./components/Alerts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <FirtsAlert alt="20px" anc="100 px" backcolor="orange" colorfont="black" text="Alerta1"> </FirtsAlert>
       <FirtsAlert alt="20px" anc="100 px" backcolor="pink" colorfont="red" text="Alerta2"> </FirtsAlert>

      </header>
    </div>
  );
}

export default App;
