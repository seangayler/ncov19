import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  state = {

  }
  
  render() {
    return (
      <div className="Home">
        <div className="Home__starter">
          <h1 className="Home__starter__heading">COVID-2019 Statistics & Data Visualisation</h1>
          <form className="Home-form">
            <label className="Home-form__label">Filter by Country</label>
            <div className="Home-form__input-container">
              <input className="Home-form__input" placeholder="Enter country name here" type="text"/>
              <input className="Home-form__submit" type="submit" value="Search"/>
            </div>
          </form>
        </div>
        <div className="Home-data">
          <h2 className="Home-data__heading">Global Data</h2>
        </div>
      </div>
    );
  }
}

export default Home;

