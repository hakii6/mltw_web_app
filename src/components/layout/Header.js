import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<nav className='navbar navbar-default menu'>
				<div className="navbar-header">
          <a className="navbar-brand">
          	<Link style={linkStyle} to="/">製作人企劃書 by 蛤蛤</Link>
          </a>
				</div>
        <ul className='nav navbar-nav'>
					<li><Link style={linkStyle} to="/events">活動</Link></li>
					<li><Link style={linkStyle} to="/gachas">轉蛋</Link></li>
					<li><Link style={linkStyle} to="/idols">偶像</Link></li>
					<li><Link style={linkStyle} to="/songs">歌曲</Link></li>
					<li><Link style={linkStyle} to="/cards">卡片</Link></li>
				</ul>
		</nav>
	)
}

const linkStyle = {

	color: '#FFF8DC',
  textDecoration: 'none'

}

export default Header;