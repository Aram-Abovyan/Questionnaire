import './App.css';
import { MainPage } from './pages/main';
import {
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { PowercodePage } from './pages/powercode';
import { EasePage } from './pages/ease';
import { FoodexPage } from './pages/foodex';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>

        <Route exact path="/ease">
          <EasePage />
        </Route>

        <Route exact path="/foodex">
          <FoodexPage />
        </Route>

        <Route exact path="/powercode">
          <PowercodePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
