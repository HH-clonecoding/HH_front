import React from 'react'
import { PAGE_BACKGROUND_COLOR } from '../../../customValues/pubVariables';
import { VFlex } from '../../../customValues/styleStore';
import CommentList from '../../comments/CommentList';
import Summary from '../../comments/Summary';

const Comments = () => {
  return (
    <div style={{marginTop:'1px',backgroundColor:`${PAGE_BACKGROUND_COLOR}`}}>
      <VFlex>
        <Summary />
        <CommentList />
      </VFlex>
    </div>
  )
}

export default Comments;

