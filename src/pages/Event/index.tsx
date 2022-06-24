import { Footer } from 'components/ui/Footer';
import { Header } from 'components/ui/Header';
import { Sidebar } from 'components/ui/Sidebar';
import { Video } from 'components/ui/Video';

const Event = () => {
	return (
		<div className={'flex min-h-screen flex-col'}>
			<Header />
			<main className={'flex flex-1'}>
				<div className={'flex-1'}>
					<Video />
					<Footer />
				</div>
				<Sidebar />
			</main>
		</div>
	);
};

export { Event };
