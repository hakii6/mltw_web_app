import React, { Component } from 'react';
import EventItem from './EventItem';
import axios from 'axios';

class Events extends Component{
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      events_tw: [],
      events_jp: [],
      server: "tw",
    };
    this.handleClick = this.handleClick.bind(this)
  }
  
  componentDidMount() {
    axios.get('http://localhost:8001/api/v0/events')
      .then(res => {
      	this.setState({ events: res.data });
        this.setState({ events_jp: this.state.events
          .filter((event) => (Date.parse(event.StartDate) > Date.now()))
          .sort((a, b) => a.StartDate > b.StartDate ? 1 : -1)
        });
        this.setState({ events_tw: this.state.events
          .filter((event) => (Date.parse(event.StartDate) < Date.now()))
          .sort((a, b) => a.StartDate <= b.StartDate ? 1 : -1)
        });
        console.log(this.state.events);
      });
  }
  handleClick(e) {
    e.preventDefault();
    this.setState(state => ({
      server: (this.state.server == "tw"  ? "jp" : "tw")
    }));
  }
  render() {
    let fields;
    if (this.state.server == "tw") {
      fields = this.state.events_tw.map((event) => <EventItem key={event.ID} event={event} />);
      console.log(this.state.server);
    } else {
      fields = this.state.events_jp.map((event) => <EventItem key={event.ID} event={event} />);
      console.log(this.state.server);
    }
		return (
      <div>
        <a style={ switchStyle } href="#" onClick={this.handleClick}>
           > 切換版本點我
        </a>
        <br/>
        <br/>
        { fields }
      </div>

    );
	}
}

const switchStyle = {
}

export default Events;