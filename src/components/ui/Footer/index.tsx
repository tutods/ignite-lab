import { RocketseatLogo } from 'components/logos/RocketseatLogo';

import styles from './styles.module.scss';

type Props = {
	className?: string;
};

const Footer = ({ className }: Props) => {
	return (
		<footer className={`${styles.footer} ${className ?? ''}`}>
			<RocketseatLogo />

			<span>Rocketseat - Todos os direitos reservados</span>

			<span>Políticas de privacidade</span>
		</footer>
	);
};

export { Footer };
