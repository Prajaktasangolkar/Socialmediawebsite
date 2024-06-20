
import './App.css'
import { AuthHome } from './Auth/AuthHome/AuthHome'
import { Profile } from './Pages/Profile/Profile'
import { Home } from './components/Home/Home'

function App() {
  

  return (
    <>
      <div className='App'>
        <div className="blur" style={{top:'-18%',right:'0'}}></div>
        <div className="blur" style={{top:'36%',left:'-8rem'}}></div>
        {/* <Home/> */}
        <Profile/>
        {/* <AuthHome/> */}
      </div>
    </>
  )
}

export default App
