import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

const Header = ({ title, toggleAddTask, showAddTask }) => {
  return (
    <div className='header'>
      <h1>{title}</h1>
      <Button
        color={showAddTask ? 'black' : 'green'}
        text={showAddTask ? 'Close' : 'Add'}
        onClick={toggleAddTask}
      />
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
