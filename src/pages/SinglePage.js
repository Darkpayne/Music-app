import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Footer from '../components/Footer';
import Nav from '../components/Nav';


const SinglePage = () => {
  const [music, setMusic] = useState([])

  const {artist} = useParams();
  const options = {
    method: 'GET',
    headers: {'X-RapidAPI-Key': '6271353133msh9b39ef383f0d04ep1e6e5ejsn554197c5fc37','X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'}
  };
  
  function getMusic(){
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`, options)
    .then(response => response.json())
    .then(response => setMusic(response.data))
    .catch(err => console.error(err));
  }

  const {pathname} = useLocation()
  useEffect(() => {
    getMusic()
  }, [artist])


console.log(music);

  return (
    <div>
        <Nav/>
        <div className="lg:container lg:mx-auto p-4 bg-slate-50">
          <div className="text-center my-7">
            <h1 className='title p-2 uppercase'>{artist}</h1>
          </div>
         {
          music.map((song)=>{
            const {id,title,md5_image,link,preview} = song;
            return (
            <div key={id} className="flex justify-between items-center ">
              <div className="">
                <span><ion-icon name="play-skip-back-outline"></ion-icon></span>
                <img src={song.album.cover} alt="" />
                <span><ion-icon name="play-skip-forward-outline"></ion-icon></span>
              </div>
              <div className="">
                <div className="">
                  <h1>{title}</h1>
                </div>
              </div>
            </div>
            
            )
          })
         }
        </div>
        <Footer/>
    </div>
  )
}

export default SinglePage