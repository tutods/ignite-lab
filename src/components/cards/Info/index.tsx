import { ArrowRight, CaretRight } from 'phosphor-react';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
	icon: ReactNode;
	title: string;
	description: ReactNode;
	link: string;
	className?: string;
};

const InfoCard = ({ icon, title, description, link, className }: Props) => {
	return (
		<a href={link} className={`${styles['card']} ${className ?? ''}`}>
			<div>{icon}</div>
			<div>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div>
				<CaretRight size={24} />
			</div>
		</a>
	);
};

export { InfoCard };