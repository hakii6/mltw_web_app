import React, { Component } from 'react';
import GachaItem from './GachaItem';
import axios from 'axios';

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
    axios.get('http://localhost/mltd/public/api/v1/gachas')
      .then(res => {
        this.setState({ gachas: res.data });
        this.setState({ gachas_jp: this.state.gachas
          .filter((gacha) => (Date.parse(gacha.start_date) > Date.now()))
          .sort((a, b) => a.start_date > b.start_date ? 1 : -1)
        });
        this.setState({ gachas_tw: this.state.gachas
          .filter((gacha) => (Date.parse(gacha.start_date) < Date.now()))
          .sort((a, b) => a.start_date <= b.start_date ? 1 : -1)
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
      fields = this.state.gachas_tw.map((gacha) => <GachaItem key={gacha.id} gacha={gacha} />);
      console.log(this.state.server);
    } else {
      fields = this.state.gachas_jp.map((gacha) => <GachaItem key={gacha.id} gacha={gacha} />);
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

export default Gachas;