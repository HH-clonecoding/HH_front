import { useQuery } from '@tanstack/react-query';
import React from 'react'
import uuid from 'react-uuid';
import styled from 'styled-components';
import { PAGE_BACKGROUND_COLOR } from '../../../customValues/pubVariables';
import { HFlex } from '../../../customValues/styleStore';
import ProductBox from './ProductBox';
import {apis} from '../../../axios/apis'
import { useParams } from 'react-router-dom';

function Products() {

    const params = useParams();

    const {data} = useQuery({
        queryKey : ["selectRoom"],
        queryFn : async () => {
            const response = await apis.get(`/api/place/rooms/${params.id}`);
            return response.data;
        },
    });

    return (
        <ProductsContainer>
            <HFlex gap='1px' etc='flex-wrap:wrap;'>
                {data?.roomdetail.map((element) => <ProductBox element={element} key={uuid()} />)}
            </HFlex>
        </ProductsContainer>
    );

}

export default Products;

const ProductsContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    background-color: ${PAGE_BACKGROUND_COLOR};
`