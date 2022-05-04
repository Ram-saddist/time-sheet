import {Link} from 'react-router-dom'

function Header(){
	return(
		<div className="nav">
			<Link className="nav-link" to="/">Hours</Link>
			<Link className="nav-link" to="/timesheet">TimeSheet</Link>
		</div>
	)
}
export default Header