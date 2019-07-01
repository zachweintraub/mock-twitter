import React from 'react';
import PropTypes from 'prop-types';


function Suggestion(props){
  let styling = {
    borderRadius: '50px'
  }

  let stylingSuggestion = {
    borderBottom: '1px solid black',
    display: 'grid',
    gridTemplateColumns: '1fr 15fr',
    padding: '5px'
  }

  return(
    <div style = {stylingSuggestion}>
      <img style = {styling} src = {props.img}/>
      <div>
        <h4>{props.name}</h4>
        <button>Follow</button>
      </div>
    </div>
  );
}


Suggestion.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Suggestion;
