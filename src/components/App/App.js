import React, { useState } from 'react';
import s from './App.scss';
import AddComment from '../AddComment/AddComment';
import FeedComments from '../FeedComments/FeedComments';
import axios from 'axios';

function App() {
  const [comments, setComments] = useState([]);

  const addComment = async ({ author, comment }) => {
    await axios.post('/addcomment', { author, comment });
    await updateCommentsFeed();
  };

  const updateCommentsFeed = async () => {
    const { data: comments } = await axios.get('/comments');
    setComments(comments);
  };

  return (
    <div className={s.root}>
      <AddComment />
      <FeedComments
        comments={comments}
        onAddedComment={({ author, comment }) =>
          addComment({ author, comment })
        }
      />
    </div>
  );
}

export default App;
