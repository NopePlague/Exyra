import React, {useState} from 'react'
import SignIn from './SignIn';


const SignUp = ({ onClose, switchToSignin, onUserSignedUp }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(username, email, password);
        onUserSignedUp();
        onClose();
    }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose}></div>

      <div className="flex flex-col items-center  relative z-10 bg-white px-10 py-8 rounded-xl w-96 shadow-[0_0_40px_rgba(0,0,0,0.2)] gap-2">
        <h2 className="text-3xl font-bold mb-4 tracking-wider">Sign Up</h2>

        <form className="w-full" onSubmit={handleSubmit}>
            <input 
                className="w-full mb-3 p-2 border rounded border-gray-300" 
                placeholder="Username" 
                required 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                className="w-full mb-3 p-2 border rounded border-gray-300" 
                placeholder="Email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                className="w-full mb-3 p-2 border rounded border-gray-300" 
                type="password" 
                placeholder="Password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-99">
                Sign Up
            </button>
            <span className="text-gray-400">
            Already have an account? <a href="#signin" className="text-blue-500 font-medium" onClick={switchToSignin}>
                Sign In
            </a>
            </span>

            <div className="flex items-center gap-2 my-6 w-full">
                <div className="flex-1 h-[2px] bg-gray-200"></div>
                <span className="text-gray-400 text-sm font-medium">or</span>
                <div className="flex-1 h-[2px] bg-gray-200"></div>
            </div>
            <button className="w-full text-black border-black border px-4 py-1.5 rounded-md text-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-99">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png" className="inline h-7 mr-2" />
                Sign Up with Google
            </button>

        </form>
      </div>
    </div>
  );
}

export default SignUp
