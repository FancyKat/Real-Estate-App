import React, { Component } from 'react';
import Card from '../components/Card';
import Hero from '../components/Hero';

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      avatars: [],
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

  render() {
    // destructure from state and cast to variables so that 'this' keyword can be removed from following code
    const { avatars } = this.state;
    const filteredAvatarNames = avatars.filter((avatarName) => {
      return avatarName.name.toLowerCase();
    });

    return (
      <>
        <Hero />
        <div className="Contact">
       <Card avatars={filteredAvatarNames} />
        </div>
      </>
    );
  }
}

export default Blogs;
