import { App } from 'pages/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import 'styles/global.scss';
import 'utils/string.extensions';

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
