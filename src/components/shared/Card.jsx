import React from 'react';
import PropsTypes from 'prop-types';

function Card({ children, reverse }) {
  return (
    <div
      className='card'
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000'
    }}
    >{children}</div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropsTypes.node.isRequired,
  reverse: PropsTypes.bool,
}

export default Card;
