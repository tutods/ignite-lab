import { Footer } from 'components/ui/Footer';
import { Header } from 'components/ui/Header';
import { Sidebar } from 'components/ui/Sidebar';
import { Video } from 'components/ui/Video';
import { NoVideo } from 'pages/NoVideo';
import { useParams } from 'react-router-dom';

const Event = () => {
	const { slug } = useParams<{ slug: string }>();

	return (
		<div className={'flex min-h-screen flex-col'}>
			<Header />
			<main className={'flex flex-1'}>
				<div className={'flex flex-1 flex-col'}>
					{slug ? <Video lessonSlug={slug} /> : <NoVideo className={'flex-1'} />}
					<Footer className={'w-full'} />
				</div>
				<Sidebar />
			</main>
		</div>
	);
};

export { Event };
