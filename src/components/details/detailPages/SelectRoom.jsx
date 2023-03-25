import React, { useState } from 'react'
import styled from 'styled-components';
import Products from './Products';
import SearchBar from './SearchBar';

function SelectRoom({hotel}) {
  const [period, setPeriod] = useState({
    startDay : '',
    endDaty : '',
  });

  const [member, setMember] = useState({
    adult : 0,
    child : 0,
  });

  const Methods = {
  }

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