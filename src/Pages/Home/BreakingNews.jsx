import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex mt-9 bg-gray-100 px-4 py-3  rounded-2xl">
            <button className="  btn bg-red-400 border-none text-lg font-light "><Link className="no-underline text-gray-100 hover:text-red-400">Breaking News</Link> </button>
            <Marquee>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BreakingNews;