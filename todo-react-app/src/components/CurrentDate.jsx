/* eslint-disable react/prop-types */
import React from 'react'

class CurrentDate extends React.Component {
	render() {
		//get current date with 2 digit
		const currentDate = this.props.dateObj.getDate().toString().padStart(2, '0');
		//Month name with short form
		const currentMonth = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(this.props.dateObj);
		//get current year
		const currentYear = this.props.dateObj.getFullYear();
		//day of week
		const dayOfWeek = this.props.dateObj.toLocaleString('en-us', {  weekday: 'long' });
		return (
			<>
				<div className='date d-flex me-5'>
					<div className="date-text">{currentDate}</div>
					<div className='d-flex flex-column justify-content-center'>
						<div className="month-text">{currentMonth}</div>
						<div className="year-text">{currentYear}</div>
					</div>
				</div>
				<div className='day-of-week ms-5'>{dayOfWeek}</div>
			</>
		)
	}
}

export default CurrentDate