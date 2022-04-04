import React from 'react';
import { Component } from 'react';
import Hero from '../components/Hero';
import CardList from '../components/card-list/card-list.component';
import SearchBox from '../components/search-box/search-box.component';
import ImageBlockCard from '../components/ImageBlockCard/ImageBlockCard';
import src from '../media/CardImg.png';
import line from '../media/line.png';

class Contact extends Component {
  constructor(props) {
    super(props);
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

        <div className="Contact">
          <SearchBox className="search-box" onChangeHandler={onSearchChange} placeholder="Find Friends" />
          <CardList avatars={filteredAvatarNames} />
        </div>

        <div className="imageblock-container">
          <div className="container-center-horizontal">
              <div className="featured-content">
                <h1 className="card-title notosans-bold-white-32px">Featured API</h1>
                <img className="line" src={line} alt="" />
                <div className="card-group">
                  <ImageBlockCard avatars={filteredAvatarNames} src={src} className={'info'} />
                </div>
              </div>
            </div>
          </div>
      </>
    );
  }
}
export default Contact;
