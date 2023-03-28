import React, { useState } from 'react'
import styled from 'styled-components';
import Products from './Products';
import SearchBar from './SearchBar';

function SelectRoom({hotel}) {

  return (
    <SelectRoomContainer>
      <SearchBar />
      <Products />
    </SelectRoomContainer>
  )
}

export default SelectRoom;

const SelectRoomContainer = styled.div`
    width: 100%;
`