import React from 'react'
import styled from 'styled-components';
import SelectRoom from './detailPages/SelectRoom';
import Traffic from './detailPages/Traffic';
import Comments from './detailPages/Comments';

function NavDetails({ select }) {

    return (
        <DetailContainer>
            {(() => {
                switch(select) {
                    case "1":
                        return <SelectRoom/>;
                    case "2":
                        return <Traffic />;
                    case "5":
                        return <Comments />;
                    default:
                        return null;
                }
            })()}
        </DetailContainer>
    )
}

export default NavDetails;

const DetailContainer = styled.div`
    width: 100%;
`