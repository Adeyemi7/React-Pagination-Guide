import { MdDangerous } from 'react-icons/md';
import Button from '../../Components/UI/Button';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleNavigationDashboard = () => {
        navigate('/Dashboard');
    };

    return (
        <div className="bg-[#D0940E]  h-screen w-screen">
            <div className=" w-[90%] mx-auto flex flex-col justify-center items-center content-center h-full">
                <div>
                    <MdDangerous className=" text-9xl text-red-600 animate-pulse " />
                </div>
                <div>
                    <h1 className="text-2xl text-white sm:text-4xl">
                        404 Error | Page Not Found
                    </h1>
                    <Button
                        type="submit"
                        name={'Back to Dashboard'}
                        buttonClassName="p-3 w-full mt-6 rounded-full font-bold text-[#D0940E] bg-white hover:bg-[#D0940E] hover:text-white sm:mt-10 "
                        buttonOnClick={handleNavigationDashboard}
                    />
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
