import React from 'react';
import styled from 'styled-components';

const InnerContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  
`;

function Inner({ children }) {
  return (
    <InnerContainer>
      {children}
    </InnerContainer>
  );
}

export default Inner;
