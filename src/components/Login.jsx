import React, {useState, useContext} from 'react'
import UserContext from '../context/Usercontext'

export default function Login() {
    const[username,setuserName]=useState('')
    const[password,setPassword]=useState('')

    const{setUser}=useContext(UserContext)  //to call user context through UseContext hook


    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})   // assigned the value in setuser by importing userContext

    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e)=>setuserName(e.target.value)}
        placeholder='username' />
         {"      "}
        <input type='text'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
