import { Route, Routes } from 'react-router-dom';

import { Event } from 'pages/Event';
import { Subscribe } from 'pages/Subscribe';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Subscribe />} />
			<Route path="/event" element={<Event />}>
				<Route index element={<Event />} />
				<Route path="lessons/:slug" element={<Event />} />
			</Route>
		</Routes>
	);
};

export { Router };