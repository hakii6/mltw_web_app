import React, { Component } from 'react';

// import env from '../env';

class Homepage extends Component{
  state = {
  }
  componentDidMount() {
    // axios.get(env.api + 'v0/songs')
    //   .then(res => {
    //   	this.setState({ songs: res.data });
    //   });
  }

  render() {
		return (
      <div style={switchStyle}>
        本站為專為繁中版MLTD玩家設立的網站<br/>
        之前舊有的功能（包含所有排版）<br/>
        因目前整個網站大改（前後端都換了新框架）<br/>
        故請稍待一段時間<br/>
        <div style={switchStyle2}>每天都有在更新</div>

        <br/>
        <div>
          排版與畫面美化我最後在做<br/>
          因為我會的是程式設計、網站前後端、日文、英文<br/>
          就是沒有畫面美化與美觀相關的<br/>
          <div style={crossStyle}>我也沒那個臉皮去請人免費幫我做（目前每月都是赤字狀態　但網站架設的費用還能負擔）</div>
          所以絕大多數功能都上來之後<br/>
          我才會開始研究畫面怎麼調整<br/>
          敬請見諒<br/>
          <br/>
        </div>
        <hr/>
        <div className="container">
          <div className="row">
            <div style={leftStyle} className="col-md-6">
              待實裝舊功能（即原本網站有的東西）：
              <ul>
                <li>活動：分數線展示、歌曲頁面導向</li>
                <li>轉蛋：卡片展示</li>
                <li>偶像：排版</li>
                <li>歌曲：譜面串連、歌曲排序與篩選</li>
                <li>卡片：分類、排序</li>
                <li>各式計算機：頁面、控分與碎石預測</li>
                <li>關於本站：全部</li>
              </ul>
            </div>
            <div style={leftStyle} className="col-md-6">
              待實裝新功能：
              <ul>
                <li>活動：搜尋功能（依偶像、類型或屬性）、依活動屬性分類</li>
                <li>轉蛋：搜尋功能（依偶像、類型或屬性）</li>
                <li>偶像：聲優社群連結導向</li>
                <li>歌曲：專輯連結、譜面各式操作、手元上傳</li>
                <li>卡片：技能比較</li>
                <li>各式計算機：隊伍分數預測</li>
              </ul>
            </div>
          </div>
        </div>

        <hr/>

        官方網站與參考網站連結<br/><br/>
        <div className="container">
          <div className="row">
            <div style={leftStyle} className="col-md-6">
              官方（官網、ＦＢ、推特）
              <ul>
                <li><a href="https://millionlive.idolmaster.jp/theaterdays-ch/">繁中版官方網站</a></li>
                <li><a href="https://www.facebook.com/idolmastermlTD.ch/">繁中版ＦＢ</a></li>
                <li><a href="https://as.idolmaster-official.jp/?_ga=2.73731218.1448571611.1610745177-1988396052.1610745177">偶像大師官方網站</a></li>
              </ul>
            </div>
            <div style={leftStyle} className="col-md-6">
              非官方
              <ul>
                <li><a href="https://million.hyrorre.com/">譜面網站</a></li>
                <li><a href="https://imasml-theater-wiki.gamerch.com/">日版維基</a></li>
                <li><a href="https://api.matsurihi.me/docs/">matsurihi.me（本網站活動分數 大多來自此網站的API）</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      );
	}
}

const switchStyle = {
  textAlign: 'center',
  fontSize: '18px',
  fontWeight: 'bold'
}

const switchStyle2 = {
  textAlign: 'center',
  fontSize: '36px',
  fontWeight: 'bold',
  color: 'red'
}

const leftStyle = {
  textAlign: 'left',
}

const crossStyle ={
  textDecoration: 'line-through'
}
export default Homepage;