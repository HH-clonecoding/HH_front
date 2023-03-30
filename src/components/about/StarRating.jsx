import React from 'react'
import uuid from 'react-uuid';
import styled from 'styled-components';
import { publicPath } from '../../customValues/pubVariables';
import { HFlex } from '../../customValues/styleStore';

function StarRating({starRate, voteCount}) {

    const stars = Math.floor(starRate);
    const halfStar = Math.floor((starRate%1) > 0 ? true : false);
    const arr = [];

    for(let i = 0 ; i < stars ; i++){
        arr.push(true);
    }

    if (halfStar) {
        arr.push(false);
    }

    return (
        <HFlex height='16px' etc='font-size : 16px'>
            {
            arr.map((element) => {
                if(element){
                    return <Star src={publicPath+'/img/star.png'} key={uuid()}/>;
                } else {
                    return <Star src={`${publicPath}/img/halfstar.png`} key={uuid()}/>;
                }
            })
            }
            <StRate>{starRate.toFixed(1)}</StRate>
            <span>{`(${voteCount})`}</span>
            <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMuMjQ1IDkuOTZsLjg4NS44NTQgNC45NS00Ljc4LTQuOTUtNC43NzktLjg4NS44NTVMNy4zMSA2LjAzNCAzLjI0NSA5Ljk2eiIgZmlsbD0iIzYxNjE2MSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+' />
        </HFlex>
    );
}

export default StarRating;

const Star = styled.img`
    height: 100%;
    filter : invert(65%) sepia(60%) saturate(563%) hue-rotate(3deg) brightness(96%) contrast(94%);
`;

const StRate = styled.span`
    padding: 0px;
    margin: 0px;
    margin-left: 5px;
    font-weight: 500;
`;
