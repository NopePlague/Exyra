import React, {useState} from 'react'
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [activeUser, setActiveUser] = useState(true); //turn this False
  const navigate = useNavigate();
  let homeCard = [
    {svg: "./src/assets/card1.png", Title:"Add Skills", Description:"Add the skills you can teach and the ones you want to learn."},
    {svg: "./src/assets/card2.webp", Title:"Find People", Description:"Discover people with skills you want and connect."},
    {svg: "./src/assets/card3.png", Title:"Start Sessions", Description:"Exchange skills in a session and grow together."},
  ]
  return (
    <div>
      {activeModal === "signup" && (
        <SignUp 
          onClose={() => setActiveModal(null)}
          switchToSignin={() => setActiveModal("signin")}
          onUserSignedUp={() => setActiveUser(true)}
        />
      )}
    
      {activeModal === "signin" && (
        <SignIn 
          onClose={() => setActiveModal(null)}
          switchToSignup={() => setActiveModal("signup")}
          onUserSignedIn={() => setActiveUser(true)}
        />
      )}



      <nav className="text-2xl bg-white border-gray-300 border-b px-8 h-15.5 flex">
        <div className='w-full flex items-center'>
          <img src="/src/assets/longLogo.png" className='inline-block h-11 pl-4' />
        </div>
        <div className='w-full flex items-center justify-around gap-10'>
          <a href="#about"><span className='navText'>About</span></a>
          <a href="#how-it-works"><span className='navText'>How It Works</span></a>
          {!activeUser && (
            <a href="#signin" onClick={() => setActiveModal("signin")}><span className='navText'>Sign In</span></a>
          )}
          <button onClick={()=> activeUser ? navigate('/dashboard') : setActiveModal("signup")} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-99">
            Get Started
          </button>
        </div>
      </nav>




      <section className="flex items-stretch" id="about">
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
            <button onClick={()=> activeUser ? navigate('/dashboard') : setActiveModal("signup")} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-99" >
              Get Started
            </button>
            <a href="#how-it-works" className="text-blue-600 font-medium">
              Learn More →
            </a>
          </div>
        </div>

        <div className="w-1/2">
          <img src="/src/assets/aboutImage.png" className="w-full h-full object-cover" />
        </div>
      </section>




      <section className="flex items-stretch flex-col gap-5 mt-10" id="how-it-works">
        <div className="flex justify-center text-3xl font-bold text-black">
          How Exyra Works
        </div>
        <div className="flex justify-center text-lg text-gray-600 tracking-wider">
          A simple 3-step process to start learning and teaching on Exyra.
        </div>
        <div className="flex justify-around items-center mt-5 py-15">
          {homeCard.map((card, index) => (
            <div className="flex flex-col gap-5 items-center rounded-xl px-5 py-10 w-80 justify-around relative z-10 -mt-10 shadow-[0_0_10px_rgba(0,0,0,0.15)]" key={index}>
              <img src={card.svg} className="w-10" />
              <p className="text-xl font-semibold">{card.Title}</p>
              <p className="text-center text-gray-600">{card.Description}</p>
            </div>
          ))}
          
        </div>
      </section>


      <section className="flex items-stretch pb-10 px-20 rounded-xl gap-10">
        <div className="w-1/2">
          <img src="/src/assets/howItWorksImage.png" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/2 flex justify-center flex-col box-border px-15 gap-15">
          <div className='flex flex-col gap-1'>
            <p className='text-4xl font-bold text-black'>Build your Skills.</p>
            <p className='text-4xl font-bold text-blue-600' >Build the Future.</p>
          </div>
          <div>
            <p className='text-lg text-gray-600'>Join thousands of users who have already started building their skills on Exyra. Learn from experts, teach others, and grow together in our supportive community.</p>
          </div>
          <div className='flex gap-10 items-center'>
            <button onClick={()=> activeUser ? navigate('/dashboard') : setActiveModal("signup")} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-99" >
              Get Started
            </button>
          </div>
        </div>

      </section>

      <footer className="text-center text-gray-500 px-10">
        <div className="flex items-center gap-2 mt-6 mb-3 w-full">
            <div className="flex-1 h-[2px] bg-gray-200"></div>
        </div>
        <div>
          <img src="/src/assets/longLogo.png" className=" h-8 mr-2" />
        </div>
        <div className="flex justify-between items-center gap-2 mt-3 mb-6 w-full">
          <div>
            <p>&copy; 2026 Exyra. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <p>About</p>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Contact</p>
          </div>
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/aniket-kumar-383b1a37a/" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png" className="h-8 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/nope_plague/?next=%2F&hl=en" target="_blank">
              <img src="https://dreamfoundry.org/wp-content/uploads/2018/12/instagram-logo-png-transparent-background.png" className="h-8 cursor-pointer" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
