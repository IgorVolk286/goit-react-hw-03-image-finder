import React from 'react';
import { Item, Img } from './ImageGalleryItem.styled.js';

export const ImageGalleryItem = ({ collection, onClickItem }) => {
  return collection.map(({ id, webformatURL, tags }) => {
    return (
      <Item onClick={onClickItem} key={id}>
        <Img id={id} src={webformatURL} alt={tags} />
      </Item>
    );
  });
};
