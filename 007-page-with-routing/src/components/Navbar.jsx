import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex py-4 px-8 justify-between bg-cyan-900">
      <h2 className="text-xl font-bold">Sparky</h2>
      <div className="flex gap-8">
        <Link className="text-lg font-bold" to="/">
          Home
        </Link>
        <Link className="text-lg font-bold" to="/about">
          About
        </Link>
        <Link className="text-lg font-bold" to="/contact">
          Contact
        </Link>
        <Link className="text-lg font-bold" to="/product">
          Product
        </Link>
        <Link className="text-lg font-bold" to="/course">
          Course
        </Link>
        <button
          className="text-lg font-bold"
          onClick={() => {
            navigate(-1);
          }}
        >
          Prev
        </button>
        <button
          className="text-lg font-bold"
          onClick={() => {
            navigate(+1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Navbar;
