import './style/App.css';
import Home from './pages/Home';
import Main from './pages/Main';
import Details from './pages/Details';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Searchs from './pages/Searchs';

function App() {
	return (
		<div className='App'>
			<Router>
				<Main />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/search/query=:query' component={Searchs} />
					<Route path='/details/:id' component={Details} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
