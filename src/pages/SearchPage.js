import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import LoadingCard from '../components/LoadingCard';
import JokeCard from '../components/JokeCard';

import SearchForm from '../components/SearchForm';

import ChuckApi from '../api/ChuckApi';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.searchForJoke = this.searchForJoke.bind(this);

    this.api = new ChuckApi({
      baseUrl: process.env.REACT_APP_API_URL
    });
  }

  updateSearchTerm(event) {
    this.setState({ search: event.target.value });
  }

  searchForJoke(event) {
    event.preventDefault();
    this.setState({ searching: true });
    this.api.search({ query: this.state.search }).then(jokes => {
      this.setState({
        jokes,
        searching: false
      });
    });
  }

  Display({ searching, jokes }) {
    if (searching) {
      return (
        <Row>
          <Col xs="6" sm="4" />
          <Col xs="6" sm="4">
            <LoadingCard />
          </Col>
          <Col sm="4" />
        </Row>
      );
    }
    if (jokes) {
      const cards = jokes.map(joke => <JokeCard key={joke.id} joke={joke} />);
      return <div className="card-columns">{cards}</div>;
    }

    return '';
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="6" sm="4" />
          <Col xs="6" sm="4">
            <SearchForm
              onChange={this.updateSearchTerm}
              onSave={this.searchForJoke}
            />
          </Col>
          <Col sm="4" />
        </Row>
        <this.Display
          searching={this.state.searching}
          jokes={this.state.jokes}
        />
      </Container>
    );
  }
}

export default SearchPage;
