import styled from 'styled-components';

export const ListGallary = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  width: 1600px;
  flex-basis: calc((100% / 4 - 60));
`;
