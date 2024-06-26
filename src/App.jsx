
import './App.css'
import  Authenticate  from './Auth/Authenticate.jsx'
// import { Login } from './Auth/Login/Login'

// import { Profile } from './Pages/Profile/Profile'
// import { Home } from './components/Home/Home'
import {Provider} from 'react-redux'
import store from './redux/store.js'

function App() {
  

  return (
    <Provider store={store}>
      <div className='App'>
        <div className="blur" style={{top:'-18%',right:'0'}}></div>
        <div className="blur" style={{top:'36%',left:'-8rem'}}></div>
         <Authenticate/>
        {/* <Home/> */}
        {/* <Profile/> */}
        {/* <SignUp/> */}
        {/* <Login/> */}
      </div>
    </Provider>
  )
}

export default App
