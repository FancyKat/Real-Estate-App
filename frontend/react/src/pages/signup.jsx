import React, { Component, Fragment } from 'react';
import '../media/styles/about.css';
// import CardList from '../components/card-list/card-list.component';
// import SearchBox from '../components/search-box/search-box.component';
import Hero from '../components/Hero';
import '../media/styles/about.css';
import Header from '../components/Header.js';
import Home from '../components/Home.js';

class SignUp extends Component {

  render() {

    return (
      <>
        <Hero />
        <Fragment>
          <Header />
          <Home />
        </Fragment>
      </>
    );
  }
}

export default SignUp;
