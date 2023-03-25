import React from 'react'
import styled from 'styled-components';
import { HFlex } from '../../customValues/styleStore';

function BuildingLocation() {
  return (
    <HFlex>
        <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggMS4zMzNBNC42NjMgNC42NjMgMCAwMTEyLjY2NyA2QzEyLjY2NyA5LjUgOCAxNC42NjcgOCAxNC42NjdsLS4yNzUtLjMxNmMtMS0xLjE3My00LjM5Mi01LjM2Ny00LjM5Mi04LjM1MUE0LjY2MyA0LjY2MyAwIDAxOCAxLjMzM3ptMCAxLjMzNEEzLjMzNSAzLjMzNSAwIDAwNC42NjcgNmMwIDEuOSAxLjk0NiA0LjgwNyAzLjMzMyA2LjU4N2wuMjgtLjM2YzEuMzczLTEuOCAzLjA1My00LjQzIDMuMDUzLTYuMjI3QTMuMzM1IDMuMzM1IDAgMDA4IDIuNjY3em0wIDEuNjY2YTEuNjY3IDEuNjY3IDAgMTEwIDMuMzM0IDEuNjY3IDEuNjY3IDAgMDEwLTMuMzM0eiIgZmlsbD0iIzAxNTJDQyIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+' />
        <StSpan>~~역 도보 5분</StSpan>
    </HFlex>
  )
}

export default BuildingLocation;

const StSpan = styled.span`
    font-size: 12px;
    color : #0152cc;
    font-weight: 400;
`