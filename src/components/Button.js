import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, color }) => {
  return (
    <button style={{ backgroundColor: color }} className='btn'>
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: 'steelblue',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Button;
