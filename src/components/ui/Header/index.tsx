import { IgniteLabLogo } from 'components/logos/IgniteLabLogo';

import styles from './styles.module.scss';

const Header = () => {
	return (
		<header className={styles['header']}>
			<IgniteLabLogo />
		</header>
	);
};

export { Header };
