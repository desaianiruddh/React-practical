import React from 'react'

import DefaultTasks from './DefaultTasks.json'
import AddNewTask from './AddNewTask';

const TaskList = () => {
	return (
		<div>
			{
				DefaultTasks.map((task) => {
					return (
						<AddNewTask
							key={task.id}
							taskName={task.taskName}
						/>
					)
				})
			}
		</div>
	)
}

export default TaskList