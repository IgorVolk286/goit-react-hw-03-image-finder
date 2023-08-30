import React from 'react';
import { Item, Img } from './ImageGalleryItem.styled.js';

export const ImageGalleryItem = ({ collectionItems }) => {
  return collectionItems.map(({ id, webformatURL, tags }) => {
    return (
      <Item>
        <Img src={webformatURL} alt={tags} />
      </Item>
    );
  });
};
