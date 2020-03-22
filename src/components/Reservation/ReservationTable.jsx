import React from 'react'
import styled from 'styled-components'
import Reservation from './Reservation'

const StyledList = styled.div`
width: 100%;
display: flex;
flex-direction: column;



`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const ReservationTable = ({ room, className }) =>  {

  return (
    <Wrapper>
    <h3>Reservations for  {room.name}</h3>
    <StyledList>
      {room.reservations.map(reservation => (<Reservation data={reservation} />))}
    </StyledList>
    </Wrapper>
      
  )
}

export default ReservationTable