import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  position: relative;
  height: 100%;
  background-color: #eee;
`;
const Main = ({ children }) => {
  return (
    <MainWrapper id="main" role="main">
      { children }
    </MainWrapper>
  );
}

export default Main;