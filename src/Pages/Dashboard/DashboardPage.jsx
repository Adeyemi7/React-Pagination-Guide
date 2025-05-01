import { Outlet } from 'react-router-dom';
import SideBar from '../../Components/Sections/SideBar';
import NavBar from '../../Components/Sections/NavBar';
import { useState } from 'react';

const DashboardPage = () => {
    
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="bg-[#F9F9F9] grid grid-cols-[16rem_1fr] h-screen w-screen  gap-4 pt-4 mb-12">
            <div className="  top-0 left-0 h-screen">
                <SideBar isActive={isActive} setIsActive={setIsActive} />
            </div>
            <div className=" flex flex-col w-ful gap-2 pr-3  ">
                <NavBar   />
                <div className=" flex-1 rounded-lg  mb-3 p-2">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
3;
export default DashboardPage;
