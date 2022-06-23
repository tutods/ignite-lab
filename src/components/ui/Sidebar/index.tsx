import { LessonCard } from 'components/cards/Lesson';
import styles from './styles.module.scss';

const Sidebar = () => {
	return <aside className={styles['sidebar']}>
		<span>Cronograma de Aulas</span>

		<section>
			<LessonCard />
			<LessonCard />
			<LessonCard />
			<LessonCard />
			<LessonCard />
			<LessonCard />
		</section>
	</aside>;
};

export { Sidebar };
