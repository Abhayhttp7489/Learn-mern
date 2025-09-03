import React, { useState } from 'react'
import axios from 'axios'

function App() {
  let [username, setUsername] = useState("")
  let [age, setAge] = useState("")
  let [city, setCity] = useState("")

async function getRes(){
 //const res=await fetch("http://localhost:3000/")
 //let data=await res.json()
 //console.log(data)

 //axios method is good for handling api requests
 axios.post("http://localhost:3000/", {username, age, city}) 
 .then((e)=>{
  console.log(e.data)
 })
 .catch((e)=>{
  console.log(e)
 })

}
  return (
    <div>
      <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
      <input type="text" placeholder='age' value={age} onChange={(e)=>setAge(e.target.value)} />
      <input type="text" placeholder='city' value={city} onChange={(e)=>setCity(e.target.value)} />
      <button onClick={()=>getRes()}>Send Request</button> 
    </div>
  )
}

export default App