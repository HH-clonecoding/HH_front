import React from 'react'
import { VFlex } from '../../customValues/styleStore';
import CommentBox from './CommentBox';
import uuid from 'react-uuid';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { apis } from '../../axios/apis';

const CommentList = () => {

    const params = useParams();
    
    const { data, isLoading, isError } =useQuery({
        queryKey : ["getComments"],
        queryFn : async () => {
            const response = await apis.get(`/api/place/rooms/${params.id}/comments`);
            return response.data;
        },
    });


    return (
        <VFlex gap='1px' etc='margin-top:1px;'>
            {data?.comments.map((element) => <CommentBox key={uuid()} comment={element}/>)}
        </VFlex>
    )
}

export default CommentList;
