import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import './main.scss';
import App from './App';
import About from './About';
import Project from './projects/project';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route exact path="/project" component={Project} />
        <Route path="/project:id" component={Project} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

