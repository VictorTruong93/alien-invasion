import React from 'react';
import PropTypes from 'prop-types';
import Canvas from './components/Canvas';

class App extends React.Component {

  render() {
    return (
      <Canvas/>
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;
