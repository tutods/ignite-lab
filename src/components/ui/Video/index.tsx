import { Button } from 'components/Button';
import { DiscordLogo, Lightning } from 'phosphor-react';
import styles from './styles.module.scss';

const Video = () => {
	return (
		<section className={styles['container']}>
			<div>
				<div></div>
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
				<section></section>
			</article>
		</section>
	);
};

export { Video };
