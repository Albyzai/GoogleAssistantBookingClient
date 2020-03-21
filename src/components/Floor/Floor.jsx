import React from 'react';
import styled from 'styled-components';
import Room from './../Room/Room';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: green;
  margin-bottom: 20px;
`;
const Header = styled.div`
  padding: 10px;
  border-bottom: 1px solid #000;
  color: #fff;

  p {
    margin: 0;
  }
`;
const StyledFloor = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const Floor = ({ name, rooms }) => {
  return (
    <Wrapper>
      <Header>
        <p>{name}</p>
      </Header>
      <StyledFloor>
        {rooms.map((room) => (
          <Room name={room.name} />
        ))}
      </StyledFloor>
    </Wrapper>
  );
};

export default Floor;
