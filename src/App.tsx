/* import 'primereact/resources/themes/arya-green/theme.css';*/
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Layout from './components/Layout/Layout';
import PetsView from './containers/pages/PetsView/PetsView';
import FavoritesView from './containers/pages/FavoritesView/FavoriteView';
import React from 'react';
import { Router, Route } from 'react-router-dom';
import ProfileView from './containers/pages/ProfileView/ProfileView';
import Login from './containers/pages/LogInView/Login';
import RefugesView from './containers/pages/RefugesView/RefugesView';

let History = require('history').createBrowserHistory();

function App() {
	return (
		<Router history={History}>
			<Layout>
				<Route exact path="/" component={PetsView} />
				<Route path="/pets" component={PetsView} />
				<Route exact path="/pets/:id" component={PetsView} />
				<Route path="/favorites" component={FavoritesView} />
				<Route path="/refuges" component={RefugesView} />
				<Route path="/profile" component={ProfileView} />
				<Route path="/login" component={Login} />
			</Layout>
		</Router>
	);
}

export default App;
