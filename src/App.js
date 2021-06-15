import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions'

function App() {
	const counter = useSelector(state => state.counter)
	const isLogged = useSelector(state => state.auth)

	const dispatch = useDispatch()

	return (
		<div className="App">
			<h1>Counter: {counter}</h1>
			<div className="row mb-5">
				<button className="mx-2 btn btn-success" onClick={()=>dispatch(increment(5))}><i className="fas fa-plus" /><strong> 5</strong></button>
				<button className="mx-2 btn btn-success" onClick={()=>dispatch(increment())}><i className="fas fa-plus" /></button>
				<button className="mx-2 btn btn-danger" onClick={()=>dispatch(decrement())}><i className="fas fa-minus" /></button>
				<button className="mx-2 btn btn-danger" onClick={()=>dispatch(decrement(5))}><i className="fas fa-minus" /><strong> 5</strong></button>
			</div>
			{
				isLogged ? <h5>you have access to a secret</h5> : <h5>not authorized to see this information</h5>
			}
		</div>
	);
}

export default App;
