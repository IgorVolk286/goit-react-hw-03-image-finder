import React from 'react';
import { Overlay } from './Modal.styled';

export const Modal = () => {
  return (
    <Overlay class="overlay">
      <div class="modal">
        <img
          src="https://pixabay.com/get/g08a879efe1d34df1f12a54adeaf81bc251e9fb9b3162564ca2659cfdc43bc2e41ff747d9b6b2fd078378f02bc13aee73b0f8573d21cc6d5c05c37a28e00d8762_1280.jpg"
          alt=""
        />
      </div>
    </Overlay>
  );
};
