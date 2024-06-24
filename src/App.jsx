
import './App.css'
import { SignUp } from './Auth/AuthHome/Signup'
import { Login } from './Auth/Login/Login'

import { Profile } from './Pages/Profile/Profile'
import { Home } from './components/Home/Home'

function App() {
  

  return (
    <>
      <div className='App'>
        <div className="blur" style={{top:'-18%',right:'0'}}></div>
        <div className="blur" style={{top:'36%',left:'-8rem'}}></div>
        {/* <Home/> */}
        {/* <Profile/> */}
        {/* <SignUp/> */}
        <Login/>
      </div>
    </>
  )
}

export default App
