import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaFire } from 'react-icons/fa';
import { IoCompassSharp } from 'react-icons/io5';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900">
      <SideBarIcon icon={<FaFire size="34"/>}/>
      <SideBarIcon icon={<BsPlus size="34"/>}/>
      <SideBarIcon icon={<BsFillLightningFill size="34"/>}/>
      <SideBarIcon icon={<IoCompassSharp size="34"/>}/>
    </div>
  );
};

const SideBarIcon = ({ icon }) => (
  <div className="sidebar-icon">
    {icon}
  </div>
);

export default SideBar;