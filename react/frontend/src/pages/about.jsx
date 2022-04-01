import React from 'react';
import '../media/styles/about.css';
import { Component } from 'react';
import CardList from '../components/card-list/card-list.component';
import SearchBox from '../components/search-box/search-box.component';
import Hero from '../components/Hero';
import '../media/styles/about.css';


class About extends Component {
  constructor() {
    super();

    this.state = {
      avatars: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { avatars: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  

  render() {
    // destructure from state and cast to variables so that 'this' keyword can be removed from following code
    const { avatars, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredAvatarNames = avatars.filter((avatarName) => {
      return avatarName.name.toLowerCase().includes(searchField);
    });

    return (
      <>
        <Hero />

        <h1> API PRACTICES</h1>

        <div className="Blogs">
          <SearchBox className="search-box" onChangeHandler={onSearchChange} placeholder="Find Friends" />
          <CardList avatars={filteredAvatarNames} />
        </div>
      </>
    );
  }
}



export default About;
