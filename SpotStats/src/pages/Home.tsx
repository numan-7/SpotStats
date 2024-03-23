import { useEffect, useState } from "react";
import axios from 'axios'
import Loading from "../components/Loading/Loading";
import NavBar from "../components/NavBar/NavBar";
import { UserInfo as userInfoInterface } from "../interfaces/SpotifyResponses.interface";
import { useNavigate } from "react-router-dom";
import UserInfo from "../components/UserInfo/UserInfo";
import TopList from "../components/TopList/TopList";

const Home = (): JSX.Element => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userInfo, setUserInfo] = useState<userInfoInterface | null>(null);

  useEffect(() => {
    axios.get('/api/user-info', { withCredentials: true })
      .then((res) => {
        setUserInfo(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
        navigate('/error'); 
      });
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-background-500 text-white-500">
        <Loading />
      </div>
    )
  }
  
  if (!userInfo) {
    navigate('/error')
  }

  return (
    <div className = "h-full">
      <NavBar 
        userName = {userInfo?.display_name}
      />
      <div className="flex flex-col gap-2 p-4 justify-start w-full bg-background-500 text-white-500">
        <UserInfo
          userName={userInfo?.display_name}
          userPfp={userInfo?.images[1].url}
          followers={userInfo?.followers.total}
        />
        <TopList />
      </div>
    </div>

  )
}

export default Home;
