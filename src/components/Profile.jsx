import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';

function Profile(props){
  let styling = {
    border: '2px solid black',
    height: '380px'
  }

  let nameStyling = {
    color: 'black',
    marginTop: '0px'
  }

  let imgStyling = {
    transform: 'translateY(-50%)',
    borderRadius: '50px'
  }
  let bgStyling = {
    backgroundImage: `url(${props.bgImg})`,
    height: '50%'
  }
  return(

    <div style={styling}>
      <div style ={bgStyling}>
      </div>

      <img style={imgStyling} src={props.img}/>
      <p style={nameStyling}>{props.name}</p>
      <Stats tweets="15.6K" following="614K" followers="107M" />
    </div>

  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  bgImg:PropTypes.string.isRequired
}

export default Profile;
