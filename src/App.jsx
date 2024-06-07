import verificacion from '/verificacion.svg'
import React, { useState } from 'react'
import './App.css'
const users = [
  { id: 1, nombre: "Gregf", img: './grefg.svg', nickname: "@TheGrefg" },
  { id: 2, nombre: "Roier", img: './roierjpg.svg', nickname: "@Roiereal" },
  { id: 3, nombre: "Liu Sivaya", img: './liuSivaya.svg', nickname: "@liusivaya" },
]

function RecorrerArray({ img, nombre, nickname }) {
  const [texto, setTexto] = useState(true);
  const cambio = () => {
    setTexto(!texto)

  }
  return (
    <div className="card">
      <div className="description">
        <img src={img} alt="imagenPerfil" />
        <div className="letras">
          <div className="verification">
            <h2>{nombre}</h2>
            <img src={verificacion} alt="fotoVerification" />
          </div>
          <p>{nickname}</p>
        </div>
      </div>
      <button className={texto ? "follow" : "following"} onClick={cambio} >
        <span className='activo'>
          {texto ? "Follow" : "Following"}
        </span>
        <span className='inactivo'>Unfollow</span>

      </button>
    </div>
  )
}


function App() {
  return (
    <>
      <div className="twitter">
        <h1>Who to follow</h1>
        <header className="container">
          {users.map(usuario => <RecorrerArray img={usuario.img} nombre={usuario.nombre} nickname={usuario.nickname} />
          )}
          <a href="#">Show More</a>
        </header>

      </div>
    </>
  )
}

export default App
