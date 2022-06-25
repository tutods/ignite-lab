import styles from 'components/ui/NoVideo/styles.module.scss';
import {IgniteLabLogo} from 'components/logos/IgniteLabLogo';
import {CalendarCheck} from 'phosphor-react';
import {getDurationDate} from 'utils/durationDate';
import {replaceArray} from 'utils/replaceArray';
import {useGetEventDetailsQuery} from "graphql/generated";

type Props = {
    className?: string;
};

const NoVideo = ({className}: Props) => {
    /**
     * Queries
     */
    const {data, loading} = useGetEventDetailsQuery();

    if (!data || !data.eventDetails || loading) {
        return <div>Loading</div>;
    }

    return (
        <main className={`${styles['container']} ${className ?? ''}`}>
            <section>
                <div className={styles['content-column']}>
                    <IgniteLabLogo/>

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
                        <CalendarCheck weight={'light'}/>
                        <span>
							{getDurationDate(
                                data.eventDetails.startDate,
                                data.eventDetails.endDate
                            )}
						</span>
                    </div>
                </div>
            </section>

            <img src={'/media/mockup.png'} alt={'Code Mockup'}/>
        </main>
    );
};

export {NoVideo};