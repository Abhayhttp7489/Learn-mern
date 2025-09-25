import {useState} from "react";
function counting(){
    const [count,setCount] = useState(0);
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Incremet me</button>
        </div>
    )

}
