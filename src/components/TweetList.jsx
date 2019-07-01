import React from 'react';
import Tweet from './Tweet';

function TweetList() {
  let masterTweetList = [
    {
      name: 'Michelle Obama',
      message: 'twitter is so fun. what do you guys think?',
      img: 'https://picsum.photos/80/80'
    },
    {
      name: 'Michelle Obama',
      message: 'i do not like twitter. why do you guys use it?',
      img: 'https://picsum.photos/80/80'
    },
    {
      name: 'Michelle Obama',
      message: 'i am new to twitter. is it cool?',
      img: 'https://picsum.photos/80/80'
    }
  ]
  return(
    <div>
  
        {masterTweetList.map((tweet, index)=>
        <Tweet name={tweet.name}
              message={tweet.message}
              img={tweet.img}
              key={index}/>
          )}
    </div>
  );
}

export default TweetList;
