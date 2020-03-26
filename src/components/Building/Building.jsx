import React from 'react';
import styled from 'styled-components';
import Floor from './../Floor/Floor';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 1px 10px rgba(0,0,0,0.05), 0 1px 12px rgba(0,0,0,0.1);
  margin: 10px 0;
  padding: 15px;
`;

const Header = styled.div`
  
  border-bottom: 1px solid rgba(34,36,38,.15);
  font-weight: 900;
  padding-bottom: 10px;
  p {
    margin: 0;
  }
`;

const StyledBuilding = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 400px;
  min-width: 265px;
  
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
