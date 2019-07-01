import React from 'react';
import PropTypes from 'prop-types';


function NewTweet(props){

  let styling = {
    borderRadius: '50px'
  }

  let stylingTweet = {
    borderBottom: '1px solid black',
    display: 'grid',
    gridTemplateColumns: '1fr 15fr',
    padding: '5px'
  }
  return (
    <div style = {stylingTweet}>
      <img style={styling} src = {props.img}/>
      <input type="text" placeholder="What's happening?"/>
    </div>
  )
}

NewTweet.propTypes = {
  img: PropTypes.string.isRequired
}

export default NewTweet;
