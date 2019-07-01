import React from 'react';
import PropTypes from 'prop-types';


function About(props) {


  let styling = {
    border: '2px solid black',
    margin: '5px',
    padding: '5px'
  }
  return(
    <div style={styling}>{props.text}</div>
  );
}

About.propTypes = {
  text: PropTypes.string.isRequired
}

export default About;
