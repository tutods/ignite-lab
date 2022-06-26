import { AnchorHTMLAttributes, ReactNode } from 'react';
import { CaretRight } from 'phosphor-react';

import styles from './styles.module.scss';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
	icon: ReactNode;
	title: string;
	description: ReactNode;
	link: string;
	className?: string;
};

const InfoCard = ({ icon, title, description, link, className, ...props }: Props) => {
	return (
		<a {...props} href={link} className={`${styles.card} ${className ?? ''}`}>
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