import React from 'react'

function App() {
async function getRes(){
 const res=await fetch("http://localhost:3000/")
 let data=await res.json()
 console.log(data)

}
  return (
    <div>
      <button onClick={()=>getRes()}>Send Request</button> 
    </div>
  )
}

export default App