import React from 'react';
import { Header, Button, Input } from './Searchbar.styled';
export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <form className="form" onSubmit={onSubmit}>
        <Button type="submit">
          <span className="button-label">Search</span>
        </Button>
        <Input
          name="search"
          className="input"
          type="text"
          placeholder="Search images and photos"
        />
      </form>
    </Header>
  );
};
