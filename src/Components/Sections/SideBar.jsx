
import UserIcon from '../Icons/UserIcons';
import LogoutIcon from '../Icons/LogoutIcon';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../Store/userSlice';

const SideBar = ({ isActive, setIsActive }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleActive = () => {
        setIsActive(!isActive);
    };

    const sideBarNavigation = [
        
        {
            id: 1,
            icons: <UserIcon />,
            text: 'Users',
            path: '/dashboard',
        }
    ];

    const handleLogout = () => {
        dispatch(clearUser());
        navigate('/');
    };

    return (
        <div className="fixed top-0 left-0 h-full w-[250px] border-r-[#F2F0EC] bg-[#FFFFFF]  border-r-[2px] flex flex-col">
            <div className="w-[90%] mx-auto block mt-10">
            </div>
            <div className="flex flex-col">
                {sideBarNavigation.map((navs) => (
                    <Link
                        key={navs.id}
                        to={navs.path}
                        role="button"
                        className={`w-[90%] mb-4 text-base font-normal mx-auto p-3 flex items-center gap-2 rounded-lg duration-150 
                            ${location.pathname === navs.path ? 'bg-[#D0940E] text-white' : 'bg-[#FFF2D8] hover:bg-[#D0940E] hover:text-white'}`}
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(navs.path);
                            handleActive(navs.id)
                                ? 'bg-[#D0940E]'
                                : 'bg-[#FFF2D8]';
                        }}
                    >
                        <span className="h-[0.9rem] aspect-square">
                            {navs.icons}
                        </span>
                        <span className="text-center">{navs.text}</span>
                    </Link>
                ))}
            </div>
            <div
                className="w-[90%] mx-auto bottom-0 absolute left-4 mb-10 p-3 flex items-baseline gap-2 bg-opacity-20 bg-[#FFF2D8] hover:bg-[#D0940E] hover:text-white hover:border-[#D0940E] rounded-lg  hover:delay-150 duration-150"
                onClick={handleLogout}
                role="button"
                onKeyDown={(e) => e.key === 'Enter' && handleLogout()}
            >
                <span className="h-[0.9rem] aspect-square">
                    <LogoutIcon />
                </span>
                <span className="text-[#DD1C1A] text-center text-[14px] font-normal">
                    Log out
                </span>
            </div>
        </div>
    );
};

export default SideBar;
