import styles from './styles.module.scss';
import { useQuery } from '@apollo/client';
import { IgniteLabLogo } from 'components/logos/IgniteLabLogo';
import { GET_EVENT_DETAILS } from 'graphql/queries/eventDetails';
import { CalendarCheck, Warning } from 'phosphor-react';
import { EventDetailsResponse } from 'types/EventDetails';
import { getDurationDate } from 'utils/durationDate';
import { replaceArray } from 'utils/replaceArray';

type Props = {
	className?: string;
};

const NoVideo = ({ className }: Props) => {
	/**
	 * Queries
	 */
	const { data, loading } = useQuery<EventDetailsResponse>(GET_EVENT_DETAILS);

	if (!data || loading) {
		return <div>Loading</div>;
	}

	return (
		<main className={`${styles['container']} ${className ?? ''}`}>
			<section>
				<div className={styles['content-column']}>
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
			</section>

			<img src={'/media/mockup.png'} alt={'Code Mockup'} />
		</main>
	);
};

export { NoVideo };
