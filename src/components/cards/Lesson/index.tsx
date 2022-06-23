import { Badge } from 'components/Badge';
import { CheckCircle } from 'phosphor-react';
import styles from './styles.module.scss';

type Props = {
	type: 'class' | 'live';
	unlocked?: boolean;
	link: string;
};

const LessonCard = () => {
	return (
		<a href="" className={styles['card']}>
			<span>Domingo • 20 de junho • 19h00</span>

			<div>
				<header>
					<span>
						<CheckCircle size={20} />
						Conteúdo Liberado
					</span>

					<Badge type={'live'} />
				</header>
				<strong>Abertura do evento Ignite labs</strong>
			</div>
		</a>
	);
};

export { LessonCard };
