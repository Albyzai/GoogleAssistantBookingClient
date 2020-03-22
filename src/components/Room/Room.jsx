import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.isVacant ? 'green' : 'red'};
  color: ${props => props.isVacant ? '#fff': '#000'}
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px;
`;

const StyledRoom = styled.div`
  display: flex;
  flex-direction: row;
  
  
`;

const Room = ({ room, parentFloor, onRoomClickhandler }) => {

  const onClickHandler = () => {
    onRoomClickhandler(room._id)
    console.log(`room with id: ${room._id} has been clicked`)
  }

  return (
    <Wrapper onClick={onClickHandler} isVacant={room.vacant}>
      <StyledRoom>
        <h5>{room.name}</h5>
      </StyledRoom>
    </Wrapper>
  );
};

export default Room;
