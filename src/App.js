import './App.css'
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Information from './components/HW-8.1/Information'
import CustomHookTask from './components/HW-8.2/CustomHookTask'
import NetoSocial from './components/HW-8.3/NetoSocial'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="task">
          <Route path="/first" component={ Information } />
          <Route path="/second" component={ CustomHookTask } />
          <Route path="/third" component={ NetoSocial } />
        </div>
      </div>
    </Router>
  );
}

export default App;
