import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2 className="text-3xl font-semibold">All Caterogy</h2>
            <div className=" space-y-6 mt-5">
            {
                categories.map(category => <Link to={`/category/${category.id}`} className="block text-xl font-semibold text-gray-400" key={category.id}>{category.name}</Link>)
            }
            </div>
        </div>
    );
};

export default LeftSideNav;