import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.isVacant ? '#39fa73' : '#ff5c40'};
  color: ${props => props.isVacant ? '#000': '#000'};
  border-radius: 10px;
  padding: 10px;
  font-weight: 100;
  height: 50px;
  width: 50px;
  line-height: 50px;
  font-size: .8em;
  text-align: center;
  &:hover {
    box-shadow: 0 1px 10px rgba(0,0,0,0.05), 0 1px 12px rgba(0,0,0,0.1);
  }
`;

const StyledRoom = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  user-select: none;
  text-align: center;
  justify-content: center;
  align-items: center;
  
  
`;

const Room = ({ room, parentFloor, onRoomClickhandler }) => {

  const onClickHandler = () => {
    onRoomClickhandler(room._id)
    console.log(`room with id: ${room._id} has been clicked`)
  }

  return (
    <Wrapper onClick={onClickHandler} isVacant={room.vacant}>
      <StyledRoom>
        {room.name}
      </StyledRoom>
    </Wrapper>
  );
};

export default Room;
