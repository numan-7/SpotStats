import { motion } from 'framer-motion';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const Login = (): JSX.Element => {

  const handleLogin = () => {
    window.location.href = '/auth/spotify';
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col justify-center items-center h-screen w-screen bg-background-500 text-white-500 text-center "
    >
      <h1 className="text-4xl font-main font-bold mb-2 text-teal-500 hover:text-teal-600 transition duration-300 ease-in-out delay-150 ">
        Welcome to SpotStats!
      </h1>
      <p className="max-w-md text-lg mb-4 font-main text-white-800">
        Log in now to explore your Spotify statistics and get a deeper insight into yourself.
      </p>
      <button 
        onClick={handleLogin}
        className ="transition duration-300 flex justify-center items-center gap-2 font-main bg-teal-500 hover:-translate-y-1 hover:bg-teal-600 text-black font-bold py-3 w-72 rounded-full"
      >
        <UserCircleIcon className="h-6 w-6" />
        LOGIN
      </button>
    </motion.div>
  )
}

export default Login;
