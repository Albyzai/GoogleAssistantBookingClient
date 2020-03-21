import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledRoom = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px;
`;

const Room = ({ name }) => {
  return (
    <Wrapper>
      <StyledRoom>
        <h5>{name}</h5>
      </StyledRoom>
    </Wrapper>
  );
};

export default Room;
