import React from 'react'

class Header extends React.Component {
	render() {
		//date object
		const dateObject = new Date();
		//Month name with short form
		const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(dateObject);
		return (
			<>
				<div className='date d-flex me-5'>
					<div className="date-text">{('0' + dateObject.getDate()).slice(-2)}</div>
					<div className='d-flex flex-column justify-content-center'>
						<div className="month">{month}</div>
						<div className="year">{dateObject.getFullYear()}</div>
					</div>
				</div>
				<div className='day ms-5'>{dateObject.toLocaleString('en-us', { weekday: 'long' })}</div>
			</>
		)
	}
}

export default Header;