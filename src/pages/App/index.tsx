import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { client } from 'shared/configs/lib/apollo';

const GET_LESSONS_QUERY = gql`
	query {
		lessons {
			id
			title
		}
	}
`;

type Lesson = {
	id: string;
	title: string;
};

const App = () => {
	const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

	return (
		<ul>
			{data?.lessons.map((lesson) => (
				<li key={lesson.id}>{lesson.title}</li>
			))}
		</ul>
	);
};

export { App };
