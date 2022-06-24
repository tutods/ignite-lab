import styles from './styles.module.scss';
import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

type Props = Partial<ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>> & {
	children: ReactNode;
	icon?: ReactNode;
	link?: string;
	onClick?: () => void;
	variant?: 'primary' | 'outlined';
	className?: string;
};

const Button = ({
	children,
	icon,
	link,
	onClick,
	variant = 'primary',
	className,
	...props
}: Props) => {
	const Tag = link ? 'a' : 'button';
	const options = link ? { href: link } : { onClick };

	return (
		<Tag
			{...props}
			{...options}
			className={`${styles['button']} ${styles[variant]} ${className ?? ''}`}
		>
			{icon}
			{children}
		</Tag>
	);
};

export { Button };
