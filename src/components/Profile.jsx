import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';

function Profile(props){
  let styling = {
    border: '2px solid black',
    height: '350px',
    margin: '5px'
  }

  let nameStyling = {
    color: 'black',
    marginTop: '0px'
  }

  let imgStyling = {
    borderRadius: '50px'
  }
  let bgStyling = {
    backgroundImage: `url(${props.bgImg})`,
    height: '50%'
  }

  let contentStyling = {
    transform: 'translateY(-20%)',
    padding: '10px'
  }
  return(

    <div style={styling}>
      <div style ={bgStyling}></div>
      <div style={contentStyling}>
        <img style={imgStyling} src={props.img}/>
        <p style={nameStyling}>{props.name}</p>
        <Stats tweets="15.6K" following="614K" followers="107M" />
      </div>
    </div>

  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  bgImg:PropTypes.string.isRequired
}

export default Profile;
