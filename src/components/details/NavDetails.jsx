import React from 'react'
import styled from 'styled-components';
import SelectRoom from './detailPages/SelectRoom';
import Traffic from './detailPages/Traffic';
import Policy from './detailPages/Policy';
import Services from './detailPages/Services';
import Comment from './detailPages/Comment';

function NavDetails({ select }) {

    return (
        <DetailContainer>
            {(() => {
                switch(select) {
                    case "1":
                        return <SelectRoom/>;
                    case "2":
                        return <Traffic />;
                    case "3":
                        return <Policy />;
                    case "4":
                        return <Services />;
                    case "5":
                        return <Comment />;
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