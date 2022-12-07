
import logo from '../assets/logo.png';
function Header(){
    return(
        <>
        <div className="  w-screen px-72 bg-pri">
        <div className="navbar  bg-pri" >
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl text-primary-content"><img className=' mr-2' src={logo} alt="SKILLS" /> SKILLS</a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul tabIndex={0} className=" bg-pri menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 text-primary-content">
                    <li>
                    <a className="justify-between  hover:bg-sec">
                        Profile
                    </a>
                    </li>
                    <li><a className="hover:bg-sec">Settings</a></li>
                    <li><a className="hover:bg-sec">Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
        </div>
        </>
    )

}
export default Header;