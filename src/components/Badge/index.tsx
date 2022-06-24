import styles from './styles.module.scss';

type Props = {
	type: 'live' | 'class';
	className?: string;
	active?: boolean;
};

const Badge = ({ type, className, active = false }: Props) => {
	const getContent = type === 'live' ? 'Ao Vivo' : 'Aula Prática';

	return (
		<span
			className={`${styles['badge']} ${styles[type]} ${active && styles['selected']} ${
				className ?? ''
			}`}
		>
			{getContent}
		</span>
	);
};

export { Badge };
