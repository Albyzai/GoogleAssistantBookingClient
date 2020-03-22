import React from 'react';
import styled from 'styled-components';
import Floor from './../Floor/Floor';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  background: lightblue;
`;

const Header = styled.div`
  padding: 10px;
  border-bottom: 1px solid #000;
  p {
    margin: 0;
  }
`;

const StyledBuilding = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 400px;
  min-width: 230px;
`;

const Building = ({ building, onRoomClickhandler }) => {

  const clickHandler = (floorId, roomId) => {
    onRoomClickhandler(building._id, floorId, roomId)
  }
  return (
    <Wrapper>
      <Header>
        <p>{building.name}</p>
      </Header>
      <StyledBuilding>
        {building.floors.map((floor) => (
          <Floor floor={floor} parentbuilding={building} key={floor._id} onRoomClickhandler={clickHandler} />
        ))}
      </StyledBuilding>
    </Wrapper>
  );
};

export default Building;
