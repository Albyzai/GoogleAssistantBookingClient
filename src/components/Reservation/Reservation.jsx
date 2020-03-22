import React from 'react'
import styled from 'styled-components'

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-top: 1px solid rgba(34,36,38,.15);

`

const DateWrapper = styled.div`
  margin-right: 50px;
`

const Reservation = ( {data, classname} ) =>  {

  const startDate = new Date(data.startTime).toDateString()
  const endDate = new Date(data.endTime).toDateString()

  return (
    <StyledItem className='reservation-item'>
      {/* <DateWrapper>
        {startDate.}
      </DateWrapper> */}
      {startDate}
       - 
      {endDate}
    </StyledItem>
  )
}

export default Reservation