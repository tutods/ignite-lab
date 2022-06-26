import { CalendarCheck } from 'phosphor-react';

import { IgniteLabLogo } from 'components/logos/IgniteLabLogo';
import styles from 'components/ui/NoVideo/styles.module.scss';
import { EventDetails } from 'graphql/generated';
import { getDurationDate } from 'utils/durationDate';
import { replaceArray } from 'utils/replaceArray';

type Props = {
	event: EventDetails;
	className?: string;
};

const NoVideo = ({ className, event }: Props) => {
	return (
		<main className={`${styles.container} ${className ?? ''}`}>
			<section>
				<div className={styles['content-column']}>
					<IgniteLabLogo />

					<h1
						dangerouslySetInnerHTML={{
							__html: replaceArray(event.headline.html, ['<p>', '</p>'], '')
						}}
					/>
					<p
						dangerouslySetInnerHTML={{
							__html: replaceArray(event.description.html, ['<p>', '</p>'], '')
						}}
					/>

					<div className={styles['icon-container']}>
						<CalendarCheck weight="light" />
						<span>{getDurationDate(event.startDate, event.endDate)}</span>
					</div>
				</div>
			</section>

			<img src="/media/mockup.png" alt="Code Mockup" />
		</main>
	);
};

export { NoVideo };