import React from 'react';

import { ListGallary } from './ImageGallery.styled';

export const ImageGallery = ({ children, getId }) => {
  return <ListGallary onClick={getId}>{children}</ListGallary>;
};
