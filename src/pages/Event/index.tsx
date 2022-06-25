import {Footer} from 'components/ui/Footer';
import {Header} from 'components/ui/Header';
import {Sidebar} from 'components/ui/Sidebar';
import {Video} from 'components/ui/Video';
import {NoVideo} from 'components/ui/NoVideo';
import {useParams} from 'react-router-dom';
import {EventDetails, useGetEventDetailsQuery} from "graphql/generated";

const Event = () => {
    const {slug} = useParams<{ slug: string }>();

    /**
     * Queries
     */
    const {data, loading} = useGetEventDetailsQuery();

    if (!data || !data.eventDetails || loading) {
        return <div>Loading</div>;
    }

    return (
        <div className={'flex min-h-screen flex-col'}>
            <Header/>
            <main className={'flex flex-1'}>
                <div className={'flex flex-1 flex-col'}>
                    {
                        slug ?
                            <Video event={data.eventDetails as EventDetails} lessonSlug={slug}/> :
                            <NoVideo event={data.eventDetails as EventDetails} className={'flex-1'}/>
                    }
                    <Footer className={'w-full'}/>
                </div>
                <Sidebar/>
            </main>
        </div>
    );
};


export {Event};