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
  justify-content: space-evenly;
  padding: 10px;
`;

const Floor = ({ floor, onRoomClickhandler }) => {

  const clickHandler = (roomId) => {
    onRoomClickhandler(floor._id, roomId)
  }
  
  return (
    <Wrapper>
      <Header>
        <p>{floor.name}</p>
      </Header>
      <StyledFloor>
        {floor.rooms.map((room) => (
          <Room key={room._id} room={room} parentFloor={floor} onRoomClickhandler={clickHandler} />
        ))}
      </StyledFloor>
    </Wrapper>
  );
};

export default Floor;
