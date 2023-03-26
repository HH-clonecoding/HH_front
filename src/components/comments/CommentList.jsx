import React from 'react'
import { VFlex } from '../../customValues/styleStore';
import CommentBox from './CommentBox';
import uuid from 'react-uuid';

const CommentList = () => {

    const sampleArr = [1,2,3,4,5,6,7,8,9];

    return (
        <VFlex gap='1px' etc='margin-top:1px;'>
            {sampleArr.map((element) => <CommentBox key={uuid()} />)}
        </VFlex>
    )
}

export default CommentList;
