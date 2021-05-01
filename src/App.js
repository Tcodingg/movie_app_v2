import './style/App.css';
import Home from './components/Home';
import Main from './components/Main';
import Details from './components/Details';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Searchs from './components/Searchs';

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
