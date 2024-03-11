import { Link } from "react-router-dom";

const ErrorPage = ():JSX.Element => {
  return (
    <div className="grid h-screen place-content-center bg-bg-500 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>
        <p className="text-2xl font-bold tracking-tight text-gray-800 sm:text-4xl">Uh-oh!</p>
        <p className="mt-4 text-gray-500">We can't find that page.</p>
        <Link
          to="/"
          className="mt-6 transition duration-300 flex justify-center items-center gap-2 font-main bg-teal-500 hover:-translate-y-1 hover:bg-teal-600 text-black font-bold py-3 w-72 rounded-full"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;