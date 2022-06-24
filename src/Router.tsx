import { Event } from 'pages/Event';
import { Subscribe } from 'pages/Subscribe';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Subscribe />} />
			<Route path={'/event'} element={<Event />}>
				<Route index element={<Event />} />
				<Route path={'lessons/:slug'} element={<Event />} />
			</Route>
		</Routes>
	);
};

export { Router };
