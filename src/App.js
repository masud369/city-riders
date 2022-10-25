import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Vheicles from './Components/Vheicles/Vheicles';
import SearchDestination from './Components/SearchDestination/SearchDestination';
import NothingFound from './Components/NothingFound/NothingFound';
import { createContext, useState } from 'react';
import Singup from './Components/Login/Signup';
import Login from './Components/Login/Login';
import ProtectedRout from './Components/ProtectedRout/ProtectedRout';
import DestinationFixed from './Components/DesstinationFixed/DestinationFixed';
import LocationProtected from './Components/LocationProtected/LocationProtected';
import GoogleMap from './Components/GoogleMap/GoogleMap';

//sign context
export const UserContext = createContext();
//PassLocation context
export const PassLocation = createContext();
//PassVheicle context
export const PassVheicle = createContext();
function App() {
const [location, setLocation] = useState({})  
const [login, setLogin] = useState({})
const [vheicle, setVheicle] = useState({
  vhiclename:''
})
  return (
    <div className="App">
      <UserContext.Provider value={[login, setLogin]}>
       <PassLocation.Provider value={[location, setLocation]}>
        {/* <PassVheicle.Provider value={[vheicle, setVheicle]} /> */}
          <Router>
          <Header></Header>
            <Routes>
              <Route path="/" element={<Vheicles />} /> 
              <Route path="home" element={<Vheicles />} />  
              <Route path="/destination" element={<ProtectedRout />} >
                <Route path="/destination" element={<SearchDestination/>}/>  
              </Route> 
              {/* <Route path="/destinationfixed" element={<LocationProtected />}>
                <Route path='/destinationfixed' element={<DestinationFixed/>} />  
              </Route>  */}
               <Route path='/destinationfixed' element={<DestinationFixed/>} /> 
              <Route path="signup" element={<Singup />} /> 
              <Route path="map" element={<GoogleMap />} /> 
              <Route path="login" element={<Login />} /> 
              <Route path="*" element={<NothingFound />} /> 
            </Routes>
          </Router>
          {/* <PassVheicle.Provider/> */}
          </PassLocation.Provider>
        </UserContext.Provider>
    </div>
  );
}

export default App;
