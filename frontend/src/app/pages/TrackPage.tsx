import { cabinetExtraBold } from '../utils/fonts';
import TracksCard from '@/app/sections/Tracks/TracksCard';
import TrackLeftLeaf from '@/app/assets/icons/TrackLeftLeaf.svg';
import Image from 'next/image';
import TracksBodyCard from '@/app/components/Tracks/TracksBodyCard';
import InteractiveTechnologySVG from '@/app/assets/icons/InteractiveTechnology';
import DataScienceSVG from '@/app/assets/icons/DataScience';
import BlockchainSVG from '@/app/assets/icons/Blockchain';
import OpenInnovationSVG from '@/app/assets/icons/OpenInnovation';

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
                </div>
            </div>
        </>
    );
};

export default TrackPage;
