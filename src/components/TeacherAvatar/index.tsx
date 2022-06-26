import { ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
	avatar: string;
	name: string;
	description: ReactNode;
	className?: string;
};

const TeacherAvatar = ({ avatar, name, description, className }: Props) => {
	return (
		<div className={`${styles.avatar} ${className ?? ''}`}>
			<img src={avatar} alt={name} />

			<div>
				<strong>{name}</strong>
				<span>{description}</span>
			</div>
		</div>
	);
};

export { TeacherAvatar };