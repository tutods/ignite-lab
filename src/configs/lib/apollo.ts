import { ApolloClient, InMemoryCache } from '@apollo/client';

import { config } from '../config';

const client = new ApolloClient({
	uri: config.api.url,
	headers: {
		Authorization: `Bearer ${config.api.token}`
	},
	cache: new InMemoryCache()
});

export { client };