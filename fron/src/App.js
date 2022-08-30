import React
,{useState,useEffect} 
from 'react'
import './App.css';
import { Center } from './componets/Center';


function App() {
  
  const [data, setData] = useState([{}]);
  const [users, setUsers] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:5000/objetos").then(
      res => res.json()
    ).then(
      data => {
        console.log(data)
        setData(data)
      }
    )
  }, [])

  useEffect(() => {
    fetch("http://localhost:5000/usuarios").then(
      res => res.json()
    ).then(
      users => {
        setUsers(users)
      }
    )
  })
  
  

  return (
    <div className="App">
        <p>
          Basic
        </p>
        

        <Center objetos={data} usuarios={users}/>
    </div>
  );
}



export default App;
