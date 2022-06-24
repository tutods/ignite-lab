import { ApolloProvider } from '@apollo/client';
import { client } from 'configs/lib/apollo';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'Router';

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
