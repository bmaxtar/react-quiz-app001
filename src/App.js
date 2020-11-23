import './App.css';
import Administrateur from './components/Administrateur';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './components/Notes';
import Questions from './components/Questions';
import Add from './components/Add';


function App() {
  return (
    <Router>
      <Switch>
      <div className="App">
        <Route exact path="/" component={Administrateur} />
        <Route  path="/Notes" component={Notes} />
        <Route  path="/Questions" component={Questions} />
        <Route  path="/Add" component={Add} />


      </div>
    </Switch>
</Router>

  );
}

export default App;