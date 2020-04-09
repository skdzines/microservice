import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Page from 'components/layout/page';

import pages from './pages';

function FourOhFour({ location }) {
	return (
		<div>
			<h3>
				No match for <code>{location.pathname}</code>
			</h3>
		</div>
	);
}

const Routes = () => {
	const routes = pages.map(page => <Route key={page.path} exact={true} strict={true} path={page.path} component={page.component} />);
	return (
		<Router>
			<Page>
				<Switch>
					{routes}
					<Route component={ FourOhFour } />
				</Switch>
			</Page>
		</Router>
	);
}

export default Routes;