import dataHooks from '../../../constants';
import React from 'react';

const CommentItem = ({ author, comment }) => {
  return (
    <div data-testid={dataHooks.commentItem}>
      <p data-testid={dataHooks.author}>{author}</p>
      <p data-testid={dataHooks.comment}>{comment}</p>
    </div>
  );
};

export default CommentItem;
