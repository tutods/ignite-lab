import {LessonCard} from 'components/cards/Lesson';
import {useParams} from 'react-router-dom';
import styles from './styles.module.scss';
import {useGetLessonsQuery} from "graphql/generated";

const Sidebar = () => {
    const {slug} = useParams<{ slug: string }>();

    const {data} = useGetLessonsQuery();

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

export {Sidebar};