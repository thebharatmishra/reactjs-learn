function Task(props: any) {
	return (
		<>
			<div>
				<h2>{props.taskName}</h2>
				<button
					style={{
						backgroundColor: props.completed ? 'green' : 'white'
					}}
					onClick={() => props.completeTask(props.id)}
				>
					Complete
				</button>
				<button onClick={() => props.deleteTask(props.id)}>X</button>
			</div>
		</>
	);
}

export default Task;
