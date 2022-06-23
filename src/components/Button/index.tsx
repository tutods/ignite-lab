import styles from './styles.module.scss';
import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	icon?: ReactNode;
	link?: string;
	onClick?: () => void;
	variant?: 'primary' | 'outlined';
	className?: string;
};

const Button = ({ children, icon, link, onClick, variant = 'primary', className }: Props) => {
	const Tag = link ? 'a' : 'button';
	const properties = link ? { href: link } : { onClick };

	return (
		<Tag
			{...properties}
			className={`${styles['button']} ${styles[variant]} ${className ?? ''}`}
		>
			{icon}
			{children}
		</Tag>
	);
};

export { Button };
