import { cabinetBold } from '@/app/utils/fonts'
import { ReactElement } from 'react'

interface TracksHeadingProps {
    svg?: ReactElement;
    title?: string;
    headStyling?: string;
    onClick?: () => void; // Add onClick to the props interface
}

const TracksHeading = ({
    svg,
    title,
    headStyling,
    onClick,
}: TracksHeadingProps) => {
    return (
        <div 
            className={`flex flex-row gap-4 items-center cursor-pointer p-3 text-lg ${cabinetBold.className}  ${headStyling} rounded-md `}
            onClick={onClick}
        >
            {svg}
            <span>{title}</span>
        </div>
    )
}
export default TracksHeading;