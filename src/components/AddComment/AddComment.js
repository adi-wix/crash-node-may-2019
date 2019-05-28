import React, { useState } from 'react';
import dataHooks from '../../../constants';
import axios from 'axios';

function AddComment() {
  const [author, setAuthor] = useState();
  const [comment, setComment] = useState();

  const addCommentClicked = async e => {
    await axios.post('/addcomment', { author, comment });
  };

  const onAuthorChanged = e => {
    setAuthor(e.target.value);
  };

  const onCommentChanged = e => {
    setComment(e.target.value);
  };

  return (
    <div>
      <input onChange={onAuthorChanged} data-testid={dataHooks.authorInput} />
      <input onChange={onCommentChanged} data-testid={dataHooks.commentInput} />
      <button onClick={addCommentClicked} data-testid={dataHooks.addButton} />
    </div>
  );
}

export default AddComment;
