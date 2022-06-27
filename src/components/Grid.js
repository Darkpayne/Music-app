import React from 'react'
import { Link } from 'react-router-dom'

const Grid = () => {
  return (
    <div>
        <div className="grid grid-cols-6 gap-4 mt-5">
        <Link to="/music/eminem">
            <div className="col-span-3 row-span-3 bg-cover bg-indigo-500 bg-[url('https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/500x500-000000-80-0-0.jpg')]">
        <div
            class="overflow-hidden  h-full cursor-pointer rounded-xl relative group"
        >
            <div
                class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
            >
                <div>
                    <div
                        class="  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                    >
                        <div class="font-bold">Jessie Watsica</div>

                        <div class="opacity-60 text-sm ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio dolores error iure, perferendis
                            sequi totam. Ad aliquam aperiam atque deleniti dolor
                            dolorem enim esse et in, inventore itaque, pariatur
                            reprehenderit.
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </Link>
          <Link to="/music/eminem"><div className="h-40 bg-indigo-300"></div></Link>
          <div className="h-40 bg-indigo-300"></div>
          <div className="h-40 bg-indigo-300"></div>
          <div className="h-40 bg-indigo-300"></div>
          <div className="h-40 bg-indigo-300"></div>
          <div className="h-40 bg-indigo-300"></div>
          <div className="h-40 bg-indigo-300"></div>
          <div className="h-40 bg-indigo-300"></div>
          <div className="h-40 bg-indigo-300"></div>
        </div>
    </div>
  )
}

export default Grid