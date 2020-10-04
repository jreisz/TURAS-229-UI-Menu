import React from 'react';
import './Landing.css';

const background = require('../../../public/static/img/background.png');
const background2x = require('../../../public/static/img/background@2x.png');
const background3x = require('../../../public/static/img/background@3x.png');
const journey = require('../../../public/static/img/journey.png');
class Landing extends React.Component {

  componentDidMount() {
    document.title = process.env.REACT_APP_APP_TITLE;
  }

  render() {
    return (
      <>
        <img src={journey} className="img-journey" alt="journey" />
        <p className="p-title">Turas</p>
        <p className="p-subtitle">Plan the next greatest adventure</p>
        <p className="p-footer">Set and achieve planning goals allin one place</p>
        <input className="btn-enter" type="button" value="Enter" />        
      </>
    )
  }
}

export default Landing;
