import React from 'react';
import Header from './Header';
import Profile from './Profile';
import About from './About';
import Feed from './Feed';
import SuggestionBox from './SuggestionBox';

function App(){
  return <div><Header/><Profile name= 'Barack Obama' img='https://picsum.photos/80/80' bgImg='https://picsum.photos/200/300'/><About text ='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni'/><Feed/><SuggestionBox/></div>
    ;
}

export default App;
