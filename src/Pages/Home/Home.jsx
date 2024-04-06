import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNab/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className=" grid lg:grid-cols-4 grid-cols-1 mt-14">
                <div className=" col-span-1">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=" lg:col-span-2"><h2 className="text-2xl">news comming soon</h2></div>
                <div className=" col-span-1 ">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;