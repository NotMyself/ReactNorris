import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import LoadingCard from '../components/LoadingCard';
import JokeCard from '../components/JokeCard';

import CategoryButton from '../components/CategoryButton';
import Switch from 'react-switch';

import ChuckApi from '../api/ChuckApi';

import './RandomPage.css';

class RandomPage extends Component {
  constructor(props) {
    super(props);

    this.state = { checked: false };

    this.newJoke = this.newJoke.bind(this);
    this.categoryChange = this.categoryChange.bind(this);
    this.switchChange = this.switchChange.bind(this);

    this.api = new ChuckApi({
      baseUrl: process.env.REACT_APP_API_URL
    });
  }

  switchChange(checked) {
    this.setState({ checked });
    if (checked) {
      this.setState({ timer: setInterval(this.newJoke, 5000) });
    } else {
      const timer = this.state.timer;
      this.setState({ timer: null });
      clearInterval(timer);
    }
  }

  categoryChange(category) {
    this.setState({ category });
  }

  getCategories() {
    this.api
      .getCategories()
      .then(categories =>
        this.setState(Object.assign({}, this.state, { categories }))
      );
  }

  newJoke() {
    const category = this.state.category;

    this.setState({ joke: null });

    this.api
      .getRandom({ category })
      .then(joke => this.setState(Object.assign({}, this.state, { joke })));
  }

  componentDidMount() {
    this.getCategories();
    this.newJoke();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="6" sm="4" />
          <Col xs="6" sm="4">
            {this.state.categories ? (
              <CategoryButton
                categories={this.state.categories}
                category={this.state.category}
                onCategoryChange={this.categoryChange}
                onButtonClick={this.newJoke}
              />
            ) : (
              ''
            )}
          </Col>
          <Col sm="4" />
        </Row>
        <Row>
          <Col xs="6" sm="4" />
          <Col xs="6" sm="4">
            {this.state.joke ? (
              <JokeCard joke={this.state.joke} />
            ) : (
              <LoadingCard />
            )}
          </Col>
          <Col sm="4" />
        </Row>
        <Row>
          <Col xs="6" sm="4" />
          <Col xs="6" sm="4">
            {this.state.joke ? (
              <Switch
                className="float-right"
                onChange={this.switchChange}
                checked={this.state.checked}
                id="normal-switch"
              />
            ) : (
              ''
            )}
          </Col>
          <Col sm="4" />
        </Row>
      </Container>
    );
  }
}

export default RandomPage;
