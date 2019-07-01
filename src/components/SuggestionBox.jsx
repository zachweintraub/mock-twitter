import React from 'react';
import SuggestionList from './SuggestionList';


function SuggestionBox(){

  let styling = {
    border: '1px solid black',
    margin: '5px'
  }
  return (
    <div style ={styling}>
      <h3>Who to follow?</h3>
      <SuggestionList/>
    </div>
  );
}

export default SuggestionBox;
