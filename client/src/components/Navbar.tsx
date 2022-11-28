import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="max-w-5xl bg-pink-300 mx-auto flex justify-between items-center p-4">
            <div className="basis-1/2 font-serif font-black text-xl">

                <Link to='/'>
                    Modiest
                </Link>
            </div>
            <div className="list-none flex basis-1/2 text-center">
                <li className="grow text-md font-semibold"><Link to="/">Home</Link></li>
                <li className="grow text-md font-semibold"><Link to="/products">Products</Link></li>
                <li className="grow text-md font-semibold"><Link to="/blogs">Blogs</Link></li>
            </div>
        </nav>
    )
}

export default Navbar;