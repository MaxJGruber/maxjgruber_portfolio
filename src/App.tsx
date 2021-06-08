import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact-me" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
