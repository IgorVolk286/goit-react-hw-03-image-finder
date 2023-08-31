import React from 'react';
import { Item, Img } from './ImageGalleryItem.styled.js';

export const ImageGalleryItem = ({ collection }) => {
  return collection.map(({ id, webformatURL, tags }) => {
    return (
      <Item key={id}>
        <Img src={webformatURL} alt={tags} />
      </Item>
    );
  });
};
