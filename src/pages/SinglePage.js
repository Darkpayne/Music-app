import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Controls from '../components/Controls';
import Footer from '../components/Footer';
import Nav from '../components/Nav';


const SinglePage = () => {

  const [music, setMusic] = useState([]);
  const [artistInfo, setArtistInfo] = useState({});
  const [currentSong, setCurrentSong] = useState({});
  const [indexValue, setIndexValue] = useState()
  const [dataFetched, setDataFetched] = useState(false)
  const [active, setActive] = useState(false)

  const {artist} = useParams();
  // const navigate = useNavigate();
  const options = {
    method: 'GET',
    headers: {'X-RapidAPI-Key': '6271353133msh9b39ef383f0d04ep1e6e5ejsn554197c5fc37','X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'}
  };

  // controllers
  const [isPlaying, setisPlaying] = useState(false)

  // set Playing State
  const togglePlaying = ()=>{
      setisPlaying(!isPlaying);
  }
  let audio = useRef('audio_tag')

  const toggleAudio =()=>{
      audio.current.paused ? audio.current.play() : audio.current.pause();
  }
  
  function getMusic(){
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`, options)
    .then(response => response.json())
    .then(response =>{
      if(response.data){
        setDataFetched(true)
        setMusic(response.data)
      }else{
        console.log('there is an error');
      }
    })
    .catch(err => console.error(err));
  }
  function getArtist(){
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/artist/${artist}`, options)
    .then(response => response.json())
    .then(response => setArtistInfo(response))
    .catch(err => console.error(err));
  }

  


  useEffect(() => {
    getMusic()
    getArtist()
  }, [artist])
 
  
    const handleSelect = (index) =>{
    setIndexValue(index);
    setCurrentSong(music[index])
    setActive(true);

    }


  return (
    <div>
        <Nav/>
        <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">{artistInfo.name}</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-justify">In his 20 years of performing, {artistInfo.name} has traveled the world and shared his music with thousands of people. He is a master of both classical and jazz guitar. With the help of his award-winning backing band, he takes his audience on a musical journey.</p>
                <a href={artistInfo.link} target="_blank " className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Visit Profile
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path filerule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
                <a href="" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 capitalize">
                   {artistInfo.type}
                </a> 
            </div>


            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={artistInfo.picture_big} className="rounded-full " alt="mockup"/>
            </div>  
        </div>
        </section>
        <div className="lg:container lg:mx-auto p-4">
          <div className="grid grid-cols-3 gap-10">
            <div className="lg:col-span-2 col-span-3">
          {
            music.map((song,index)=>{
              const {title} = song;
              return (
              <div key={index} className={`cursor-pointer flex gap-10 items-center my-5 shadow-lg p-3 ${indexValue === index?'bg-gray-200':''}`} onClick={()=>handleSelect(index)}>

                <div className="flex items-center justify-between relative ">
                  <img className='w-16 rounded-full opacity-75' src={song.album.cover} alt="" />
                  <div className="absolute text-white text-center flex items-center justify-center right-5 text-3xl z-10">

                  <span onClick={(index)=>{
                        toggleAudio()
                        togglePlaying(index)
                    }}
                    className='cursor-pointer'> 
                    
                   <ion-icon name={isPlaying ?"pause":"play"}></ion-icon>
                    </span>

                  </div>                  
                </div>

                <div className="grow flex justify-between items-center">
                  <div className=" ">
                      <h1>{title}</h1>
                      <h1 className='font-thin text-gray-400'>{song.album.title}</h1>
                  </div>
                  {indexValue === index 
                  &&
                  <div className="">
                    <p className='text-sm text-gray-400 italic'>now playing</p>
                  </div>
                  }
                  <div className="text-right text-xl font-thin flex">
                    <span className='text-red-500 mr-5'><ion-icon name="heart-outline"></ion-icon></span>
                    <span><ion-icon name="ellipsis-vertical-outline"></ion-icon></span>
                  </div>
                </div>
              </div>
              
              )
            })
          }
            </div>
            <div className="my-10">
               
            </div>
         </div>
        </div>

        {active &&  <Controls indexValue={indexValue} currentSong={currentSong} setCurrentSong={setCurrentSong} music={music} setIndexValue={setIndexValue} handleSelect={handleSelect} setActive={setActive} isPlaying={isPlaying} setisPlaying={setisPlaying} togglePlaying={togglePlaying} audio={audio} toggleAudio={toggleAudio} dataFetched={dataFetched}/>}
       
        <Footer/>
    </div>
  )
}


export default SinglePage

