import { gql, useQuery } from '@apollo/client';
import { LessonCard } from 'components/cards/Lesson';
import { GET_LESSONS_QUERY } from 'graphql/queries/lessons';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';

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
	const { slug } = useParams<{ slug: string }>();

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
						active={lesson.slug === slug}
					/>
				))}
			</section>
		</aside>
	);
};

export { Sidebar };
