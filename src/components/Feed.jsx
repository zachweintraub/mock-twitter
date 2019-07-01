import React from 'react';
import TweetList from './TweetList';
import NewTweet from './NewTweet';

function Feed(){

  let styling = {
    border: "1px solid black",

  }
  return (
    <div style={styling}>
      <NewTweet img="https://picsum.photos/60/60"/><TweetList/>
    </div>
  );
}

export default Feed;
