import React from 'react'

import DefaultTasks from './DefaultTasks.json'
import TaskAdder from './TaskAdder';

const TaskList = () => {
	return (
		<>
			{
				DefaultTasks.map((task) => {
					return (
						<TaskAdder
							key={task.id}
							taskName={task.taskName}
						/>
					)
				})
			}
		</>
	)
}

export default TaskList