import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire } from 'react-icons/fa';
import SideBarIcon from './SideBarIcon';

function SideBar() {
    return (
        <div
            className='fixed top-0 left-0 h-screen w-16 m-0 
                        flex flex-col
                        bg-gray-900 text-white shadow-lg'
        >
            <SideBarIcon icon={<FaFire size='28' />} text='tooltip' />
            <SideBarIcon icon={<BsPlus size='32' />} />
            <SideBarIcon icon={<BsFillLightningFill size='20' />} />
            <SideBarIcon icon={<BsGearFill size='20' />} />
        </div>
    );
}

export default SideBar;
