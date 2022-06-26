import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Router } from 'Router';

import { client } from 'configs/lib/apollo';

const App = () => {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</ApolloProvider>
	);
};

export { App };