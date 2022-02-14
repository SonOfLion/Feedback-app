import React from 'react';
import PropsTypes from 'prop-types';

function Button({ children, version, type, isDisabled }) {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isRequired: false,
};

Button.propTypes = {
  children: PropsTypes.node.isRequired,
  version: PropsTypes.string,
  type: PropsTypes.string,
  isRequired: PropsTypes.bool,
};

export default Button;