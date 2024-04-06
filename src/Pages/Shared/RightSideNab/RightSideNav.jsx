import { FaGoogle, FaGithub, FaFacebook, FaTwitter , FaInstagram    } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-3 rounded-lg space-y-4 border-2">
                <h2 className="text-2xl font-semibold">Login with</h2>
                <div className="flex flex-col gap-3">
                    <button className="btn border-blue-700 text-blue-400"> <span className=" text-xl "><FaGoogle /></span> Continue with Google</button>
                    <button className="btn border-black"> <span  className=" text-2xl "><FaGithub /></span>Continue with Github</button>
                </div>
            </div>

            <div className=" mt-10">
                <h2 className="text-2xl my-3 font-semibold">Find Us On</h2>
                <div className="flex items-center gap-2 border-2 p-4">
                    <p className=" text-2xl text-blue-500"><FaFacebook /></p>
                    <p className=" text-lg">Facebook</p>
                </div>
                <div className="flex items-center gap-2 border-2 p-4">
                    <p className=" text-2xl text-blue-500"><FaTwitter  /></p>
                    <p className=" text-lg">Twitter</p>
                </div>
                <div className="flex items-center gap-2 border-2 p-4">
                    <p className=" text-2xl text-blue-500"><FaInstagram  /></p>
                    <p className=" text-lg">Instagram</p>
                </div>
            </div>
            <div className="p-3 bg-gray-100 mt-6 rounded-lg">
            <h2 className="text-2xl my-3 font-semibold">Q-Zone</h2>
                <div className="flex flex-col gap-4 justify-center items-center">
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;
