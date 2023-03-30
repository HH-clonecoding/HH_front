import React from 'react'
import uuid from 'react-uuid';
import styled from 'styled-components';
import { TEXT_COLOR } from '../../customValues/pubVariables';
import { HFlex, HFlexSpaceBetween, VFlex } from '../../customValues/styleStore';

const CommentBox = ({comment}) => {
    
    const rate = comment.rate;
    const arr = [0,0,0,0,0];

    const edittedDate = comment.createDate.split('T')[0].replace(/-/g,'.');
    
    return (
        <BoxContainer>
            <VFlex gap='15px'>
                <HFlex gap='10px'>
                    <InlineImage src="https://yaimg.yanolja.com/stay/static/images/ic-rate-emoji-5.svg" />
                    <VFlex gap='0px'>
                        <HFlexSpaceBetween>
                            <StarRate>
                                {arr.fill(1,0,rate).map((element) => {
                                    return element
                                    ? <InlineImage key={uuid()} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTguMTIgMEw1LjQ0MiA1LjAyOCAwIDYuMTEybDMuNzkgNC4xOTEtLjY4OSA1LjY5OCA1LjAxOC0yLjQzOSA1LjAxOCAyLjQ0LS42ODgtNS42OTkgMy43OS00LjE5LTUuNDQ0LTEuMDg1eiIgZmlsbD0iI0ZGQ0QzNCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" />
                                    : <InlineImage key={uuid()} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTguODgxIDBMNi4yMDUgNS4wMjguNzYyIDYuMTEybDMuNzkgNC4xOTEtLjY4OSA1LjY5OCA1LjAxOC0yLjQzOSA1LjAxOCAyLjQ0LS42ODgtNS42OTlMMTcgNi4xMTNsLTUuNDQzLTEuMDg1eiIgZmlsbD0iI0U2RTZFNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" />
                                })}
                            </StarRate>
                            <ButtonDot>
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzkxOTE5MSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIzLjMzMyIgY3k9IjEwIiByPSIxLjY2NyIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEuNjY3Ii8+PGNpcmNsZSBjeD0iMTYuNjY3IiBjeT0iMTAiIHI9IjEuNjY3Ii8+PC9nPjwvc3ZnPg==" />
                            </ButtonDot>
                        </HFlexSpaceBetween>
                        <div style={{ fontSize: '14px', color : 'rgb(97, 97, 97)'}}>
                            <span>{comment.nickname}</span>
                            <span>{' | '}</span>
                            <span> {edittedDate} </span>
                        </div>
                    </VFlex>
                </HFlex>
                <HFlex gap='15px'>
                    <RoomNameLabel>객실명</RoomNameLabel>
                    <RoomName>{comment.stayedroom}</RoomName>
                </HFlex>
                <TextBox>{comment.comment}</TextBox>
            </VFlex>
        </BoxContainer>
    )
}

export default CommentBox;

const TextBox = styled.div`
    white-space: pre-line;
    font-size: 14px;
    color : rgb(97, 97, 97);
    margin-bottom: 30px;
`

const RoomName = styled.div`
    width:100%;
    background-color: rgb(245, 245, 245);
    color : rgb(97, 97, 97);
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
`

const RoomNameLabel = styled.span`
    min-width: fit-content;
    height: 10px;
    background-color: rgb(230, 230, 230);
    padding : 2px 5px;
    border-radius: 2px;
`

const InlineImage = styled.img`
    display: inline-block;
`

const ButtonDot = styled.button`
    cursor: pointer;
    background-color: transparent;
    border:none;
`

const StarRate = styled.div`
    
`

const BoxContainer = styled.div`
    background-color: white;
    padding: 15px 20px;
    color : ${TEXT_COLOR};
`

const RateAndWriter = styled.div`
    width:100%;
`