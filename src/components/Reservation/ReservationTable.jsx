import React from 'react'
import styled from 'styled-components'
import Reservation from './Reservation'

const StyledList = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-bottom: 50px;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const ReservationTable = ({ room, className }) =>  {

  const reservations = room.reservations.map(res => <Reservation data={res} />)
  return (
    <Wrapper>
    <h3>Reservations for  {room.name}</h3>
    <StyledList>
      { reservations ? reservations : <p>There are no reservations for this room, be the first!</p>}
    </StyledList>
    </Wrapper>
  )
}

export default ReservationTable