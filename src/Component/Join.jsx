import React from 'react'
import image1 from "./URL/cube.png"
export default function Join() {
  return (
    <div class="flex justify-center  h-80 ">
<a  class="flex flex-col items-center justify-between bg-indigo-600  rounded-3xl shadow md:flex-row w-10/12 relative dark:border-gray-700">
    <img class="-translate-y-9 object-cover w-full rounded-t-lg h-full md:h-auto md:w-96 md:rounded-none md:rounded-l-lg" src="https://www.kobigen.com/wp-content/uploads/2021/08/img-28.png" alt=""/>
     <div className='absolute translate-x-96'>
       <img className='w-24' src={image1} alt="" />
     </div>
    <div class="flex flex-col justify-between p-4 leading-normal mr-20">
        {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5> */}
        <h1 className="font-Teko text-6xl text-white" >JOIN US NOW</h1>
        <p className="text-white"> Lorem and ipsum dolor sit amet consectetur slides </p>
        <p className="text-white">adipisicing elit. Incidunt dolorem nobis inventore. </p>
        <br/>
        <button className="border-2 text-white  py-3 px-4 rounded-full w-44">Join Tournament</button>
    </div>
</a>

    </div>
  )
}
