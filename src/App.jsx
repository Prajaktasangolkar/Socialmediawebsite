import React from "react";
import "./App.css";
import Authenticate from "./Auth/Authenticate.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home } from "./components/Home/Home.jsx";
import { Profile } from "./Pages/Profile/Profile.jsx";

// const AppContent = () => {
//   const user = useSelector((state) => state.authReducer.data.user);
//   console.log("userrrr", user);

//   return (
//     <div className="App">
//       <div className="blur" style={{ top: "-18%", right: "0" }}></div>
//       <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
//       <BrowserRouter>
//         {/* <Routes>
//           console.log({user});
//           <Route
//             path="/"
//             element={user ? <Navigate to="/home" /> : <Navigate to="/auth" />}
//             />
//           <Route
//             path="/home"
//             element={user ? <Home /> : <Navigate to="/auth" />}
//           />
//           <Route
//             path="/auth"
//             element={user ? <Navigate to="/home" /> : <Authenticate />}
//           />
//         </Routes> */}
//      <Routes>
//   {/* Root path */}
//   <Route
//     path="/"
//     element={user ?  <Navigate to="/home"/>:<Navigate to="/auth" />  }
//   />
 
//   <Route path="/home" element={<Home />} />
 
//   <Route path="/auth" element={<Authenticate />} />
//   <Route path='profile/:id' element={<Profile/>}/>
// </Routes>
   
//       </BrowserRouter>
//     </div>
//   );
// };
const AppContent = () => {
  const user = useSelector((state) => state.authReducer.data?.user); // Use optional chaining

  console.log("userrrr", user);

  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/home" /> : <Navigate to="/auth" />}
          />
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="/auth" />}
          />
          <Route
            path="/auth"
            element={user ? <Navigate to="/home" /> : <Authenticate />}
          />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};


function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
