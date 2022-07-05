import React, {useState, useRef, useEffect} from 'react'

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

    console.log(indexValue);
    console.log(music.length -1);

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
           src={currentSong.preview}
        />
            <div className="">
                <img src={currentSong.album.cover} alt="" />
            </div>
            <div className="text-white flex mx-5 justify-between w-[100%] items-center">
                <div className="">
                    <p className='text-lg'>{currentSong.title}</p>
                    <p className='text-sm'>{currentSong.album.title}</p>
                </div>

                {/* controls  */}
                <div className="text-3xl mx-9">
                    <span onClick={previousSong} className='cursor-pointer mx-3'> 
                    <ion-icon name="play-skip-back"></ion-icon>
                    </span>

                    <span onClick={()=>{
                        toggleAudio()
                        togglePlaying()
                    }}
                    className='cursor-pointer mx-3'> 
                    <ion-icon name={isPlaying?"pause":"play"}></ion-icon>
                    </span>
                    
                    <span onClick={nextSong} className='cursor-pointer mx-3'> 
                    <ion-icon name="play-skip-forward"></ion-icon>
                    </span>
                </div>
            </div>
    </div>
  )
}

export default Controls