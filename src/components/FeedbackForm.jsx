import React, { useState, useContext, useEffect } from 'react';

import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from "./RatingSelect";
import FeedbackContext from '../context/FeedBackContext';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setIsBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setIsBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit]);

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

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate you're service with us ?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
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