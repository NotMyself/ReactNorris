import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

import './SearchForm.css';

const SearchForm = ({ onChange, onSave }) => {
  return (
    <Form className="search-form" inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          onChange={onChange}
        />
        <Button color="primary" onClick={onSave}>
          Go
        </Button>
      </FormGroup>
    </Form>
  );
};

export default SearchForm;
