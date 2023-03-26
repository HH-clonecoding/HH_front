import React from 'react'
import styled from 'styled-components';
import { HFlex } from '../../../customValues/styleStore';

function SearchBar() {
    return (
        <SearchBarContainer>
            <ButtonGroup>
                <HFlex width='100%'>
                    <ButtonPeriod>
                        <HFlex width='50%' etc='min-width:50%;'>
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDEuMzMzaDEuMzMzdjEuMzM0aDEuMzM0QzEzLjQwMyAyLjY2NyAxNCAzLjI2NCAxNCA0djkuMzMzYzAgLjczNy0uNTk3IDEuMzM0LTEuMzMzIDEuMzM0SDMuMzMzQTEuMzMzIDEuMzMzIDAgMDEyIDEzLjMzM1Y0YzAtLjczNi41OTctMS4zMzMgMS4zMzMtMS4zMzNoMS4zMzRWMS4zMzNINnYxLjMzNGg0VjEuMzMzem0yLjY2NyA1LjMzNEgzLjMzM3Y2LjY2Nmg5LjMzNFY2LjY2N3pNNiA4djEuMzMzSDQuNjY3VjhINnptMi42NjcgMHYxLjMzM0g3LjMzM1Y4aDEuMzM0em0yLjY2NiAwdjEuMzMzSDEwVjhoMS4zMzN6bTEuMzM0LTRIMy4zMzN2MS4zMzNoOS4zMzRWNHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" />
                            <StSpan>04.15 (금) ~ 04.15 (토) · 1박</StSpan>
                        </HFlex>
                    </ButtonPeriod>
                    <ButtonMember>
                        <HFlex width='50%' etc='min-width:50%;'>
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggOWMxLjkyNyAwIDMuNjgxLjYwOCA0Ljk5IDEuNjAzbC4xNzYuMTM4Yy41MDYuMzc3LjgzNC45OC44MzQgMS42NTl2MS45MzNIMlYxMi40YzAtLjY3LjMxOC0xLjI2NC44MTEtMS42NDJsLS4xMzYuMTE2LjE1NS0uMTNDNC4xNTYgOS42NjYgNS45ODMgOSA4IDl6bTAgMS4zMzNjLTEuNzMgMC0zLjMyOS41NzctNC40NTkgMS41NTVhLjcyOC43MjggMCAwMC0uMjA4LjUxMnYuNmg5LjMzNHYtLjZjMC0uMjM2LS4xMS0uNDUtLjM0Mi0uNjI0LTEuMTIzLS45MTItMi42NjUtMS40NDMtNC4zMjUtMS40NDN6bTAtOC42NjZhMy4zMzIgMy4zMzIgMCAxMTAgNi42NjYgMy4zMzIgMy4zMzIgMCAxMTAtNi42NjZ6TTggM2MtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=" />
                            <StSpan>성인 2, 유/아동 0</StSpan>
                        </HFlex>
                    </ButtonMember>
                </HFlex>
            </ButtonGroup>
        </SearchBarContainer>
    )
}

export default SearchBar;

const StSpan = styled.span`
    font-size : 12px;
    font-weight: 600;
    margin-left: 5px;
`
const SearchBarContainer = styled.div`
    width: 100%;
    padding : 15px;
    box-sizing: border-box;
    margin-bottom: 1px;
    background-color: white;
`

const ButtonGroup = styled.div`
    width: 100%;
    border-radius: 5px;
    border : 1px solid gray;
    box-sizing: border-box;
`

const ButtonPeriod = styled.button`
    cursor: pointer;
    width: 50%;
    border : none;
    background-color: transparent;
    padding : 10px;
    border-right : 1px solid gray;
`

const ButtonMember = styled.button`
    cursor: pointer;
    width: 50%;
    border : none;
    background-color: transparent;
    padding : 10px;
`