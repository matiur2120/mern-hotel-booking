import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-800">
      <div className="container py-6 mx-auto flex justify-between items-center text-white">
        <Link className="text-3xl font-bold tracking-tight" to="/">
          MernHoliday.com
        </Link>
        <div className="flex gap-4 font-semibold">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of service</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
