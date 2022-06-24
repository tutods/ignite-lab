import { Event } from 'pages/Event';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
	return (
		<Routes>
			<Route path={'/'} element={<h1>teste</h1>} />
			<Route path={'/event'} element={<Event />}>
				<Route index element={<Event />} />
				<Route path={'lessons/:slug'} element={<Event />} />
			</Route>
		</Routes>
	);
};

export { Router };
