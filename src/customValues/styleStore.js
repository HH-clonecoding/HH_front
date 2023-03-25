import styled from "styled-components";


export const HFlex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width : ${({width})=>width? width : '100%'};
    height : ${({height})=>height? height : '100%'};
    gap : ${({gap}) => gap ? gap : null};
    ${({etc}) => etc};
`;

export const HFlexSpaceBetween = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width : ${({width})=>width? width : '100%'};
    height : ${({height})=>height? height : 'fit'};
    gap : ${({gap}) => gap ? gap : null};
    ${({etc}) => etc};
`;

export const VFlex = styled.div`
    display: flex;
    flex-direction: column;
    width : ${({width})=>width? width : '100%'};
    height : ${({height})=>height? height : '100%'};
    gap : ${({gap}) => gap ? gap : null};
    ${({etc}) => etc};
`;

export const VFlexCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width : ${({width})=>width? width : '100%'};
    height : ${({height})=>height? height : '100%'};
    gap : ${({gap}) => gap ? gap : null};
    ${({etc}) => etc};
`;