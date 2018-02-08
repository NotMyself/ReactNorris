import React, { Component } from 'react';
import {
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import './CategoryButton.css';

class CategoryButton extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      dropdownOpen: false,
      categories: props.categories,
      category: props.category
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.category !== nextProps.category) {
      this.setState({ category: nextProps.category });
    }
  }

  render() {
    const items = this.state.categories.map(c => (
      <DropdownItem key={c} onClick={() => this.props.onCategoryChange(c)}>
        {c}
      </DropdownItem>
    ));
    return (
      <ButtonDropdown
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        className="btn-block category-button"
      >
        <Button
          id="caret"
          color="primary"
          className="btn-large"
          block
          onClick={this.props.onButtonClick}
        >
          {this.state.category ? this.state.category : 'random'}
        </Button>
        <DropdownToggle caret color="primary" />
        <DropdownMenu>{items}</DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default CategoryButton;
