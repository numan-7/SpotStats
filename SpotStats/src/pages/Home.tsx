import { useEffect } from "react";
import axios from 'axios'
const Home = (): JSX.Element => {
  
  useEffect(() => {
    axios.get('http://localhost:8888/api/user-stats', { withCredentials: true })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);  
  
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-background-500 text-white-500">
      <h1>Home!</h1>
    </div>
  )
}

export default Home;
