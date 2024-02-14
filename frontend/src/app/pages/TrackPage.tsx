import { cabinetExtraBold } from '../utils/fonts';
import TracksCard from '@/app/sections/Tracks/TracksCard';
import TrackLeftLeaf from '@/app/assets/icons/TrackLeftLeaf.svg';
import Image from 'next/image';
import TracksBodyCard from '../components/Tracks/TracksBodyCard';

const TrackPage = () => {
    return (
        <>
            <div className='relative'>
                <Image
                    src={TrackLeftLeaf}
                    alt='left leaf'
                    height={400}
                    className="absolute bottom-0 left-0 lg:block hidden"
                />
                <div className="py-20 mt-16">
                    <p className={`mb-8 ${cabinetExtraBold.className} text-center text-3xl lg:text-5xl text-primary-gradient-color w-fit mx-auto`}>
                        Tracks
                    </p>
                    <TracksCard />
                    <TracksBodyCard/>
                </div>
            </div>
        </>
    );
};

export default TrackPage;
