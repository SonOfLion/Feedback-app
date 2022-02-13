import React, { useState } from 'react';

import FeedbackData from './data/FeedbackData';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';

import './App.css';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedBack = (id) => {
    if (window.confirm('Are you sure you want to delete ?')) {
      setFeedback(feedback.filter((item) => item.id !== id ));
    }
  };

  return (
    <>
      <Header text={'Hello world!'} />
      <div className='container'>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedBack} />
      </div>
    </>
  );
}

export default App;
