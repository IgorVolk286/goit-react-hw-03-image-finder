import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ListGallary } from './ImageGallery.styled';

export const ImageGallery = ({ collection }) => {
  return (
    <ListGallary>
      <ImageGalleryItem collectionItems={collection} />
    </ListGallary>
  );
};
