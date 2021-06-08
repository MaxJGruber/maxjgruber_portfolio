import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/AboutMe";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact-me" component={Contact} />
        <Route exact path="/about-me" component={About} />
        <Route exact path="/my-projects" component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
