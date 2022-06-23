import { Badge } from 'components/Badge';
import { format, isPast } from 'date-fns';
import { CheckCircle, Lock } from 'phosphor-react';
import styles from './styles.module.scss';
import ptPT from 'date-fns/locale/pt';

type Props = {
	title: string;
	slug: string;
	type: 'class' | 'live';
	availableAt: Date;
};

const LessonCard = ({ title, slug, type, availableAt }: Props) => {
	const getAvailabilityContent = isPast(availableAt) ? (
		<span>
			<CheckCircle size={20} />
			Conteúdo Liberado
		</span>
	) : (
		<span className={styles['locked']}>
			<Lock size={20} />
			Em breve
		</span>
	);

	const getFormattedData = format(availableAt, `EEEE' • 'dd' de 'MMMM' • 'k'h'mm`, {
		locale: ptPT
	});

	return (
		<a href={`lesson/${slug}`} className={styles['card']}>
			<span>{getFormattedData}</span>

			<div>
				<header>
					{getAvailabilityContent}

					<Badge type={type} />
				</header>
				<strong>{title}</strong>
			</div>
		</a>
	);
};

export { LessonCard };
