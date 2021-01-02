import React, { Component } from 'react';
import { Link, useParams, Route } from 'react-router-dom';
import axios from 'axios';

class CardPage extends Component{
  constructor(props) {
    super(props);
    this.params = this.props.match.params;
    this.state = {
      card: [],
      idol: [],
    };
  }
  componentDidMount() {
    axios.get('http://localhost:8001/api/v0/cards/' + this.params.ID )
      .then(res => {
        this.setState({ card: res.data });
        this.setState({ idol: this.state.card.Idol });
        console.log(this.state.card);
        console.log(this.state.idol);
      });
  }
  render() {
		return (
        <div>
          <div className='row'>

						<div className='col-md-2' />
						<img src={ this.state.card.ImageA } className = 'col-md-3' />
						<div className='col-md-2' />
						<img src={ this.state.card.ImageB } className = 'col-md-3' />
						<div className='col-md-2' />
						<br/>
						<br/>

					</div>
					<div className = 'row'>

						<div className ='col-sm-6'>
						</div>

						<div className="_table col-sm-6" >
							<div className="_tr">
								<div className="_td status_box">卡名</div>
								<div className="_td">&nbsp{ this.state.card.NameTW }（＋）</div>
							</div>

							<hr className='space' />
							<div className="_tr">
								<div className="_td status_box">日版卡名</div>
								<div className="_td">&nbsp{ this.state.card.NameJP }（＋）</div>
							</div>

							<hr className='space' />
							<div className="_tr">
								<div className="_td status_box">偶像</div>
								<div className="_td">&nbsp{ this.state.idol.NameTW }</div>
							</div>

							<hr className='space' />
							<div className="_tr">
								<div className="_td status_box">稀有度</div>
								<div className="_td">&nbsp{ this.state.card.rarity }（＋）</div>
							</div>

						<hr className='space' />
						</div>

					</div>

					<hr />


					<hr />



					<div className="_table">
						<div className="_tr">
							<div className="_td status_box">Center效果</div>
							<div className="_td">&nbsp center_skill</div>
						</div>

						<hr className='space' />
						<div className="_tr">
							<div className="_td status_box">技能</div>
							<div className="_td">&nbsp</div>
						</div>

						<hr className='space' />
						<div className="_tr">
							<div className="_td status_box">技能分類</div>
							<div className="_td">&nbsp</div>
						</div>

						<hr className='space' />
					</div>

					<hr/>


					<table>
						<tr>
							<th className='toumei_list2'></th>
							<th className='toumei2'>0</th>
							<th className='toumei2'>1</th>
							<th className='toumei2'>2</th>
							<th className='toumei2'>3</th>
							<th className='toumei2'>4</th>
						</tr>

						<tr>

							<td className='toumei_list2'>歌唱力</td>
							<td className='toumei2'>{ this.state.card.Vocal }</td>

						</tr>

						<tr>

							<td className='toumei_list2'>舞蹈力</td>
							<td className='toumei2'>{ this.state.card.Dance }</td>

						</tr>

						<tr>

							<td className='toumei_list2'>視覺力</td>
							<td className='toumei2'>{ this.state.card.Visual }</td>


						</tr>

						<tr>

							<td className='toumei_list2'>合計值</td>
							<td className='toumei2'><b>{ this.state.card.Total }</b></td>

						</tr>
					</table>

					<hr/>

					<p>
						<span className="status_box">入手方法</span>

						<span>

							<span>&nbsp進行演唱會與工作時，有機率掉落</span>
							<span>&nbsp１．進行演唱會與工作時，有機率掉落<br/>２．白金轉蛋<br/></span>

						</span>

						<span>

							<span>
							<b> &nbsp{ this.state.card.GetCard } </b>　活動報酬卡片　或者等待半年後開放以 PST 石兌換
							</span>

							<span>&nbsp白金轉蛋</span>

							<span>
							<b>&nbsp百萬祭典轉蛋</b>（FES轉蛋）限定取得
							</span>

							<span>
							<b> &nbsp{ this.state.card.NameTW } </b>限定取得　或者等待半年後限定復刻
							</span>
						</span>

					</p>
				</div>
        
		);
	}
}


export default CardPage;