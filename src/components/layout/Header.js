import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header style={headerStyle}>
			<Link style={linkStyle} to="/">製作人企劃書 by 蛤蛤</Link> 
			<Link style={linkStyle} to="/events">活動</Link>
			<Link style={linkStyle} to="/gachas">轉蛋</Link>
			<Link style={linkStyle} to="/idols">偶像</Link>
			<Link style={linkStyle} to="/songs">歌曲</Link>
			<Link style={linkStyle} to="/cards">卡片</Link>
		</header>
	)
}

const headerStyle = {
  borderWidth: '0px',
  borderRadius: '20px',
  background: '#FFA500',
  margin: '10px 0px 10px 0px',
  padding: '10px',
	fontSize: '18px',
}

const linkStyle = {

  borderColor: '#FA8072',
	color: '#fff',
  margin: '10px 0px 10px 0px',
  padding: '10px',
  textAlign: 'center',
  fontWeight: 'bold',
  textDecoration: 'none'

}

export default Header;