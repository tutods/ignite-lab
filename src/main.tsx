import { ApolloProvider } from '@apollo/client';
import { App } from 'pages/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { client } from 'configs/lib/apollo';
import 'styles/global.scss';

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>
);
