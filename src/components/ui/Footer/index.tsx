import { RocketseatLogo } from 'components/logos/RocketseatLogo';
import styles from './styles.module.scss';

const Footer = () => {
	return (
		<footer className={styles['footer']}>
			<RocketseatLogo />

			<span>Rocketseat - Todos os direitos reservados</span>

			<span>Políticas de privacidade</span>
		</footer>
	);
};

export { Footer };
