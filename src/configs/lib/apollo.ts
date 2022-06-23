import { ApolloClient, InMemoryCache } from '@apollo/client';
import { config } from '../config';

const client = new ApolloClient({
	uri: config.api.url,
	cache: new InMemoryCache(),
});

export { client };
