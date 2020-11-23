import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <a className="navbar-brand" href="#">Image</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/quizVoc" className="nav-link">Quiz Vocabulary</Link>
            </li>
            <li className="nav-item">
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
