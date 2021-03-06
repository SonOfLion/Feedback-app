import React, { useContext } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import PropsTypes from 'prop-types';

import FeedbackContext from '../context/FeedBackContext'
import Card from './shared/Card';

function FeedbackItem({ item }) {
  const { deleteFeedBack, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='num-display'>{item?.rating}</div>
        <button className='close' onClick={() => deleteFeedBack(item.id)}>
          <FaTimes color={'purple'} />
        </button>
      <button className='edit' onClick={() => editFeedback(item)}>
        <FaEdit color={'purple'} />
      </button>
      <div className='text-display'>{item?.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropsTypes.object.isRequired,
}

export default FeedbackItem;
