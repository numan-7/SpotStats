import { ChartBarIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

interface HeaderProps {
  userName?: string;
}

const Header = ({ userName}: HeaderProps): JSX.Element => { 
  return (
    <nav className="bg-background-800 border-gray-200 font-main ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 1, ease: "easeInOut"},
          }}
          className="flex items-center gap-2"
        >
            <ChartBarIcon className="w-6 h-6 text-teal-500" />
            <span className="self-center text-xl whitespace-nowrap text-green-500 ">spotstats for {userName}</span>
        </motion.div>
      </div>
    </nav>
  );
};

export default Header;
