import './App.css';
// import Yest from './components/Yest';
// import { useState, createContext } from 'react';
// import Task from './components/Task';
// import CatStuf from './components/CatStuff';
// import GuessAge from './components/GuessAge';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import { Link } from 'react-router-dom';
// import Excuse from './components/Excuse';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Form from './components/Form';
import Toggles from './components/Toggles';
// import Planets from './components/Planets';
import { Provider } from 'react-redux';
import { store } from './store';
import Login from './pages/Login';
// interface TodoItems {
// 	id: number;
// 	taskName: string;
// 	completed: boolean;
// }

// export const AppContext = createContext();

function App() {
	// const [username, setUsername] = useState('Bhanu Don');
	// const someClient = new QueryClient({
	// 	defaultOptions: {
	// 		queries: {
	// 			refetchOnWindowFocus: false
	// 		}
	// 	}
	// });
	// const [textAppear, textApperead] = useState(false);
	// const [todoList, setTodoList] = useState<TodoItems>([]);
	// const [newTask, setNewTask] = useState('');
	// const handleChange = (event: any) => {
	// 	setNewTask(event.target.value);
	// };
	// const addTask = () => {
	// 	const newTodoList = {
	// 		id:
	// 			todoList.length === 0
	// 				? 1
	// 				: todoList[todoList.length - 1].id + 1,
	// 		taskName: newTask,
	// 		completed: false
	// 	};
	// 	// const newTodoList = [...todoList, newTask];
	// 	setTodoList([...todoList, newTodoList]);
	// };
	// const completeTask = (id: any) => {
	// 	setTodoList(
	// 		todoList.map((task: any) => {
	// 			if (task.id === id) {
	// 				return { ...task, completed: true };
	// 			} else {
	// 				return task;
	// 			}
	// 		})
	// 	);
	// };
	// const deleteTask = (id: any) => {
	// 	setTodoList(
	// 		todoList.filter((task) => {
	// 			if (task.id === id) {
	// 				return false;
	// 			} else {
	// 				return true;
	// 			}
	// 		})
	// 	);
	// };

	return (
		<>
			<h1>Bhanu</h1>
			<Provider store={store}>
				<Login />
			</Provider>
			{/* <Planets name={username} /> */}
			{/* <QueryClientProvider client={someClient}>
				<AppContext.Provider value={{ username, setUsername }}> */}
			{/* <Excuse /> */}
			{/* <Router>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/profile'
						element={<Profile />}
					/>
					<Route
						path='/contact'
						element={<Contact />}
					/>
					<Route
						path='/form'
						element={<Form />}
					/>
					<Route
						path='/toggle'
						element={<Toggles />}
					/>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='*'
						element={<h1>404 PAGE NOT FOUND</h1>}
					/>
				</Routes>
			</Router> */}
			{/* </AppContext.Provider>
			</QueryClientProvider> */}

			{/* <GuessAge />
			<CatStuf />
			<button
				onClick={
					textAppear
						? () => textApperead(false)
						: () => textApperead(true)
				}
			>
				Show
			</button>
			<div>{textAppear ? <Yest /> : <></>}</div> */}

			{/* <h1>TODO</h1> */}
			{/* <div className='App'>
				<div className='addTask'>
					<input
						type='text'
						onChange={handleChange}
					/>
					{newTask}
					<button onClick={addTask}>Add</button>
				</div>
			</div>

			<div className='list'>
				{todoList.map((tasks) => {
					return (
						<Task
							taskName={tasks.taskName}
							id={tasks.id}
							completed={tasks.completed}
							completeTask={completeTask}
							deleteTask={deleteTask}
						/>
					);
				})}
			</div> */}
		</>
	);
}
export default App;
