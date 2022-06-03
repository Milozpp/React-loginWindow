import './App.css';
import LoginWindow from './LoginWindow';
import './LoginWindow.css'
import RegisterWindow from './RegisterWindow';
import './RegisterWindow.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          
          <LoginWindow/>
          
        </Route>
        <Route path="/register">

          <RegisterWindow/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
