import React from 'react';
import { FaTimes } from 'react-icons/fa';
import PropsTypes from 'prop-types';

import Card from './shared/Card';

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className='num-display'>{item?.rating}</div>
        <button className='close' onClick={() => handleDelete(item.id)}>
          <FaTimes color={'purple'} />
        </button>
      <div className='text-display'>{item?.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropsTypes.object.isRequired,
}

export default FeedbackItem;