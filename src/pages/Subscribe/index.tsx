import { Button } from 'components/Button';
import { IgniteLabLogo } from 'components/logos/IgniteLabLogo';
import styles from './styles.module.scss';

const Subscribe = () => {
	return (
		<main className={`${styles['container']}`}>
			<section>
				<div>
					<IgniteLabLogo />

					<h1>
						Construa uma <strong>aplicação completa</strong>, do zero, com{' '}
						<strong>React</strong>
					</h1>
					<p>
						Em apenas uma semana você vai dominar na prática uma das tecnologias mais
						utilizadas e com alta demanda para acessar as melhores oportunidades do
						mercado.
					</p>
				</div>

				<div>
					<h2>Inscreva-se gratuitamente</h2>

					<form>
						<input type={'text'} placeholder={'Seu nome completo'} />

						<input type={'email'} placeholder={'Digite o seu email'} />

						<Button className={'mt-4'} variant={'primary'}>
							Garantir minha vaga
						</Button>
					</form>
				</div>
			</section>

			<img src={'/media/mockup.png'} alt={'Code Mockup'} />
		</main>
	);
};

export { Subscribe };
