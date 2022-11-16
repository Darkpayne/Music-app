import React, {useEffect} from 'react'

const Controls = ({currentSong,setCurrentSong, music, indexValue,setIndexValue,setActive,isPlaying,setisPlaying,togglePlaying, audio,toggleAudio }) => {
    
    // controllers
    // const [isPlaying, setisPlaying] = useState(false)

    // set Playing State
    // const togglePlaying = ()=>{
    //     setisPlaying(!isPlaying);
    // }
    // let audio = useRef('audio_tag')

    // const toggleAudio =()=>{
    //     audio.current.paused ? audio.current.play() : audio.current.pause();
    // }

    // previousSong
    const previousSong =()=>{
        if(indexValue === 0){
            setIndexValue(music.length-1)
            setCurrentSong(music[indexValue])
        }else{
            setIndexValue(indexValue-1)
            setCurrentSong(music[indexValue])
        }
    }

    // nextSong
    const nextSong =()=>{
        
        if(indexValue === music.length-1){
            setIndexValue(0)
            setCurrentSong(music[indexValue])
        }else{
            setIndexValue(indexValue+1)
            setCurrentSong(music[indexValue])
        }
    }

    const handleEnd = ()=>{
        if (indexValue == music.length - 1){
            setActive(false)
        }else{
            nextSong();
        }
    }

    const shuffleSong = () =>{
        const newSong = Math.floor(Math.random() * (music.length - 1 - 2 + 1) ) + 2;
        setIndexValue(newSong)
        setCurrentSong(music[newSong]);
    }

    useEffect(() => {
       setisPlaying(false)
    }, [currentSong])
   
   
    

  setCurrentSong(music[indexValue])

  return (
    <div className='flex fixed bottom-0 w-screen h-28 z-50 bg-black'>
        <audio ref={audio}
           onEnded={handleEnd}
           typeof="audio/mpeg" 
           preload='false'     
           autoPlay  
           src={currentSong.preview}
        />
            <div className="">
                <img src={currentSong.album.cover} alt="" className='h-full' />
            </div>
            <div className="text-white flex mx-5 justify-between w-[100%] items-center">
                <div className="">
                    <p className='md:text-lg text-sm'>{currentSong.title}</p>
                    <p className='md:text-sm text-xs'>{currentSong.album.title}</p>
                </div>

                {/* controls  */}
                <div className="md:text-3xl text-xl mx-3 md:mx-9">
                    <span onClick={previousSong} className='cursor-pointer md:mx-3 mx-1'> 
                    <ion-icon name="play-skip-back"></ion-icon>
                    </span>

                    <span onClick={()=>{
                        toggleAudio()
                        togglePlaying()
                    }}
                    className='cursor-pointer md:mx-3 mx-1'> 
                    <ion-icon name={isPlaying?"play":"pause"}></ion-icon>
                    </span>
                    
                    <span onClick={nextSong} className='cursor-pointer md:mx-3 mx-1'> 
                    <ion-icon name="play-skip-forward"></ion-icon>
                    </span>
                </div>

                <div className="text-3xl mx-3 md:mx-9 hidden md:inline">
                <span onClick={shuffleSong} className='cursor-pointer mx-3'> 
                <ion-icon name="shuffle-outline"></ion-icon>
                    </span>
                </div>
            </div>
    </div>
  )
}

export default Controls