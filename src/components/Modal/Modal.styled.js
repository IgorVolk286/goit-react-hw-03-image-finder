import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(48, 24, 21, 0.78);
  border: 1px solid black;
`;
export const Img = styled.img`
  width: 600px;
  height: 550px;
`;

export const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
