import React from 'react'

import AddNewTask from './AddNewTask';

const TaskList = (props) => {
	return (
		<>
			{
				props.taskList.map((task, index) => {
					return (
						<AddNewTask
							key={index * 1000}
							index={index}
							taskName={task}
						/>
					)
				})
			}
		</>
	)
}

export default TaskList