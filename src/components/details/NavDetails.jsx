import React from 'react'
import styled from 'styled-components';
import SelectRoom from './SelectRoom';

function NavDetails({ select }) {

    console.log(select);

    const switchContents = () => {
        switch(select) {
            case "1":
                return <SelectRoom />;
            case "2":
                return <></>;
            case "3":
                return <></>;
            case "4":
                return <></>;
            case "5":
                return <></>;
            default:
                return null;
        }
    }

    return (
        <DetailContainer>
            {switchContents}
        </DetailContainer>
    )
}

export default NavDetails;

const DetailContainer = styled.div`
    width: 100%;
`