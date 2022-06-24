import { Badge } from 'components/Badge';
import { format, isPast } from 'date-fns';
import { CheckCircle, Lock } from 'phosphor-react';
import styles from './styles.module.scss';
import ptPT from 'date-fns/locale/pt';
import { Link, LinkProps } from 'react-router-dom';
import { HTMLAttributes, ReactNode } from 'react';

type Props = {
	title: string;
	slug: string;
	type: 'class' | 'live';
	availableAt: Date;
	active?: boolean;
};

/**
 * Inner Component to use Link or a div as root
 */
const Content = ({
	children,
	availableAt,
	slug,
	...props
}: { children: ReactNode; availableAt: Date; slug: string } & Partial<
	HTMLAttributes<HTMLElement>
>) => {
	return isPast(availableAt) ? (
		<Link to={`lessons/${slug}`} {...props}>
			{children}
		</Link>
	) : (
		<div {...props}>{children}</div>
	);
};

const LessonCard = ({ title, slug, type, availableAt, active = false }: Props) => {
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
		<Content
			availableAt={availableAt}
			slug={slug}
			className={`${styles['card']} ${!isPast(availableAt) && styles['locked']} ${
				active && styles['active']
			}`}
		>
			<span>{getFormattedData}</span>

			<div>
				<header>
					{getAvailabilityContent}

					<Badge active={active} type={type} />
				</header>
				<strong>{title}</strong>
			</div>
		</Content>
	);
};

export { LessonCard };
