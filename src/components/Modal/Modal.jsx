import React, { Component } from 'react';
import { Overlay, Img, Div } from './Modal.styled';
// import { createPortal } from 'react-dom';

// const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  onEscapeClick = e => {
    console.log(e.code);
    if (e.code === 'Escape') {
      this.props.onClickItem();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.onEscapeClick);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapeClick);
  }
  onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClickItem();
    }
  };
  render() {
    return (
      <Overlay onClick={this.onClickBackdrop}>
        <Div>
          <Img
            src="https://pixabay.com/get/g08a879efe1d34df1f12a54adeaf81bc251e9fb9b3162564ca2659cfdc43bc2e41ff747d9b6b2fd078378f02bc13aee73b0f8573d21cc6d5c05c37a28e00d8762_1280.jpg"
            alt=""
          />
        </Div>
      </Overlay>
    );
  }
}
// return createPortal(
//   <Overlay>
//     <div>
//       <Img
//         src="https://pixabay.com/get/g08a879efe1d34df1f12a54adeaf81bc251e9fb9b3162564ca2659cfdc43bc2e41ff747d9b6b2fd078378f02bc13aee73b0f8573d21cc6d5c05c37a28e00d8762_1280.jpg"
//         alt=""
//       />
//     </div>
//   </Overlay>,
//   modalRoot
// );
