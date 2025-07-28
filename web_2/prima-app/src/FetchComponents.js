import React, {useState} from 'react'


const url="https://jsonplaceholder.typicode.com/albums"
function FetchComponents() {
  const [albums,setAlbums]=useState([])

  const getData=async()=>{
    const response=await fetch(url)
    const albums=await response.json()
    setAlbums(albums)
  }

  useState(()=>{
    getData()

    // le promise 
    // fetch(url)
    // .then(res=>res.json())
    // .then(res=>{
    //     setAlbums(res)
    // })
  },[])



  return (
    <div>
        {

        albums.map((a)=>{
            return (<p>{a.title}</p>)
        })


        }

    </div>
  )
}

export default FetchComponents