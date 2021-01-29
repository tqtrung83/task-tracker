import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log('Ok');
  };

  return (
    <div className='header'>
      <h1>{title}</h1>
      <Button color={'green'} text={'Add'} onClick={onClick} />
    </div>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
