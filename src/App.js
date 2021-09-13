import './App.css';
import { MainPage } from './pages/main';
import {
  Switch,
  Route,
} from "react-router-dom";
import { PowercodePage } from './pages/powercode';
import { EasePage } from './pages/ease';
import { FoodexPage } from './pages/foodex';
import { QuestionPage } from './pages/layouts/QuestionPage';

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

        <Route exact path="/powercode-page-questions">
          <QuestionPage />
        </Route>

        <Route exact path="/foodex-page-questions">
          <QuestionPage />
        </Route>

        <Route exact path="/ease-page-questions">
          <QuestionPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
