import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Building from '../components/Building/Building';
import ReservationTable from '../components/Reservation/ReservationTable'
import axios from 'axios'
import { act } from 'react-dom/test-utils';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 80%;
  margin: 100px auto;
`;


const ReservationsWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 100px auto;
`
const MainLayout = () => {
  const [buildings, setBuildings] = useState([]);
  // const [activeRoom, setActiveRoom] = useState()
  const [activeRoom, setActiveRoom] = useState()

  const fetchBuildings = async () => {
    // const apiCall = await fetch('https://googleassistantbookingapi.azurewebsites.net/api/buildings');
    const buildingsArray = await axios.get('https://googleassistantbookingapi.azurewebsites.net//api/buildings').then(res => res.data)
    setBuildings(buildingsArray);
  };

  const setActiveRoomHandler = (buildingId, floorId, roomId) => {
    // setActiveRoom(id)

    // onRoomClickhandler(building._id, floor._id, roomId)

    const building = buildings.find(building => building._id === buildingId)
    const floor = building.floors.find(floor => floor._id === floorId)
    const room = floor.rooms.find(room => room._id === roomId)
    console.log('building: ', building)
    console.log('floor: ', floor)
    console.log('room: ', room)
    setActiveRoom(room)
  }

  useEffect(() => {
    fetchBuildings();
  }, []);

  return (
    <>
    <MainWrapper>
      {buildings.map((building) => {
        return (
          <Building
            onRoomClickhandler={setActiveRoomHandler}
            building={building}
            key={building.name}
          />
        );
      })}
    </MainWrapper>
    {activeRoom ? (
      <ReservationsWrapper >
        <ReservationTable room={activeRoom} />

      </ReservationsWrapper>
    ) : null}
    
    </>
  );
};

export default MainLayout;
