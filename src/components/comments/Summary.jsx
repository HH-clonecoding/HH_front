import { useQuery } from '@tanstack/react-query';
import React from 'react'
import styled from 'styled-components';
import { HFlex, HFlexSpaceBetween, VFlex } from '../../customValues/styleStore';

const Summary = () => {

    const data = useQuery(['getDetails']).data;

    return (
        <SummaryContainer>
            <VFlex gap='15px'>
                <HFlexSpaceBetween>
                    <div><StSpan>후기</StSpan> (775)</div>
                    <HFlex width='fit-content' style={{ fontSize: '12px' }}>
                        후기정책
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuMzMzIDQuNjY3aDEuMzM0VjZINy4zMzNWNC42Njd6bTAgMi42NjZoMS4zMzR2NEg3LjMzM3YtNHptLjY2Ny02QTYuNjcgNi42NyAwIDAwMS4zMzMgOCA2LjY3IDYuNjcgMCAwMDggMTQuNjY3IDYuNjcgNi42NyAwIDAwMTQuNjY3IDggNi42NyA2LjY3IDAgMDA4IDEuMzMzem0wIDEyQTUuMzQgNS4zNCAwIDAxMi42NjcgOCA1LjM0IDUuMzQgMCAwMTggMi42NjcgNS4zNCA1LjM0IDAgMDExMy4zMzMgOCA1LjM0IDUuMzQgMCAwMTggMTMuMzMzeiIgZmlsbD0iIzYxNjE2MSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" />
                    </HFlex>
                </HFlexSpaceBetween>
                <HFlexSpaceBetween>
                    <div>
                        <VFlex gap='10px'>
                            <HFlex height='52px'>
                                <StarImg src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1IDBsLTQuOTQ0IDkuNDI4TDAgMTEuNDU5bDcuMDAxIDcuODU4TDUuNzI5IDMwbDkuMjcyLTQuNTczTDI0LjI3IDMwIDIzIDE5LjMxN2w3LTcuODU3LTEwLjA1Ni0yLjAzMnoiIGZpbGw9IiNGREJEMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" />
                                <span>
                                    <EstimatedRate>{data.star.toFixed(1)}</EstimatedRate>
                                    <TotalRate>/5</TotalRate>
                                </span>
                            </HFlex>
                            <span style={{ fontSize: '12px', color: 'gray' }}>
                                최근 12개월 누적 평점
                            </span>
                        </VFlex>
                    </div>
                </HFlexSpaceBetween>
            </VFlex>
        </SummaryContainer>
    )
}

export default Summary;

const TotalRate = styled.span`
    display: inline-block;
    color:gray;
    font-weight: 500;
    font-size: 22px;
`

const EstimatedRate = styled.span`
    display: inline-block;
    margin-left : 10px;
    color:black;
    font-weight: bold;
    font-size: 48px;
`

const StarImg = styled.img`
    display: inline-block;
    width: 34px;
    height: 34px;
`

const SummaryContainer = styled.div`
    background-color: white;
    font-size: 16px;
    padding : 15px;
`
const StSpan = styled.span`
    font-size : 16px;
    font-weight: bold;
`