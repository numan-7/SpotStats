import { ChartBarIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import axios from 'axios'

interface HeaderProps {
  userName?: string;
}

const handleLogout = () => {
  axios.get('/api/logout', { withCredentials: true })
  .then(() => {
    window.location.href = '/'
  })
}

const Header = ({ userName}: HeaderProps): JSX.Element => { 
  return (
    <nav className="bg-background-800 border-gray-200 font-main ">
      <div className="max-w-full flex flex-wrap items-center justify-between p-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2"
        >
            <ChartBarIcon className="w-6 h-6 text-teal-500" />
            <span className="self-center text-xl whitespace-nowrap text-green-500 ">spotstats for {userName}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span 
            onClick={handleLogout}
            className="self-center cursor-pointer text-md text-green-500 hover:text-red-500"
          >
            logout
          </span>
        </motion.div>
      </div>
    </nav>
  );
};

export default Header;
