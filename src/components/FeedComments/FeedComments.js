import React from 'react';
import CommentItem from '../CommentItem/CommentItem';

function FeedComments({comments}) {

  return (
    <div>
      {comments.map((comment, index) => (
        <CommentItem key={index} {...comment} />
      ))}
    </div>
  );
}


export default FeedComments;
