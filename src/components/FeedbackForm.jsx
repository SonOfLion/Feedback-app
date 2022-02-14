import React, { useState } from 'react';

import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from "./RatingSelect";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState('');
  const [btnDisabled, setIsBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  const handleTextChange = (e) => {
    if (text === '') {
      setIsBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setIsBtnDisabled(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setMessage(null);
      setIsBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      }
      handleAdd(newFeedback);
      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate you're service with us ?</h2>
        <RatingSelect select={(rating) => setRating(rating)} selected={rating} />
        <div className='input-group'>
          <input value={text} onChange={handleTextChange} type='text' placeholder='Write a review' />
          <Button type='submit' version='secondary' isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && (<div className='message'>{message}</div>)}
      </form>
    </Card>
  );
}

export default FeedbackForm;