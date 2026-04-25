import React from 'react'

const Home = () => {
  return (
    <div>
      <nav className="text-2xl bg-white border-gray-300 border-b px-8 h-15.5 flex">
        <div className='w-full flex items-center'>
          <img src="/src/assets/longLogo.png" className='inline-block h-11 pl-4' />
        </div>
        <div className='w-full flex items-center justify-around gap-10'>
          <a href="#about"><span className='navText'>About</span></a>
          <a href="#how-it-works"><span className='navText'>How It Works</span></a>
          <a href="#login"><span className='navText'>Login</span></a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-99">
            Get Started
          </button>
        </div>
      </nav>

      <section className="flex flex-row items-center justify-center">
        <div className='bg-orange-500 w-full h-3xl'>Hi</div>
        <div className='w-full'>
          <img src="/src/assets/aboutImage.png" className='w-full' />
        </div>
      </section>
    </div>
  )
}

export default Home
