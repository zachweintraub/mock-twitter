import React from 'react';
import PropTypes from 'prop-types';


function Stats(props){
  let styling = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
  }

  return(
    <div style={styling}>
      <div><p>Tweets</p>{props.tweets}</div>
      <div><p>Following</p>{props.following}</div>
      <div><p>Followers</p>{props.followers}</div>
    </div>
  );
}

Stats.propTypes = {
  tweets: PropTypes.string.isRequired,
  following: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired
}

export default Stats;
