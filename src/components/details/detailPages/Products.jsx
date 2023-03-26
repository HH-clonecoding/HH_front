import React from 'react'
import styled from 'styled-components';
import { PAGE_BACKGROUND_COLOR } from '../../../customValues/pubVariables';
import { HFlex } from '../../../customValues/styleStore';
import ProductBox from './ProductBox';

function Products() {

    const sampleArray = [1, 2, 3, 4, 5, 6, 7];

    return (
        <ProductsContainer>
            <HFlex gap='1px' etc='flex-wrap:wrap;'>
                {sampleArray.map((element) => <ProductBox element={element} />)}
            </HFlex>
        </ProductsContainer>
    )
}

export default Products;


const ProductsContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    background-color: ${PAGE_BACKGROUND_COLOR};
`