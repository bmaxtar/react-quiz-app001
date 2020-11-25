import './App.css';
import Administrateur from './components/Administrateur';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './components/Notes';
import Questions from './components/Questions';
import Add from './components/Add';
import Card from './components/Card';
import Login from './users/Login';
import Register from './users/Register';
import Theme from './users/Theme';
import './users/Theme.css';

function App() {
  return (
    <Router>
      <Switch>
      <div className="App">
        <Route  path="/Administrateur" component={Administrateur} />
        <Route  path="/Notes" component={Notes} />
        <Route  path="/Questions" component={Questions} />
        <Route  path="/Add" component={Add} />
        <Route  path="/Card" component={Card} />
        <Route  path="/Login" component={Login} />
        <Route  path="/Theme" component={Theme} />

      </div>
    </Switch>
</Router>

  );
}

export default App;
