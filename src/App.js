import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
// import Sidebar from './Components/sidebar/Sidebar';
import Home from './Pages/Home/Home'

function App() {
  return (

    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
   

  );
}

export default App;
