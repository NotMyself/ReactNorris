import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import Header from './components/Header';

import RandomPage from './pages/RandomPage';
import SearchPage from './pages/SearchPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Container className="App">
          <Header />
          <Route exact path="/" component={RandomPage} />
          <Route path="/search" component={SearchPage} />
        </Container>
      </Router>
    );
  }
}

export default App;
