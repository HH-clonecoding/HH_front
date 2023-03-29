import React, { useState } from 'react'
import styled from 'styled-components';
import Products from './Products';

function SelectRoom({hotel}) {

  return (
    <SelectRoomContainer>
      <Products />
    </SelectRoomContainer>
  )
}

export default SelectRoom;

const SelectRoomContainer = styled.div`
    width: 100%;
`