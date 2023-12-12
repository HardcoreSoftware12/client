import axios from "axios"
import { useEffect } from "react";

function App() {

  // const [user,setUser]
  useEffect(()=>{
    axios.get("http://127.0.0.1:3000/getUsers")
    .then(res => console.log(res.data))
  })
  return (
    <>
    hello
    </>
  );
}

export default App;
