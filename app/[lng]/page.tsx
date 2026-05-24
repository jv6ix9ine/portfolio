
import Hero from '@/views/Hero';
import { Fragment } from 'react';

type HomeProps = {
    params: Promise<{ lng: string }>;
};

export default async function Home({ params }: HomeProps) {
    const { lng } = await params;
    return (
        <Fragment>
            <Hero lng={lng}/>
        </Fragment>
    );
}
