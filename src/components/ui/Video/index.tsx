import { gql, useQuery } from '@apollo/client';
import { Lesson } from 'types/Lesson';
import '@vime/core/themes/default.css';
import { DefaultUi, Player, Youtube } from '@vime/react';
import { Button } from 'components/Button';
import { InfoCard } from 'components/cards/Info';
import { TeacherAvatar } from 'components/TeacherAvatar';
import { DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { isPast } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const GET_LESSON_BY_SLUG = gql`
	query GetLessonBySlug($slug: String) {
		lesson(where: { slug: $slug }) {
			title
			videoId
			availableAt
			description
			teacher {
				bio
				avatarURL
				name
			}
		}
	}
`;

type Props = {
	lessonSlug: string;
};

const Video = ({ lessonSlug }: Props) => {
	const navigate = useNavigate();

	const { data } = useQuery<{ lesson: Lesson }>(GET_LESSON_BY_SLUG, {
		variables: { slug: lessonSlug }
	});

	if (!data || !data.lesson) {
		return <div className={'flex-1'}>Loading...</div>;
	}

	if (data.lesson.availableAt && !isPast(data.lesson.availableAt)) {
		navigate(-1);
	}

	return (
		<section className={styles['container']}>
			<div>
				<div>
					<Player>
						<Youtube videoId={data.lesson.videoId} key={data.lesson.videoId} />
						<DefaultUi />
					</Player>
				</div>
			</div>

			<article className={styles['content']}>
				<section>
					<div>
						<h1>{data.lesson.title}</h1>
						<p>{data.lesson.description}</p>

						<TeacherAvatar
							className={'mt-6'}
							avatar={data.lesson.teacher.avatarURL}
							name={data.lesson.teacher.name}
							description={data.lesson.teacher.bio}
						/>
					</div>
					<div>
						<Button link={'teste'} icon={<DiscordLogo size={24} />}>
							Comunidade do Discord
						</Button>
						<Button
							link={'desafio'}
							icon={<Lightning size={24} />}
							variant={'outlined'}
						>
							Acesse o desafio
						</Button>
					</div>
				</section>
				<section>
					<InfoCard
						link={''}
						icon={<FileArrowDown size={39} />}
						title={'Material Complementar'}
						description={
							'Acesse o material complementar para acelerar o seu desenvolvimento'
						}
					/>

					<InfoCard
						link={''}
						icon={<Image size={39} />}
						title={'Wallpapers exclusivos'}
						description={
							'Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina'
						}
					/>
				</section>
			</article>
		</section>
	);
};

export { Video };
