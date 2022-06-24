import { gql, useMutation } from '@apollo/client';
import { Button } from 'components/Button';
import { IgniteLabLogo } from 'components/logos/IgniteLabLogo';
import { Warning } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'utils/isEmpty';
import styles from './styles.module.scss';

const CREATE_SUBSCRIBER = gql`
	mutation CreateSubscriber($name: String!, $email: String!) {
		createSubscriber(data: { name: $name, email: $email }) {
			id
			name
			email
		}
	}
`;

const Subscribe = () => {
	const navigate = useNavigate();

	const [addSubscription, { loading, error }] = useMutation(CREATE_SUBSCRIBER);

	const [formData, setFormData] = useState<{ name: string; email: string }>({
		name: '',
		email: ''
	});

	const [formErrors, setFormErrors] = useState<{ name: boolean; email: boolean }>({
		name: false,
		email: false
	});

	const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = evt.target;

		if (formErrors[name as 'name' | 'email'] && !isEmpty(value)) {
			setFormErrors((prevState) => ({
				...prevState,
				[name]: false
			}));
		}

		setFormData((prevState) => ({
			...prevState,
			[name]: value
		}));
	};

	const handleSubscription = async (evt: FormEvent) => {
		evt.preventDefault();

		/**
		 * Validate if name is empty
		 */
		if (isEmpty(formData.name)) {
			setFormErrors((prevState) => ({ ...prevState, name: true }));
			console.log(!formData.name);
			return;
		}

		/**
		 * Validate if email is empty or if don't match with regex
		 */
		if (
			isEmpty(formData.email) ||
			!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
		) {
			setFormErrors((prevState) => ({ ...prevState, email: true }));
			return;
		}

		await addSubscription({
			variables: {
				name: formData.name,
				email: formData.email
			}
		});

		if (!error) {
			setFormErrors({ email: false, name: false });
			navigate('/event');
		}
	};

	return (
		<main className={`${styles['container']}`}>
			<section>
				<div className={styles['left-column']}>
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

				<div className={styles['right-column']}>
					<h2>Inscreva-se gratuitamente</h2>

					{error && (
						<div className={styles['alert']}>
							<p>
								<Warning weight={'bold'} size={18} />
								<strong>Ocorreu um erro!</strong>
							</p>

							<p>{error.message}</p>
						</div>
					)}

					{loading ? (
						<div>Loading..</div>
					) : (
						<form onSubmit={handleSubscription}>
							<input
								className={`${styles['input']} ${
									formErrors.name ? styles['have-error'] : ''
								}`}
								type={'text'}
								name={'name'}
								placeholder={'Seu nome completo'}
								onChange={handleChange}
							/>

							<input
								className={`${styles['input']} ${
									formErrors.email ? styles['have-error'] : ''
								}`}
								type={'email'}
								name={'email'}
								placeholder={'Digite o seu email'}
								onChange={handleChange}
							/>

							<Button
								disabled={formErrors.email || formErrors.name}
								type={'submit'}
								className={'mt-4'}
								variant={'primary'}
							>
								Garantir minha vaga
							</Button>
						</form>
					)}
				</div>
			</section>

			<img src={'/media/mockup.png'} alt={'Code Mockup'} />
		</main>
	);
};

export { Subscribe };
