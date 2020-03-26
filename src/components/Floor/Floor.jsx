import React from 'react';
import styled from 'styled-components';
import Room from './../Room/Room';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;
const Header = styled.div`
  color: #000;
  font-weight: 400;
  padding-bottom: 10px;

  p {
    margin: 0;
  }
`;
const StyledFloor = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(34,36,38,.15);
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
