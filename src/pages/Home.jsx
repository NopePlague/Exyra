import React from 'react'

const Home = () => {
  let homeCard = [
    {svg: "./src/assets/card1.png", Title:"Add Skills", Description:"Add the skills you can teach and the ones you want to learn."},
    {svg: "./src/assets/card2.webp", Title:"Find People", Description:"Discover people with skills you want and connect."},
    {svg: "./src/assets/card3.png", Title:"Start Sessions", Description:"Exchange skills in a session and grow together."},
  ]
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

      <section className="flex items-stretch">
        <div className="w-1/2 flex justify-center flex-col box-border px-15 gap-10">
          <div className='flex flex-col gap-1'>
            <p className='text-4xl font-bold text-black'>Learn by teaching.</p>
            <p className='text-4xl font-bold text-blue-600 w-1/2' >Exchange skills, not money</p>
          </div>
          <div>
            <p className='text-lg text-gray-600'>Exyra is a skill-exchange platform where learning and teaching go hand in hand. Users can learn new skills from others while sharing what they already know, creating a balanced system of mutual growth. Instead of paying for courses, people connect, collaborate, and exchange knowledge through real interactions. Whether you're a beginner or experienced, Exyra helps you grow by both learning from others and teaching them in return.</p>
          </div>
          <div>
            <p className='text-lg text-gray-600 tracking-wider'>Learn → Teach → Evolve</p>
          </div>
          <div className='flex gap-10 items-center'>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-99">
              Get Started
            </button>
            <a href="#learn-more" className="text-blue-600 font-medium">
              Learn More →
            </a>
          </div>
        </div>

        <div className="w-1/2">
          <img src="/src/assets/aboutImage.png" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="flex items-stretch flex-col gap-5 mt-10">
        <div className="flex justify-center text-3xl font-bold text-black">
          How Exyra Works
        </div>
        <div className="flex justify-center text-lg text-gray-600 tracking-wider">
          A simple 3-step process to start learning and teaching on Exyra.
        </div>
        <div className="flex justify-around items-center mt-5 py-15">
          {homeCard.map((card, index) => (
            <div className="flex flex-col gap-5 items-center rounded-xl px-5 py-10 w-80 justify-around shadow-xl relative z-10 -mt-10">
              <img src={card.svg} className="w-10" />
              <p className="text-xl font-semibold">{card.Title}</p>
              <p className="text-center text-gray-600">{card.Description}</p>
            </div>
          ))}
          
        </div>
      </section>
    </div>
  )
}

export default Home
