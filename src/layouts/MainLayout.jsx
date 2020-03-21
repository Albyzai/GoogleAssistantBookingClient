import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Building from '../components/Building/Building';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const MainLayout = () => {
  const [buildings, setBuildings] = useState([]);

  const fetchBuildings = async () => {
    const apiCall = await fetch('https://googleassistantbookingapi.azurewebsites.net/api/buildings');
    const buildingsArray = await apiCall.json();
    setBuildings(buildingsArray);
  };

  useEffect(() => {
    fetchBuildings();
  }, []);

  return (
    <MainWrapper>
      {buildings.map((building) => {
        console.log('building in main: ', building.name);
        return (
          <Building
            floors={building.floors}
            name={building.name}
            key={building.name}
          />
        );
      })}
    </MainWrapper>
  );
};

export default MainLayout;
