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

const Building = ({ name, floors }) => {
  console.log('building name: ', name);
  return (
    <Wrapper>
      <Header>
        <p>{name}</p>
      </Header>
      <StyledBuilding>
        {floors.map((floor) => (
          <Floor rooms={floor.rooms} name={floor.name} key={floor.name} />
        ))}
      </StyledBuilding>
    </Wrapper>
  );
};

export default Building;
