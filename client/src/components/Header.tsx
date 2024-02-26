import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-800">
      <div className="">
        <div className="container w-full flex justify-between items-center mx-auto py-6">
          <Link className="text-2xl text-white font-bold tracking-tight" to="/">
            MernHoliday.com
          </Link>

          <Link
            className="bg-white px-4 py-2 border border-gray-500 rounded-md text-sm hover:bg-gray-300"
            to="/sign-in"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
