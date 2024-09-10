import { useState } from 'react';
import { useEffect } from 'react'
import './App.css';
import axios from "axios";

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get("http://localhost:3000").then((result) => setData(result));
  }, []);

  console.log(data)

  return (
    <>
    <ul>
      <table>
        <thead>

        </thead>
      {/* {
        data?.map=((item, index)=> {
          {<li key={index}>{item.nama_lengkap}</li>
          }
        })
      } */} 
      </table>
    </ul>
    <p>test</p>

    </>
  )
}

export default App
