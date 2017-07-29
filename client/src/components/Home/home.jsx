import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter} from 'react-router';
import Userinfo from './Userinfo.jsx';
import Eventstream from './Eventstream.jsx';
import Filter from './Filter.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Joe',
      lastName: 'Doe',
      profilePic: 'https://content-static.upwork.com/uploads/2014/10/02123010/profile-photo_friendly.jpg',
      events: [
        {
          ID:"3",
          eventImage:"https://www.quickenloans.com/blog/wp-content/uploads/2015/09/building-a-house.jpg",
          eventTitle:"Come build a house",
          date: "Wednesday, July 26, 2017",
          organisation: "Red Cross"
        }
      ]
    }
  }

  componentWillMount() {
    if (window.localStorage.loggedIn !== "true") {
      this.props.history.push('/login');
    }
  }

  render () {
    return (
      <div>
        <img className="logo-image" src="./assets/teer_logo.png"></img>
        <Userinfo firstName={this.state.firstName} lastName={this.state.lastName} profilePic={this.state.profilePic} />
        <div>
          <img className="city-cover-image" src="./assets/san_francisco.jpg"></img>
        </div>
        <Filter />
        <h1>This week</h1>
        <Eventstream events={this.state.events}/>
      </div>
    )
  }
}

export default withRouter(Home);