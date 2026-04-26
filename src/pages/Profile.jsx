import React from 'react'
import NavBar from '../components/NavBar'

const Profile = () => {
  return (
    <div>
        <NavBar />
        <div className='pt-[62px]'></div>
        <div className='p-4 flex flex-col gap-6'>

            <div className="flex text-2xl rounded-xl p-8 relative z-10 shadow-[0_0_10px_rgba(0,0,0,0.15)] gap-10">
                <div className="flex-1 flex items-center justify-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1280px-Default_pfp.svg.png"
                        className="h-55 cursor-pointer"
                    />
                </div>
                <div className="flex-4 relative flex flex-col gap-4 items-start">
                    <h1 className="text-4xl font-bold">
                        username
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/3840px-Twitter_Verified_Badge.svg.png" className="inline h-6 ml-2" />
                    </h1>
                    <div className="flex gap-3">
                        <span className=" px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-full">
                            <img src="./src/assets/Logo.png" className="inline h-4 mr-1" />
                            Exyra Member
                        </span>

                    </div>
                    <p className="text-lg w-1/2 line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error architecto saepe ut molestias ullam facere maxime provident incidunt ad consequatur atque fugit eos distinctio, voluptate minus earum. Recusandae, perferendis delectus.</p>
                    <div className="flex gap-10 items-center absolute bottom-0 left-0">

                        <span className="text-sm text-gray-500 flex items-center">
                            <img src="https://img.icons8.com/?size=100&id=cIUKs5wRJGDi&format=png&color=000000" className="h-4 mr-1" />
                            Sonipat, Haryana
                        </span>
                        <span className="text-sm text-gray-500 flex items-center">
                            <img src="https://img.icons8.com/?size=100&id=UTe6yKq2hvHK&format=png&color=000000" className="h-4 mr-1" />
                            Joined Jan 2026
                        </span>
                    </div>
                    <button className=" text-blue-500 font-bold py-2 px-4 border border-blue-500 rounded absolute top-0 right-0 text-sm hover:bg-blue-500 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-99">
                        Edit Profile
                    </button>
                </div>
            </div>

            <div className="flex gap-6">
                <div className="flex flex-col rounded-xl p-3 relative z-10 shadow-[0_0_10px_rgba(0,0,0,0.15)] flex-1 gap-2">
                    <p className="text-sm font-bold flex items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/4474/4474325.png" className="h-7 mr-1 bg-blue-400/40 rounded-full p-[3px] box-border" />
                        Trust Score
                    </p>
                    <p className="flex items-end">
                        <span className="text-3xl font-bold text-black">4.8</span>
                        <span className="text-sm text-gray-400 relative bottom-1">/5</span>
                    </p>
                    <p className="text-sm text-gray-500 relative bottom-1">Top 10% of Exyra</p>
                    <div className="absolute bottom-0 right-2 text-[120px] font-bold text-black/5 leading-none">
                        4.8
                    </div>
                </div>

                <div className="flex flex-col rounded-xl p-3 relative z-10 shadow-[0_0_10px_rgba(0,0,0,0.15)] flex-1 gap-2">
                    <p className="text-sm font-bold flex items-center">
                        <img src="https://images.vexels.com/media/users/3/140908/isolated/preview/bdc30bbe3c022a11e2d7fd0e642c61ae-open-book-icon.png" className="h-7 mr-1 bg-green-400/40 rounded-full p-[3px] box-border" />
                        Sessions Completed
                    </p>
                    <p className="flex items-end">
                        <span className="text-3xl font-bold text-black">23</span>
                    </p>
                    <p className="text-sm text-gray-500 relative bottom-1"><span className="text-green-500 font-bold text-lg">↑</span>5 This month</p>
                    <div className="absolute bottom-0 right-2 text-[120px] font-bold text-black/5 leading-none">
                        23
                    </div>
                </div>

                <div className="flex flex-col rounded-xl p-3 relative z-10 shadow-[0_0_10px_rgba(0,0,0,0.15)] flex-1 gap-2">
                    <p className="text-sm font-bold flex items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/201/201272.png" className="h-7 mr-1 bg-amber-400/40 rounded-full p-[3px] box-border" />
                        Credits Balance
                    </p>
                    <p className="flex items-end">
                        <span className="text-3xl font-bold text-black">120</span>
                    </p>
                    <p className="text-sm text-gray-500 relative bottom-1">Available Credits</p>
                    <div className="absolute bottom-0 right-2 text-[120px] font-bold text-black/5 leading-none">
                        120
                    </div>
                </div>
                
                
                
            </div>

        </div>
    </div>
  )
}

export default Profile
