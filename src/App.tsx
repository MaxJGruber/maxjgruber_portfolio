import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import store from "../stores/store";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

function App() {
  const [siteContentLanguage, setsiteContentLanguage] = useState("en");

  useEffect(() => {
    if (siteContentLanguage !== store.getState().language.language) {
      store.subscribe(() => {
        setsiteContentLanguage(store.getState().language.language);
      });
    }
  }, [siteContentLanguage]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
