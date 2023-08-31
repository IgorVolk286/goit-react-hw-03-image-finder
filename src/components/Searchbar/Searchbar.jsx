import React, { Component } from 'react';
import { Header, Button, Input } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    search: ' ',
  };

  changeInput = event => {
    this.setState({ search: event.currentTarget.value });
  };

  submitForm = event => {
    event.preventDefault();
    if (this.state.search === ' ') {
      return alert('you must add name');
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: ' ' });
  };

  render() {
    return (
      <Header>
        <form onSubmit={this.submitForm}>
          <Button type="submit">
            <span>Search</span>
          </Button>
          <Input
            onChange={this.changeInput}
            value={this.state.search}
            name="search"
            className="input"
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </Header>
    );
  }
}
