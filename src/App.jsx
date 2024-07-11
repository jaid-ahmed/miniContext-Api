
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import Usercontextprovider from './context/usercontextprovider'

function App() {
  

  return (
   <Usercontextprovider>
   <h1 className='text-white text-center '>Context Api</h1>
   
   <Login/>
   <Profile/>
   </Usercontextprovider>
  )
}

export default App
