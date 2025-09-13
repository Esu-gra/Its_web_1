import { useEffect } from 'react';

import axios from 'axios';

const url="https://jsonplaceholder.typicode.com/users"
const RenderCondizionale=() =>{
    const [isError,setIsError]=useState(false)
    const [isloading,setIsLoading]=useState(true);
    const[users,setUsers]=useState([])
    const getData=async()=>{
        setIsError(false)
        setIsLoading(true)
        try{
            const response=await axios.get(url)
            setUsers(response.data)
        } catch(error){
            console.log(error);
            setIsError(true)
            
        };
        setIsLoading(false)
        

    }
  if(isloading){
    return <Loading></Loading>
  }
   if(isError){
    return <ErrorRender></ErrorRender>
   }
   
  return <div>RenderCondizionale</div>
   
  
}

export default RenderCondizionale
