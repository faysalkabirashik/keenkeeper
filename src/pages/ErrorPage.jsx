import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F8FAFC]">
      <h1 className="text-8xl font-bold text-[#244D3F]">
        404
      </h1>

      <p className="text-2xl mt-4 text-[#64748B]">
        Page Not Found
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-[#244D3F] text-white rounded-xl"
      >
        Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;