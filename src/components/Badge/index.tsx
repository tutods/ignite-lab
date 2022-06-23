import styles from './styles.module.scss';

type Props = {
	type: 'live' | 'class';
	className?: string;
	selected?: boolean;
};

const Badge = ({ type, className, selected = false }: Props) => {
	const getContent = type === 'live' ? 'Ao Vivo' : 'Aula Prática';

	return (
		<span
			className={`${styles['badge']} ${styles[type]} ${selected && styles['selected']} ${
				className ?? ''
			}`}
		>
			{getContent}
		</span>
	);
};

export { Badge };
