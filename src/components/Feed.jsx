import React from 'react';
import TweetList from './TweetList';
import NewTweet from './NewTweet';

function Feed(){

  let styling = {


  }
  return (
    <div>
      <style jsx>{`
        div{
          border: 1px solid black;
          margin: 5px;
          background-color: red;
        }
      `}</style>
      <NewTweet img="https://picsum.photos/60/60"/><TweetList/>
    </div>
  );
}

export default Feed;
