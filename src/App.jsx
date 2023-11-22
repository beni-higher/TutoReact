import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const showTitle = false;
const todoList = [
    'Presenter React',
    'Presenter Jsx',
    'Creer des composants'
]


function App() {
    
  return <>
      <Title color="green">Mon compasant</Title>
      <input type="text"/>
            <h1 id="title" className="myClasse">My Title</h1>
    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatibus repellendus libero labore? Perspiciatis
       vero laborum repellendus doloremque. Animi beatae eaque voluptatum suscipit explicabo sed odit laboriosam delectus commodi. Odit!
    </p>
      <ul>
          {todoList.map(todo =>(<li key={todo} >{todo}</li> ))}
      </ul>
      
  </>
}

function Title({color, children,hidden}){
    if(hidden){
        return null
    }
    return <h1 style={{color:color}}>{children}</h1>
}

export default App
