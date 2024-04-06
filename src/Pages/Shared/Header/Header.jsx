import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 m-3'>
            <img src={logo} alt="" />
            <p className=' text-lg font-normal'>Journalism Without Fear or Favour</p>
            <p className='text-lg font-normal'>{moment().format("dddd, MMMM DD, 	YYYY")}</p>
        </div>
    );
};

export default Header;