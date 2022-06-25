import '@vime/core/themes/default.css';
import {DefaultUi, Player, Youtube} from '@vime/react';
import {Button} from 'components/Button';
import {InfoCard} from 'components/cards/Info';
import {TeacherAvatar} from 'components/TeacherAvatar';
import {DiscordLogo, FileArrowDown, Image, Lightning} from 'phosphor-react';
import styles from './styles.module.scss';
import {useNavigate} from 'react-router-dom';
import {EventDetails, useGetLessonBySlugQuery} from "graphql/generated";
import {isPast} from "date-fns";

type Props = {
    lessonSlug: string;
    event: EventDetails
};

const Video = ({lessonSlug, event}: Props) => {
    const navigate = useNavigate();

    const {data, loading} = useGetLessonBySlugQuery({
        variables: {
            slug: lessonSlug
        }
    });

    if (loading || !data || !data.lesson) {
        return <div className={'flex-1'}>Loading...</div>;
    }

    /**
     * If classe is not available yet
     * redirect user to previous page
     */
    if (!loading && data && data.lesson) {
        if (!isPast(new Date(data.lesson.availableAt))) {
            navigate(-1)
        }
    }

    return (
        <section className={styles['container']}>
            <div>
                <div>
                    <Player>
                        <Youtube videoId={data.lesson.videoId} key={data.lesson.videoId}/>
                        <DefaultUi/>
                    </Player>
                </div>
            </div>

            <article className={styles['content']}>
                <section>
                    <div>
                        <h1>{data.lesson.title}</h1>
                        <p>{data.lesson.description}</p>

                        {data.lesson.teacher && (
                            <TeacherAvatar
                                className={'mt-6'}
                                avatar={data.lesson.teacher.avatarURL}
                                name={data.lesson.teacher.name}
                                description={data.lesson.teacher.bio}
                            />
                        )}
                    </div>
                    <div>
                        <Button link={'teste'} icon={<DiscordLogo size={24}/>}>
                            Comunidade do Discord
                        </Button>

                        {
                            data.lesson.challenge && (
                                <Button
                                    link={data.lesson.challenge.url}
                                    icon={<Lightning size={24}/>}
                                    variant={'outlined'}
                                >
                                    Acesse o desafio
                                </Button>
                            )
                        }
                    </div>
                </section>
                <section>
                    {
                        event.additionalFiles && (
                            <InfoCard
                                link={event.additionalFiles}
                                target={'_blank'}
                                icon={<FileArrowDown size={39}/>}
                                title={'Material Complementar'}
                                description={
                                    'Acesse o material complementar para acelerar o seu desenvolvimento'
                                }
                            />
                        )
                    }
                    {
                        event.wallpapers && (
                            <InfoCard
                                link={event.wallpapers}
                                target={'_blank'}
                                icon={<Image size={39}/>}
                                title={'Wallpapers exclusivos'}
                                description={
                                    'Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina'
                                }
                            />
                        )
                    }
                </section>
            </article>
        </section>
    );
};

export {Video};