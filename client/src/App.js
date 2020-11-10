import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" >
        <a class="navbar-brand" href="#">Image</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/" className="nav-link">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link to="/quizVoc" className="nav-link">Quiz Vocabulary</Link>
            </li>
            <li class="nav-item">
              <Link to="/quizGram" className="nav-link">Quiz Grammar</Link>
            </li>
          </ul>
        </div>
      </nav >

      <Route exact path="/" component={Home} />
    </Router >
  );
}

export default App;
