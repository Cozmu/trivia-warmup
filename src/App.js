import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Result from './components/Result';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/result">Resultado</Link>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/result" component={ Result } />
          <Route component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;