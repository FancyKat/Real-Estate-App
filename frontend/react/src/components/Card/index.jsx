import { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    //destructuring from props
    const { avatars } = this.props;

    return (
      <div>  
             <div className="card-container">
                <div className="card-desc">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {avatars.map((avatar) => (
       
                <tr>
                  <td>{avatar.name} </td>
                  <td>{avatar.name}</td>
                </tr>
            ))}  
           
          </tbody>
        </table> 
        </div>
        </div>
      </div>
    );
  }
}

export default Card;
