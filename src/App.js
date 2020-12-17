import './App.css'
import { BrowserRouter as Router , Route } from 'react-router-dom';
import List from './components/HW-8.1/List'
import JsonHook from './components/HW-8.2/JsonHook'
import Authentication from './components/HW-8.3/Authentication'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="task">
          <Route path="/first" component={ List } />
          <Route path="/second" component={ JsonHook } />
          <Route path="/third" component={ Authentication } />
        </div>
      </div>
    </Router>
  );
}

export default App;
