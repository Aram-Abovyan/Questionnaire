import './App.css';
import { MainPage } from './pages/main';
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import { PowercodePage } from './pages/powercode';
import { EasePage } from './pages/ease';
import { FoodexPage } from './pages/foodex';
import { QuestionPage } from './pages/layouts/QuestionPage';
import { StartingPage } from './pages/layouts/StartingPage';
import completedMessageDark from './assets/images/completed-message-dark.svg';
import completedMessageLight from './assets/images/completed-message-light.svg';

function App() {
  const history = useHistory();

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
          <QuestionPage pageName="powercode" />
        </Route>

        <Route exact path="/foodex-page-questions">
          <QuestionPage pageName="foodex" />
        </Route>

        <Route exact path="/ease-page-questions">
          <QuestionPage pageName="ease" />
        </Route>

        <Route exact path="/ease-completed">
          <StartingPage
            pageName="ease-page"
            buttonText="GO TO WEBSITE"
            clickHandler={() => history.push('/')}
            message={completedMessageLight}
          />
        </Route>

        <Route exact path="/foodex-completed">
          <StartingPage
            pageName="foodex-page"
            buttonText="GO TO WEBSITE"
            clickHandler={() => history.push('/')}
            message={completedMessageDark}
          />
        </Route>

        <Route exact path="/powercode-completed">
          <StartingPage
            pageName="powercode-page"
            buttonText="GO TO WEBSITE"
            clickHandler={() => history.push('/')}
            message={completedMessageLight}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
