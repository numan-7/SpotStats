import { useEffect, useState } from "react";
import {TopArtists} from "../../interfaces/SpotifyResponses.interface";
import axios from "axios";
import Loading from "../Loading/Loading";

const TopList = (): JSX.Element => {
  const [topArtists, setTopArtists] = useState<TopArtists[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const getArtists = async () => {
    axios.get('/api/user-artists')
      .then((response) => {
        console.log(response.data.items)
        setTopArtists(response.data.items);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
    };
    getArtists();
  }, []);
  
  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-background-500 text-white-500">
        <Loading />
      </div>
    );
  }

  return (
    <div className = "flex flex-col gap-2 w-full overflow-auto">
      <h1>Top Artists</h1>
      <div className = "flex gap-3">
        {topArtists && topArtists.map((artist, index: number) => {
          return (
            <div key={artist.id}>
              <img 
                className="w-24 h-24 rounded-md border-1 max-w-none"
                src={artist.images[0].url} 
                alt="artist profile picture" 
              />
              <div className = "flex gap-2">
                <p>{index + 1}</p>
                <p>{ artist.name}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )

}

export default TopList