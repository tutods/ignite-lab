import { gql, useMutation, useQuery } from '@apollo/client';
import { Button } from 'components/Button';
import { IgniteLabLogo } from 'components/logos/IgniteLabLogo';
import { CREATE_SUBSCRIBER, PUBLISH_SUBSCRIBER } from 'graphql/mutations/subscriber';
import { GET_EVENT_DETAILS } from 'graphql/querys/eventDetails';
import { Calendar, CalendarCheck, CalendarX, Warning } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EventDetailsResponse } from 'types/EventDetails';
import { CreateSubscriberResponse, PublishSubscriberResponse } from 'types/Subscriber';
import { getDurationDate } from 'utils/durationDate';
import { isEmpty } from 'utils/isEmpty';
import { replaceArray } from 'utils/replaceArray';
import styles from './styles.module.scss';

const Subscribe = () => {
	const navigate = useNavigate();

	/**
	 * Queries
	 */
	const { data, loading: eventLoading } = useQuery<EventDetailsResponse>(GET_EVENT_DETAILS);

	/**
	 * Mutations
	 */
	const [addSubscription, { loading, error }] =
		useMutation<CreateSubscriberResponse>(CREATE_SUBSCRIBER);
	const [publishSubscriber, { loading: publishLoading, error: publishError }] =
		useMutation<PublishSubscriberResponse>(PUBLISH_SUBSCRIBER);

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

		const { data } = await addSubscription({
			variables: {
				name: formData.name,
				email: formData.email
			}
		});

		const { data: publishData } = await publishSubscriber({
			variables: {
				email: data?.createSubscriber.email
			}
		});

		if ((!error || !publishError) && publishData?.publishSubscriber.id) {
			setFormErrors({ email: false, name: false });
			navigate('/event');
		}
	};

	if (!data || eventLoading) {
		return <div>Loading</div>;
	}

	return (
		<main className={`${styles['container']}`}>
			<section>
				<div className={styles['left-column']}>
					<IgniteLabLogo />

					<h1
						dangerouslySetInnerHTML={{
							__html: replaceArray(
								data.eventDetails.headline.html,
								['<p>', '</p>'],
								''
							)
						}}
					/>
					<p
						dangerouslySetInnerHTML={{
							__html: replaceArray(
								data.eventDetails.description.html,
								['<p>', '</p>'],
								''
							)
						}}
					/>

					<div className={styles['icon-container']}>
						<CalendarCheck weight={'light'} />
						<span>
							{getDurationDate(
								data.eventDetails.startDate,
								data.eventDetails.endDate
							)}
						</span>
					</div>
				</div>

				<div className={styles['right-column']}>
					<h2>Inscreva-se gratuitamente</h2>

					{(error || publishError) && (
						<div className={styles['alert']}>
							<p>
								<Warning weight={'bold'} size={18} />
								<strong>Ocorreu um erro!</strong>
							</p>

							<p>{error ? error.message : publishError?.message}</p>
						</div>
					)}

					{loading || publishLoading ? (
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
