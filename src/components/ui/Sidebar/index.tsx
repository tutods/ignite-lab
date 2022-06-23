import { gql, useQuery } from '@apollo/client';
import { LessonCard } from 'components/cards/Lesson';
import styles from './styles.module.scss';

const GET_LESSONS_QUERY = gql`
	query {
		lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
			id
			title
			slug
			lessonType
			availableAt
		}
	}
`;

type GetLessonsResponse = {
	lessons: {
		id: string;
		title: string;
		slug: string;
		lessonType: 'live' | 'class';
		availableAt: string;
	}[];
};

const Sidebar = () => {
	const { data } = useQuery<GetLessonsResponse>(GET_LESSONS_QUERY);

	return (
		<aside className={styles['sidebar']}>
			<span>Cronograma de Aulas</span>

			<section>
				{data?.lessons.map((lesson) => (
					<LessonCard
						key={lesson.id}
						type={lesson.lessonType}
						title={lesson.title}
						slug={lesson.slug}
						availableAt={new Date(lesson.availableAt)}
					/>
				))}
			</section>
		</aside>
	);
};

export { Sidebar };
