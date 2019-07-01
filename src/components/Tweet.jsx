import React from 'react';
import PropTypes from 'prop-types';


function Tweet(props){

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
      <img style={styling}src = {props.img}/>
      <div>
        <h3>{props.name}</h3>
        <h4>{props.message}</h4>
      </div>
    </div>
  )
}

Tweet.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired

}

export default Tweet;
