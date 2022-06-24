import '@vime/core/themes/default.css';
import { DefaultUi, Player, Youtube } from '@vime/react';
import { Button } from 'components/Button';
import { InfoCard } from 'components/cards/Info';
import { TeacherAvatar } from 'components/TeacherAvatar';
import { DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react';
import styles from './styles.module.scss';

const Video = () => {
	return (
		<section className={styles['container']}>
			<div>
				<div>
					<Player>
						<Youtube videoId={'SO4-izct7Mc'} />
						<DefaultUi />
					</Player>
				</div>
			</div>

			<article className={styles['content']}>
				<section>
					<div>
						<h1>Aula 01 - Abertura do Ignite Lab</h1>
						<p>
							Nessa aula vamos dar início ao projeto criando a estrutura base da
							aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar
							o setup do nosso projeto no GraphCMS criando as entidades da aplicação e
							integrando a API GraphQL gerada pela plataforma no nosso front-end
							utilizando Apollo Client.
						</p>

						<TeacherAvatar
							className={'mt-6'}
							avatar={'https://github.com/tutods.png'}
							name={'Daniel Sousa'}
							description={'Frontend Developer at xgeeks'}
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
