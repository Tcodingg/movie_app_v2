import './App.css';
import Home from './pages/Home';
import Main from './pages/Main';
import Details from './pages/Details';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Searchs from './pages/Searchs';

function App() {
	return (
		<div className='App'>
			<Router>
				<Main />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route exact path='/search/query=:query' component={Searchs} />

					<Route path='/details/:id' component={Details} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
