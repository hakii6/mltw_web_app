import React, { Component } from 'react';
import GachaItem from './GachaItem';
import axios from 'axios';

import env from '../env';

class Gachas extends Component{
  constructor(props) {
    super(props);
    this.state = {
      gachas: [],
      gachas_tw: [],
      gachas_jp: [],
      server: "tw",
    };
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    console.log(env);
    axios.get(env.api + 'v0/gachas')
      .then(res => {
        this.setState({ gachas: res.data });
        this.setState({ gachas_jp: this.state.gachas
          .filter((gacha) => (Date.parse(gacha.StartDate) > Date.now()))
          .sort((a, b) => a.StartDate > b.StartDate ? 1 : -1)
        });
        this.setState({ gachas_tw: this.state.gachas
          .filter((gacha) => (Date.parse(gacha.StartDate) < Date.now()))
          .sort((a, b) => a.StartDate <= b.StartDate ? 1 : -1)
        });
        console.log(this.state.gachas);
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
      fields = this.state.gachas_tw.map((gacha) => <GachaItem key={gacha.ID} gacha={gacha} />);
      console.log(this.state.server);
    } else {
      fields = this.state.gachas_jp.map((gacha) => <GachaItem key={gacha.ID} gacha={gacha} />);
      console.log(this.state.server);
    }
    return (
      <div>
        <a style={ switchStyle } href="#" onClick={this.handleClick}>
           > 看未來視點我(目前為: { this.state.server })
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

export default Gachas;