import { Component } from 'react';
import Button from '../Button';

class ImageBlockCard extends Component {
  render() {
    const { avatars, src, className } = this.props;

    return (
      // All component html elements must be contained in one parent level tag
      <>
        {avatars.map((avatar) => (
          <div className={`info-1 ${className || ''}`}>
            <img className="product-image" src={src} alt="" />
            <div className="title notosans-semi-bold-black-16px">{avatar.name}</div>
            <p className="desc notosans-medium-santas-black-16px">{avatar.website}</p>
            <Button>{avatar.name}</Button>
          </div>
        ))}
      </>
    );
  }
}

export default ImageBlockCard;
